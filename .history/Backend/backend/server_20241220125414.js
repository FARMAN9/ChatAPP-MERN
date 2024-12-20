const express = require("express");
const dotenv = require("dotenv");
const app = express();
import mongoose from "mongoose";

dotenv.config();
try{
  mongoose.Connect()
}
catch(console.error();
){

}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    response: "wellcome to chatapp ",
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
