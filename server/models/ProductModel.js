import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  image: String,
  cat_id: Number,
  description: String,
  price: String,
});

const ProductModel = mongoose.model("ProductModel", productSchema);

export default ProductModel;
