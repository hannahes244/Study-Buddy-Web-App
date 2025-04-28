import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Match = sequelize.define("match", {
  student_1_id: { type: DataTypes.INTEGER, allowNull: false },
  student_2_id: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM("Accepted", "Pending", "Declined"),
    allowNull: false,
    defaultValue: "Pending",
  },
});

Match.belongsTo(Student, { foreignKey: "student_1_id", as: "StudentOne" });
Match.belongsTo(Student, { foreignKey: "student_2_id", as: "StudentTwo" });

export default Match;
