import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";
import sharedReducer from "./sharedReducer";
import authReducer from "./authReducer";

export const reducer = combineReducers({
  productReducer,
  userReducer,
  categoryReducer,
  sharedReducer,
  authReducer,
});
