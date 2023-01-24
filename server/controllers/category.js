import mongoose from "mongoose";
import CategoryModel from "../models/CategoryModel.js";

export const getCategory = async (req, res) => {
  try {
    const categoryData = await CategoryModel.find();
    res.status(200).json(categoryData);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const createCategory = async (req, res) => {
  const category = req.body;
  const newCategory = new CategoryModel(category);
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  try {
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateCategory = async (req, res) => {
  const { id: id } = req.params;
  const category = req.body;
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No category with that id");

  const updatedCategory = await CategoryModel.findByIdAndUpdate(
    id,
    { ...category, id },
    {
      new: true,
    }
  );
  res.status(201).json(updatedCategory);
};

export const deleteCategory = async (req, res) => {
  const { id: id } = req.params;
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No category with that id");

  try {
    await CategoryModel.findByIdAndRemove(id);
    res.json({ message: "category deleted successfully!" });
  } catch (error) {
    console.log("error:", e);
    res.status(404).json({ message: e.message });
  }
};
