import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";
import './assets/styles/_index.scss';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
