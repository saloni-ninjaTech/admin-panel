import axios from "axios";

const url = "http://localhost:5000";

export const fetchProducts = () => axios.get(`${url}/products`);
export const createProducts = (input) => axios.post(`${url}/products`, input);
export const updateProducts = (id, input) =>
  axios.put(`${url}/products?id=${id}`, input);
export const deleteProducts = (id) => axios.delete(`${url}/products?id=${id}`);
