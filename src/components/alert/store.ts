import { signal, effect } from "@preact/signals-react";
import { IAlert } from "./types";

const useAlertInfo = () => {
  const defaultAlertInfo: IAlert = {
    show: false,
    title: "",
    description: "",
    severity: "info",
  };
  const alertInfo = signal<IAlert>(defaultAlertInfo);

  const setAlertInfo = (info: IAlert) => {
    alertInfo.value = info;
  };
  effect(() => {
    if (alertInfo.value.show) {
      setTimeout(() => {
        setAlertInfo(defaultAlertInfo)
      }, 3000);
    }
  });
  return { alertInfo, setAlertInfo };
};
export default useAlertInfo();
