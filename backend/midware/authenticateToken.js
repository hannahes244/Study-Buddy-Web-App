import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Check the token
export const authenticateToken = (req, res, next) => {
  // Make sure authorization token is there
  // TODO: Add another check for the "Bearer"
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Token missing" });

  // See if token is still valid (not expired | exists)
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.type)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
