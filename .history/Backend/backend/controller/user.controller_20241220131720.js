import User from "../models/UsersModel";

const signup = (req, res) => {
  const { fullname, email, password, confirm_password } = req.body;
  if (password !== confirm_password) {
    return res.status(400).json({
      error: "password do not match",
    });
  }

  const user = User.findOne({ email });
  if (user) {
    return res.status(400).json({
      error: "user alread",
    });
  }
};
