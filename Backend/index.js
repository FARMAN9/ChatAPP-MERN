import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import  cors  from "cors";
import userRouter from "./routers/user.router.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swaggerUi/swaggerUi.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routers/message.router.js";
import {server,app} from "./SocketIO/server.js"
import path from "path";
import { fileURLToPath } from "url";
import fs from 'fs';







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

/*
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
  */



//deployment code part 
// Fix for `__dirname` in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Deployment code for production
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../Frontend/dist");
  if (fs.existsSync(frontendPath)) {
    app.use(express.static(frontendPath));
    console.log("Serving static files from Frontend/dist");
    console.log("Serving index.html");

    app.get("*", (req, res) => {
      res.sendFile(path.join(frontendPath, "index.html"));
     
    });
  } else {
    console.log("Frontend/dist not found");
  }
}
//-------------------------------------------------->
server.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
