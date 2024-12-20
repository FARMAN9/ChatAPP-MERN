import User from "../models/UsersModel";

const signup = (req, res) => {
  const { fullname, email, password, confirm_password } = req.body;
  if password !== confirm_password
};
