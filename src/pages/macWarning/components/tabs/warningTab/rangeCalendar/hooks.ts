import { signal } from "@preact/signals-react";
import { useContext, useState, useRef, useEffect } from "react";
import { WarningListContext } from "../../hooks";
import calendarData from "./hooks";
import { format } from "date-fns";
import { defaultSelectValues } from "./constants";

const constumInfo = signal("");

export const useRangeHooks = () => {
  const selecContainer = useRef<HTMLDivElement>(null);
  const context = useContext(WarningListContext);
  const { close, showModal } = calendarData;

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleSelect = (props: any) => {
    setRange({
      startDate: props.range1.startDate,
      endDate: props.range1.endDate,
    });
    constumInfo.value = `${format(
      props.range1.startDate,
      "yyyy-MM-dd"
    )} - ${format(props.range1.endDate, "yyyy-MM-dd")}`;

    context?.setFilterhWarning({
      ...context.filterWarning,
      time_begin: format(props.range1.startDate, "yyyy-MM-dd"),
      time_end: format(props.range1.endDate, "yyyy-MM-dd"),
      date: "custom",
    });
    close();
  };

  useEffect(() => {
    if (
      selecContainer.current &&
      selecContainer.current.childNodes[0].textContent &&
      context?.filterWarning.date === "custom"
    ) {
      selecContainer.current.childNodes[0].textContent = constumInfo.value;
    }
  });

  return {
    showModal,
    range,
    handleSelect,
    datePeriods: defaultSelectValues,
    selecContainer,
  };
};
const useAlertInfo = () => {
  const showModal = signal(false);

  const open = () => {
    showModal.value = true;
  };
  const close = () => {
    showModal.value = false;
  };

  return { open, close, showModal };
};
export default useAlertInfo();
