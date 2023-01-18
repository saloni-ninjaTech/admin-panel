import express from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/", deleteUser);

export default router;
