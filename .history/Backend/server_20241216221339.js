const express = require("express");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    response: "wellcome to chatapp ",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
