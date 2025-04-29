import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Educator = sequelize.define("educator", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING(45), unique: true, allowNull: false },
  first_name: { type: DataTypes.STRING(45), allowNull: false },
  last_name: { type: DataTypes.STRING(45), allowNull: false },
  email: { type: DataTypes.STRING(45), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(255), allowNull: false },
  description: { type: DataTypes.TEXT },
  create_time: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  profile_image: {
    type: DataTypes.BLOB('long'), // Or just DataTypes.BLOB depending on your needs
    allowNull: true,
  },
  //profile_image: { type: DataTypes.TEXT },
});

export default Educator;