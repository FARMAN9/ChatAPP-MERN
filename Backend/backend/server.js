import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import  cors  from "cors";
import userRouter from "./routers/user.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerUi/swaggerUi.js";

const app = express();


dotenv.config();
const PORT = process.env.PORT || 3000;
const URI = process.env.MongoDB_URI;
app.use(cors({
  origin: 'http://localhost:5173', // Your frontend URL
  credentials: true
}));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

try {
  mongoose.connect(URI).then(console.log("Connected to MongoDB"));
} catch (error) {
  console.log(error);
}

app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error', error: err.message });
  next();
})

app.use("/user", userRouter);
app.get("/", (req, res) => {
  res.json({
    response: "wellcome to chatapp ",
  });
});
app.use("*", (req, res) => {
  res.status(404).json({
    error: "page not found",
  });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
