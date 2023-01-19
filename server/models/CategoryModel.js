import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
  cat_id: Number,
  name: String,
  isChild: Boolean,
  parentId: Number,
});

const CategoryModel = mongoose.model("CategoryModel", CategorySchema);
export default CategoryModel;
