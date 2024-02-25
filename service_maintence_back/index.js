const express = require("express");
const app = express();
const morgan = require("morgan");

const PORT = process.env.port || 8000;

const cors = require("cors");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.json({ start: "eststart", end: "estend" });
});
