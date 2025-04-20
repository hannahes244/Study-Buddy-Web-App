import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Generate unique token for whomever
export const generateToken = (payload) => { 
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};