import apiClient from "../api/apiClient";

export const getProducts = async () => {
  const response = await apiClient.get("/productos");
  return response.data;
};