import User from "../models/UsersModel.js";
import bcrypt from "bcryptjs";
import  createTokenAndSave  from "../jwt/generatetoken.js";

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
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await new User({
      fullname,
      email,
      password: hashpassword,
    });
    const result = await newUser.save();

    if (result) {
      createTokenAndSave(result._id, res);
      res.status(201).json({
        message: "user created successfully",
        user: {
          fullname: result.fullname,
          email: result.email,
          id: result._id,
        },
      });
    } else {
      res.status(400).json({
        error: "user not created",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
};



export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: "invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        error: "invalid credentials",
      });
    }

    createTokenAndSave(user._id,res);
    res.status(200).json({
      message: "user logged in successfully",
      user:{
        fullname:user.fullname,
        email:user.email,
        id:user._id
      },
    });
  } catch (error) {
    res.status(500).json({
      error: "internal server error",
    });
  }
};


export const logout = async (req, res) => {

  try{
    res.clearCookie("token");
    res.status(201).json({
      message: "user logged out successfully",
    });
  }catch(error){
    res.status(500).json({
      error: "internal server error",
    });
  }
  
}