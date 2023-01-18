import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  password: String,
});

const UserModel = mongoose.model("UserModel", UserSchema);
export default UserModel;
