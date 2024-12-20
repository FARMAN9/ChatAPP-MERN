import express from "express";
import {signup} from '../'
const router = express.Router();

router.post("/signup", signup);

export default router;
