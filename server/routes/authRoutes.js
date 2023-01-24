import express from "express";
import { signup, signin } from "../controllers/user.js";
const router = express.Router();

router.get("/signin", signin);
router.get("/signup", signup);

export default router;
