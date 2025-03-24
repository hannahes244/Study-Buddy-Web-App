const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/users"));
app.use("/api/classes", require("./routes/classes"));
app.use("/api/matches", require("./routes/matches"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));