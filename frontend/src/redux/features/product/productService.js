import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const API_URL = `${BACKEND_URL}/api/products/`;

// Create New Product
const createProduct = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get all products
const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Delete a Product
const deleteProduct = async (user) => {
  const response = await axios.delete(API_URL + user);
  return response.data;
};
// Get a Product
const getProduct = async (user) => {
  const response = await axios.get(API_URL + user);
  return response.data;
};
// Update Product
const updateProduct = async (user, formData) => {
  const response = await axios.patch(`${API_URL}${user}`, formData);
  return response.data;
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
};

export default productService;