import express from "express";
import { sendMessage, getMessages } from "../controller/message.controller.js";
import secureRouter from "../middleware/secureRouter.js";

const router = express.Router();

router.post("/send/:id",secureRouter,sendMessage);
router.get("/get/:id",secureRouter,getMessages);
export default router;