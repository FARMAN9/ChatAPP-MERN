import jwt from "jsonwebtoken";


const craeteTokenAndSave=(userId,res)=>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 3600000,
      });

}

export default craeteTokenAndSave;