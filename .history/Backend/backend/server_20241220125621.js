const express = require("express");
const dotenv = require("dotenv");
const app = express();
import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDB_URI;

try {
  mongoose.Connect(URI).then(console.log('connected to mong'))
} catch (error) {}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    response: "wellcome to chatapp ",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
