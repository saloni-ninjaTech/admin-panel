import mongoose from "mongoose";
import ProductModel from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const productData = await ProductModel.find();
    res.status(200).json(productData);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new ProductModel(product);

  if (!req.userId) return res.json({ message: "Unauthenticated" });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: id } = req.params;
  const product = req.body;
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  const updatedProduct = await ProductModel.findByIdAndUpdate(
    id,
    { ...product, id },
    {
      new: true,
    }
  );
  res.status(201).json(updatedProduct);
};

export const deleteProduct = async (req, res) => {
  const { id: id } = req.params;
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");

  try {
    await ProductModel.findByIdAndRemove(id);
    res.json({ message: "product deleted successfully!" });
  } catch (e) {
    console.log("error:", e);
    res.status(404).json({ message: e.message });
  }
};
