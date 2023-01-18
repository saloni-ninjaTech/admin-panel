import express from "express";
import {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.js";

const router = express.Router();

router.get("/", getCategory);
router.post("/", createCategory);
router.put("/", updateCategory);
router.delete("/", deleteCategory);

export default router;
