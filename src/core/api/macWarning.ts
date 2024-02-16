import {
  IMacFullList,
  IMacFullParams,
  IMacStaticList,
  TMacStaticParams,
} from "../models/macWarning";
import { API } from "./index";

export const getMacFullList = async (
  params?: Partial<IMacFullParams>
): Promise<IMacFullList> => {
  const { data } = await API.get("/api/mac/warning/full", { params });
  return data;
};

export const getMacStaticList = async (
  params?: Partial<TMacStaticParams>
): Promise<IMacStaticList> => {
  const { data } = await API.get("/api/mac/warning/static", { params });
  return data;
};
