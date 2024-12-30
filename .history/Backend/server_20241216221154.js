const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    response: "wellcome to chatapp ",
  });
});

const PORT = process.env.PORT; || 
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
