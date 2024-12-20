import User from "../models/UsersModel.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { fullname, email, password, confirm_password } = req.body;
  try {
    if (password !== confirm_password) {
      return res.status(400).json({
        error: "password do not match",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: "user already registered",
      });
    }
    //salt and hash password
    const hash= await bcrypt.hash(password,10)
    const newUser = await new User({
      fullname,
      email,
      password,
    });
    await newUser.save();
    res.status(200).json({
      message: "user created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
};
