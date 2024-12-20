import express from "express";
 = require("../models/UsersModel");

import { signup } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup", signup);

export default router;
