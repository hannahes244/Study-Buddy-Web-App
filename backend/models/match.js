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

export default Match;
