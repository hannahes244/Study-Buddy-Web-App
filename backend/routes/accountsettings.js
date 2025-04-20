import express from "express";
import bcrypt from "bcryptjs";
import multer from "multer";
import imagekit from "../utils/imagekit.js";
import { authenticateToken, authorizeRoles } from "../midware/authenticateToken.js";
import Educator from "../models/educator.js";
import Student from "../models/student.js";
import { Op } from "sequelize";

const router = express.Router();

// Store uploaded files in memory instead of on the disk
// Limit to 5MB
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
});

router.put(
  "/accountsettings",
  authenticateToken,
  authorizeRoles("student", "educator"), 
  upload.single("profileImage"),
  async (req, res) => {
    const {
      username,
      email,
      password,
      first_name,
      last_name,
      description,
      phone_number,
      profileImageURL
    } = req.body;

    try {
      const isStudent = req.user.role === "student";
      const model = isStudent ? Student : Educator;

      console.log("Decoded user:", req.user);
      const user = await model.findByPk(req.user.id);
      if (!user) return res.status(404).json({ message: "User not found" });

      // Hash new password
      if (password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
      }

      // Update any provided fields
      // Checks if username is already being used
      if (username && username !== user.username) {
        const usernameTaken = await model.findOne({
          where: { username, id: { [Op.ne]: user.id } },
        });
        if (usernameTaken) {
          return res.status(400).json({ message: "Username already in use" });
        }
        user.username = username;
      } 

      // Checks if email is already being used
      if (email && email !== user.email) {
        const emailTaken = await model.findOne({
          where: { email, id: { [Op.ne]: user.id } },
        });
        if (emailTaken) {
          return res.status(400).json({ message: "Email already in use" });
        }
        user.email = email;
      }
      if (first_name) user.first_name = first_name;
      if (last_name) user.last_name = last_name;
      if (description !== undefined) user.description = description;
      if (phone_number !== undefined && isStudent)
        user.phone_number = phone_number;

      // Image upload for profile image
      if (req.file) {
        const uploadResponse = await imagekit.upload({
          file: req.file.buffer,
          fileName: `${req.user.type}-${req.user.id}-${Date.now()}`,
          folder: "/profileImages",
        });
        user.profile_image = uploadResponse.url;
      } else if (profileImageURL) {
        const uploadResponse = await imagekit.upload({
          file: profileImageURL,
          fileName: `${req.user.type}-${req.user.id}-${Date.now()}`,
          folder: "/profileImages",
        });
        user.profile_image = uploadResponse.url;
      }

      await user.save();
      res.json({ message: "Account updated successfully", user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

export default router;