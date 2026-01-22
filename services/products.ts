import axiosConfig from "@/config/axios";
import { ICreateItem } from "@/interfaces/stateInterfaces";

const axios = axiosConfig();

export const getProducts = async () => {
  const res = await axios.get("/products");
  return res.data;
};

export const createProduct = async (item: ICreateItem) => {
  const res = await axios.post("/products", { ...item });
  return res.data;
};
