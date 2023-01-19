import mongoose from "mongoose";
import CategoryModel from "../models/CategoryModel.js";

export const getCategory = async (req, res) => {
  try {
    const categoryData = await CategoryModel.find();
    console.log("categoryData:", categoryData);
    res.status(200).json(categoryData);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const createCategory = async (req, res) => {
  const category = req.body;
  const newCategory = new CategoryModel(category);

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
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No category with that id");

  await CategoryModel.findByIdAndRemove(id);
  res.json({ message: "category deleted successfully!" });
};
