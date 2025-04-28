import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Student from "../models/student.js"

const Match = sequelize.define("match", {
  student_1_id: { type: DataTypes.INTEGER, allowNull: false },
  student_2_id: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM("Accepted", "Pending", "Declined"),
    allowNull: false,
    defaultValue: "Pending",
  },
});

// Match.belongsTo(Student, { foreignKey: "student_id_1"});
// Match.belongsTo(Student, { foreignKey: "student_id_2"});

export default Match;
