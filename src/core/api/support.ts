import { IOffices } from "../models/support";
import { API } from "./index";

export const getOffices = async (): Promise<IOffices> => {
  const { data } = await API.get("/api/sup/office");
  return data;
};
