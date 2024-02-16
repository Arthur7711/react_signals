import { useEffect, Suspense } from "react";
import { auth } from "../../core/api/auth";
import { Header } from "../header/Header";
import { AlertComponent } from "../alert/Alert";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import useAuthInfo from "../../store/self";
import { ISelf } from "../../core/models/auth";
import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "@mui/material";
import { theme } from "../ui/ThemeMui";

export const Layout = () => {
  const { setSelfState } = useAuthInfo;

  useEffect(() => {
    auth().then((res: ISelf) => {
      setSelfState(res);
    });
  }, []);

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback="loading ...">
        <ThemeProvider theme={theme}>
          <AlertComponent />
          <Header />
          <main className={styles.outlet_main}>
            <Outlet />
          </main>
        </ThemeProvider>
      </Suspense>
    </ErrorBoundary>
  );
};
