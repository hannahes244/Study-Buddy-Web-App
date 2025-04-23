import express from "express";
import cors from "cors";
import register from "./routes/register.js";
import login from "./routes/login.js";
import accountsettings from "./routes/accountsettings.js"
import match from "./routes/match.js"
import dotenv from "dotenv";
import sequelize from "./config/db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(register);
app.use(login);
app.use(accountsettings);
app.use(match);

const port = process.env.DB_PORT;

app.get("/", (req, res) => {
  res.send("Welcome to Study Buddy Matchmaker API!");
});

sequelize.sync({ alter: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
