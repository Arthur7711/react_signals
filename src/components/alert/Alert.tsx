import { AlertCustom } from "../ui/alert";
import { AlertTitle } from "@mui/material";
import useAlertInfo from "./store";

export const AlertComponent = () => {
  const { alertInfo } = useAlertInfo;
  return (
    <div
      style={{
        display: alertInfo.value.show ? "block" : "none",
       
      }}
    >
      <AlertCustom style={{ zIndex: 10000}} severity={alertInfo.value.severity}>
        <AlertTitle>{alertInfo.value.title}</AlertTitle>
        {alertInfo.value.description}
      </AlertCustom>
    </div>
  );
};
