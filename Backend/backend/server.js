import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import  cors  from "cors";
import userRouter from "./routers/user.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerUi/swaggerUi.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routers/message.router.js";


const app = express();


dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDB_URI;
app.use(cors({
  origin: "*", // Your frontend URL
  credentials: true
}));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

try {
  mongoose.connect(URI).then(console.log("Connected to MongoDB"));
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use(cookieParser());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
  next();
})
app.use('/api/user',userRouter)
app.use('/api/message',messageRouter) 
app.get("/", (req, res) => {
  res.json({
    response: "wellcome to chatapp ",
  });
});
app.use("*", (req, res) => {
  res.status(404).json({
    error: "api not found "+req.path,
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
