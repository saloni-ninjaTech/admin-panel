import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
  if (!req.userId) return res.json({ message: "Unauthenticated" });

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
  if (!req.userId) return res.json({ message: "Unauthenticated" });

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
  if (!req.userId) return res.json({ message: "Unauthenticated" });

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No product with that id");

  await UserModel.findByIdAndRemove(id);
  res.json({ message: "user deleted successfully!" });
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log("error:", error);
  }
};

export const signup = async (req, res) => {
  const { email, phone, name, password, confirm_password, image } = req.body;

  try {
    const existingUser = await UserModel.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: "User already exist." });

    if (password !== confirm_password)
      return res.status(400).json({ message: "password does not match!" });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await UserModel.create({
      email,
      password: hashedPassword,
      name,
      phone,
      image,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ data: result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
    console.log("error:", error);
  }
};
