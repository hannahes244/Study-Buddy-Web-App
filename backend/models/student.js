import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Match from "../models/match.js"

const Student = sequelize.define("student", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING(45), unique: true, allowNull: false },
  first_name: { type: DataTypes.STRING(45), allowNull: false },
  last_name: { type: DataTypes.STRING(45), allowNull: false },
  email: { type: DataTypes.STRING(45), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  phone_number: { type: DataTypes.STRING(9), allowNull: true },
  classification: {
    type: DataTypes.ENUM("Freshman", "Sophomore", "Junior", "Senior"),
  },
  description: { type: DataTypes.TEXT },
  create_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  profile_image: { type: DataTypes.TEXT },
});

Student.hasMany(Match, { foreignKey: "student_1_id", as: "MatchesSent" });
Student.hasMany(Match, { foreignKey: "student_2_id", as: "MatchesReceived" });

export default Student;
