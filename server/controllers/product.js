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
