import axios from "axios";
import { COOKIE_TOKEN, COOKIE_PATH, getCookieDomain } from "../constants";
import Cookies from "universal-cookie";
import useAlertInfo from "../../components/alert/store";

const cookies = new Cookies();
const COOKIE_DOMAIN = getCookieDomain();
const REDIRECT_AUTH_URL = `https://login${COOKIE_DOMAIN}`;
const COOKIE_OPTIONS = { path: COOKIE_PATH, domain: COOKIE_DOMAIN };
const { setAlertInfo } = useAlertInfo;

export function logout() {
  cookies.remove(COOKIE_TOKEN, COOKIE_OPTIONS);
  window.location.replace(
    `${REDIRECT_AUTH_URL}?redirect=${window.location.href}`
  );
}

export const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
API.interceptors.request.use((config: any) => {
  if (cookies.get(COOKIE_TOKEN)) {
    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${cookies.get(COOKIE_TOKEN)}`,
      },
    };
  }
  logout();
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      logout();
    }
    setAlertInfo({
      show: true,
      title: "Error",
      description: error?.response?.data?.message || "Неожиданная ошибка",
      severity: "error",
    });
    throw new Error(error);
  }
);
