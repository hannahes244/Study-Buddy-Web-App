// routes/match.js
import express from "express";
import { Op } from "sequelize";
import Student from "../models/student.js";
import Match from "../models/match.js";
import { authenticateToken } from "../midware/authenticateToken.js";

const router = express.Router();

router.post("/match", authenticateToken, async (req, res) => {
  const { studentId1, studentId2 } = req.body;

  try {
    if (studentId1 === studentId2) {
      return res.status(400).json({ message: "Students must be different" });
    }

    const [student1, student2] = await Promise.all([
      Student.findByPk(studentId1),
      Student.findByPk(studentId2),
    ]);

    if (!student1 || !student2) {
      return res
        .status(404)
        .json({ message: "One or both students not found" });
    }

    const existingMatch = await Match.findOne({
      where: {
        [Op.or]: [
          { student_one_id: studentId1, student_two_id: studentId2 },
          { student_one_id: studentId2, student_two_id: studentId1 },
        ],
      },
    });

    if (existingMatch) {
      return res.status(400).json({ message: "Match already exists" });
    }

    const newMatch = await Match.create({
      student_one_id: studentId1,
      student_two_id: studentId2,
      match_status: "Pending", // default, but explicit
    });

    res.status(201).json({ message: "Match request sent", match: newMatch });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Accept or reject a match
router.patch("/match/:id", authenticateToken, async (req, res) => {
  const { status } = req.body;
  const validStatuses = ["Accepted", "Declined"];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ message: "Invalid match status" });
  }

  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) {
      return res.status(404).json({ message: "Match not found" });
    }

    // Optional: check if the user is one of the students involved
    if (
      req.user.type !== "student" ||
      (match.student_one_id !== req.user.id &&
        match.student_two_id !== req.user.id)
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this match" });
    }

    match.match_status = status;
    await match.save();

    res.json({ message: `Match ${status}`, match });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
