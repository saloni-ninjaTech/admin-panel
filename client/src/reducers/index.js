import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import userReducer from "./userReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  productReducer,
  userReducer,
  categoryReducer,
});
