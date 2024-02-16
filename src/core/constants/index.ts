export const COOKIE_TOKEN = "Access-Token";
export const COOKIE_PATH = "/";

export const getCookieDomain = () => {
  const idx = Array.from(window.location.hostname).findIndex(
    (item) => item === "."
  );
  return window.location.hostname.slice(idx);
};
