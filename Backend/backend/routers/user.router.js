import express from "express";
import { signup, login, logout, allUser } from "../controller/user.controller.js";
import secureRouter from "../middleware/secureRouter.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers", secureRouter, allUser);
export default router;
