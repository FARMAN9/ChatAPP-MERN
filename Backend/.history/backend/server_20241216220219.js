const express = require("express");
const app = express();

app.use(express.json());


app.get("/users", (req, res) => {


  res.json({
    response:'well'
  })
})


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
