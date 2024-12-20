import User from "../models/UsersModel";

const signup = (req, res) => {
  const { fullname, email, password, confirm_password } = req.body;
  try {

    
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
 
};
