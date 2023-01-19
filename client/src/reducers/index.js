import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import sharedReducer from "./sharedReducer";

export const reducer = combineReducers({
  productReducer,
  userReducer,
  categoryReducer,
  sharedReducer,
});
