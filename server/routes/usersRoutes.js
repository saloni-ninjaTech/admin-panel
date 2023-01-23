import express from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  signup,
  signin,
} from "../controllers/user.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.get("/", getUser);
router.post("/", auth, createUser);
router.put("/:id", auth, updateUser);
router.delete("/:id", auth, deleteUser);
router.post("/signin", signin);
router.post("/signup", signup);

export default router;
