import mongoose from "mongoose";
import ProductModel from "../models/ProductModel.js";

export const getProduct = async (req, res) => {
  try {
    const productData = await ProductModel.find();
    console.log("productData:", productData);
    res.status(200).json(productData);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const newProduct = new ProductModel(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateProduct = async (req, res) => {
  const { id: _id } = req.params;
  const product = req.body;
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
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  try {
    await ProductModel.findByIdAndRemove(_id);
    res.json({ message: "product deleted successfully!" });
  } catch (e) {
    console.log("error:", e);
    res.status(404).json({ message: e.message });
  }
};
