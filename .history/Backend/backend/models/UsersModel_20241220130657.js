const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    requ

  }
});
