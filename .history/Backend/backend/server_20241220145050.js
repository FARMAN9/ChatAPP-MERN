const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
import userRouter from ''

dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDB_URI;

try {
  mongoose.connect(URI).then(console.log("Connected to MongoDB"));
} catch (error) {
  console.log(error);
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    response: "wellcome to chatapp ",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
