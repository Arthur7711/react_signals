import { ISelf } from "../models/auth";
import { API } from "./index";

export const auth = async (): Promise<ISelf> => {
  const { data } = await API.get("/api/auth/self");
  return data;
};
