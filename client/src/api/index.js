import axios from "axios";

const url = "http://localhost:5000";

export const fetchProducts = () => axios.get(`${url}/products`);
export const createProducts = (input) => axios.post(`${url}/products`, input);
export const updateProducts = (id, input) =>
  axios.put(`${url}/products?id=${id}`, input);
export const deleteProducts = (id) => axios.delete(`${url}/products?id=${id}`);

export const fetchUsers = () => axios.get(`${url}/users`);
export const createUsers = (input) => axios.post(`${url}/users`, input);
export const updateUsers = (id, input) =>
  axios.put(`${url}/users?id=${id}`, input);
export const deleteUsers = (id) => axios.delete(`${url}/users?id=${id}`);

export const fetchCategories = () => axios.get(`${url}/categories`);
export const createCategories = (input) =>
  axios.post(`${url}/categories`, input);
export const updateCategories = (id, input) =>
  axios.put(`${url}/categories?id=${id}`, input);
export const deleteCategories = (id) =>
  axios.delete(`${url}/categories?id=${id}`);
