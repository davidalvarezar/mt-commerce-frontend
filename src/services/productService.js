import apiClient from "../api/apiClient";

export const getProducts = async () => {
  const response = await apiClient.get("/productos");
  return response.data;
};

export const createProduct = async (product) => {
  const response = await apiClient.post("/productos", product);
  return response.data;
};