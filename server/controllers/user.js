import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    const userData = await UserModel.find();
    console.log("userData:", userData);
    res.status(200).json(userData);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateUser = async (req, res) => {
  const { id: id } = req.params;
  const user = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No product with that id");

  const updatedUser = await UserModel.findByIdAndUpdate(
    id,
    { ...user, id },
    {
      new: true,
    }
  );
  res.status(201).json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id: id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No product with that id");

  await UserModel.findByIdAndRemove(id);
  res.json({ message: "user deleted successfully!" });
};
