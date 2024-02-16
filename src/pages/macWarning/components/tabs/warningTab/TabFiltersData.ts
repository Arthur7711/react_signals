import React, { useContext, useState } from "react";
import { WarningListContext } from "../hooks";
import { SelectChangeEvent } from "@mui/material";
import calendarData, { useRangeHooks } from "./rangeCalendar/hooks";
import { defaultSelectValues } from "./rangeCalendar/constants";

export const TabFiltersData = () => {
  const context = useContext(WarningListContext);
  const { open } = calendarData;
  const [checked, setChecked] = useState(false);
  const { datePeriods,selecContainer } = useRangeHooks();
  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value !== "custom") {
      const selectedDate = datePeriods.find(
        (el) => el.value === event.target.value
      );
      context?.setFilterhWarning({
        ...context.filterWarning,
        date: event.target.value,
        time_begin: selectedDate?.time_begin,
        time_end: selectedDate?.time_end,
      });
    }
  };
  const searchList = (e: React.ChangeEvent<HTMLInputElement>) => {
    context?.setFilterhWarning({
      ...context?.filterWarning,
      search: e.target.value,
    });
  };
  const clearSearch = () => {
    context?.setFilterhWarning({ ...context?.filterWarning, search: "" });
  };
  const switchChange = () => {
    context?.setFilterhWarning({
      ...context.filterWarning,
      actives: Number(!checked) as 0 | 1,
    });
    setChecked(!checked);
  };
  return {
    handleChange,
    context,
    searchList,
    clearSearch,
    checked,
    switchChange,
    period: context?.filterWarning?.date,
    datePeriods: defaultSelectValues,
    open,
    selecContainer
  };
};
