import User from "../models/UsersModel";

const signup = (req, res) => {
  const { fullname, email, password, confirm_password } = req.body;
  try{

  }
  catch()
  if (password !== confirm_password) {
    return res.status(400).json({
      error: "password do not match",
    });
  }

  const user = User.findOne({ email });
  if (user) {
    return res.status(400).json({
      error: "user already registered",
    });
  }
  const newUser = new User({
    fullname,
    email,
    password,
  });
  newUser.save();
  res.status(200).json({
    message: "user created successfully",
  });
};
