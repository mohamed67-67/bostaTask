import axiosConfig from "@/config/axios";
import { ILogin } from "@/interfaces/stateInterfaces";

const axios = axiosConfig();

export const login = async (user: ILogin) => {
  const res = await axios.post("/auth/login", user);
  return res.data;
};
