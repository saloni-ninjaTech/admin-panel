import express from "express";
import {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.js";

const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.put("/", updateProduct);
router.delete("/", deleteProduct);

export default router;
