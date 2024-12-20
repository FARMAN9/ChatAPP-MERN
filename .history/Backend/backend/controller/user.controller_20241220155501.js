import User from "../models/UsersModel.js";

export const signup = async (req, res) => {
  const { fullname, email, password, confirm_password } = req.body;
  try {
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
    const newUser = await new User({
      fullname,
      email,
      password,
    });
    newUser.save();
    res.status(200).json({
      message: "user created successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
};
