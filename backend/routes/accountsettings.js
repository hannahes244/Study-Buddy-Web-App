import express from "express";
import bcrypt from "bcryptjs";
import multer from "multer";
import { authenticateToken, authorizeRoles } from "../midware/authenticateToken.js";
import Educator from "../models/educator.js";
import Student from "../models/student.js";
import { Op } from "sequelize";

const router = express.Router();

// Store uploaded files in memory instead of on the disk
// Limit to 5MB
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
});

router.get(
  "/accountsettings",
  authenticateToken,
  authorizeRoles("student", "educator"),
  async (req, res) => {
    try {
      const isStudent = req.user.role === "student";
      const model = isStudent ? Student : Educator;
      const user = await model.findByPk(req.user.id);

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Send back the user data (exclude sensitive information like password hash and profile image binary)
      const { password,  ...userData } = user.get(); // Exclude profile_image profile_image,
      res.json(userData);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

router.put(
  "/accountsettings",
  authenticateToken,
  //authorizeRoles("student", "educator"),
  //upload.single("profile_image"),
  async (req, res) => {
    const {
      username,
      email,
      password,
      first_name,
      last_name,
      classification,
      description,
      phone_number,
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
      if (username && username !== user.username) {
        const usernameTaken = await model.findOne({
          where: { username, id: { [Op.ne]: user.id } },
        });
        if (usernameTaken) {
          return res.status(400).json({ message: "Username already in use" });
        }
        user.username = username;
      }

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
      if (classification) user.classification = classification;
      if (phone_number !== undefined && isStudent)
        user.phone_number = phone_number;

      //Store profile image directly in the database
      // if (req.file) {
      //   user.profile_image = req.file.buffer;
      //   console.log("user.profile_image before save:", user.profile_image);
      // }

      await user.save();
      res.json({ message: "Account updated successfully", user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
);

// Route to serve the profile image
router.get(
  "/accountsettings/profileimage/:userId",
  async (req, res) => {
    try {
      const isStudent = await Student.findByPk(req.params.userId);
      const isEducator = await Educator.findByPk(req.params.userId);
      const user = isStudent || isEducator;

      if (user && user.profile_image) {
        res.contentType("image/jpeg"); // Adjust content type based on your image type
        res.send(user.profile_image);
      } else {
        res.status(404).send("Profile image not found");
      }
    } catch (err) {
      console.error("Error fetching profile image:", err);
      res.status(500).json({ error: "Failed to retrieve profile image" });
    }
  }
);

export default router;


// import express from "express";
// import bcrypt from "bcryptjs";
// import multer from "multer";
// import imagekit from "../utils/imagekit.js";
// import { authenticateToken, authorizeRoles } from "../midware/authenticateToken.js";
// import Educator from "../models/educator.js";
// import Student from "../models/student.js";
// import { Op } from "sequelize";

// const router = express.Router();

// // Store uploaded files in memory instead of on the disk
// // Limit to 5MB
// const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: { fileSize: 5 * 1024 * 1024 }
// });

// router.get(
//     "/accountsettings",
//     authenticateToken,
//     authorizeRoles("student", "educator"),
//     async (req, res) => {
//     try {
//     const isStudent = req.user.role === "student";
//     const model = isStudent ? Student : Educator;
//     const user = await model.findByPk(req.user.id);

//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }

//     // Send back the user data (exclude sensitive information like password hash)
//     const { password, ...userData } = user.get(); // Use .get() to get a plain object
//     res.json(userData);
//     } catch (err) {
//     res.status(500).json({ error: err.message });
//     }
// }
// );


// router.put(
//   "/accountsettings",
//   authenticateToken,
//   authorizeRoles("student", "educator"), 
//   upload.single("profileImage"),
//   async (req, res) => {
//     const {
//       username, //yes
//       email, //yes
//       password, //yes
//       first_name, //yes
//       last_name, //yes
//       classification, //yes
//       description, //yes
//       phone_number, //yes and no
//       profileImageURL //no profileImageURL
//     } = req.body;

//     try {
//       const isStudent = req.user.role === "student";
//       const model = isStudent ? Student : Educator;

//       console.log("Decoded user:", req.user);
//       const user = await model.findByPk(req.user.id);
//       if (!user) return res.status(404).json({ message: "User not found" });

//       // Hash new password
//       if (password) {
//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);
//       }

//       // Update any provided fields
//       // Checks if username is already being used
//       if (username && username !== user.username) {
//         const usernameTaken = await model.findOne({
//           where: { username, id: { [Op.ne]: user.id } },
//         });
//         if (usernameTaken) {
//           return res.status(400).json({ message: "Username already in use" });
//         }
//         user.username = username;
//       } 

//       // Checks if email is already being used
//       if (email && email !== user.email) {
//         const emailTaken = await model.findOne({
//           where: { email, id: { [Op.ne]: user.id } },
//         });
//         if (emailTaken) {
//           return res.status(400).json({ message: "Email already in use" });
//         }
//         user.email = email;
//       }
//       if (first_name) user.first_name = first_name;
//       if (last_name) user.last_name = last_name;
//       if (description !== undefined) user.description = description;
//       if (classification) user.classification = classification;
//       if (phone_number !== undefined && isStudent)
//         user.phone_number = phone_number;

//       // Image upload for profile image
//       if (req.file) {
//         const uploadResponse = await imagekit.upload({
//           file: req.file.buffer,
//           fileName: `${req.user.type}-${req.user.id}-${Date.now()}`,
//           folder: "/profileImages",
//         });
//         user.profile_image = uploadResponse.url;
//       } else if (profileImageURL) {
//         const uploadResponse = await imagekit.upload({
//           file: profileImageURL,
//           fileName: `${req.user.type}-${req.user.id}-${Date.now()}`,
//           folder: "/profileImages",
//         });
//         user.profile_image = uploadResponse.url;
//       }

//       await user.save();
//       res.json({ message: "Account updated successfully", user });
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }
// );

// export default router;