export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const CREATE_PRODUCTS = "CREATE_PRODUCTS";
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";
export const DELETE_PRODUCTS = "DELETE_PRODUCTS";

export const FETCH_USERS = "FETCH_USERS";
export const CREATE_USERS = "CREATE_USERS";
export const UPDATE_USERS = "UPDATE_USERS";
export const DELETE_USERS = "DELETE_USERS";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export const CREATE_CATEGORIES = "CREATE_CATEGORIES";
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";
export const DELETE_CATEGORIES = "DELETE_CATEGORIES";

export const DISPLAY_DASHBOARD = "DISPLAY_DASHBOARD";
export const DISPLAY_CATEGORIES = "DISPLAY_CATEGORIES";
export const DISPLAY_PROFILE = "DISPLAY_PROFILE";
export const DISPLAY_USER = "DISPLAY_USER";

export const AUTH = "AUTH";
export const LOGOUT = "LOGOUT";

export const DEFAULT_VALUES_PRODUCT_FORM = {
  name: "",
  image: "",
  cat_id: "",
  description: "",
  price: "",
};

export const DEFAULT_VALUES_CATEGORY_FORM = {
  cat_id: "",
  name: "",
  isChild: false,
  parentId: "",
};

export const DEFAULT_VALUES_USER_FORM = {
  name: "",
  email: "",
  phone: "",
  password: "",
};
