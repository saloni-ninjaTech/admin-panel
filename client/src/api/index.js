import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//   }
//   return req;
// })

export const fetchProducts = () => API.get(`/products`);
export const createProducts = (input) => API.post(`/products`, input);
export const updateProducts = (id, input) => API.put(`/products/${id}`, input);
export const deleteProducts = (id) => API.delete(`/products/${id}`);

export const fetchUsers = () => API.get(`/users`);
export const createUsers = (input) => API.post(`/users`, input);
export const updateUsers = (id, input) => API.put(`/users/${id}`, input);
export const deleteUsers = (id) => API.delete(`/users/${id}`);

export const fetchCategories = () => API.get(`/categories`);
export const createCategories = (input) => API.post(`/categories`, input);
export const updateCategories = (id, input) =>
  API.put(`/categories/${id}`, input);
export const deleteCategories = (id) => API.delete(`/categories/${id}`);

export const signIn = (input) => API.post("/users/signin", input);
export const signUp = (input) => API.post("/users/signup", input);
