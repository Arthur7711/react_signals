import React, { createContext, useEffect, useState, useRef } from "react";
import {
  getMacFullList,
  getMacStaticList,
} from "../../../../core/api/macWarning";
import {
  IMacFullItem,
  IMacStaticItem,
} from "../../../../core/models/macWarning";
import { defaultSelectValues } from "./warningTab/rangeCalendar/constants";
interface IParams {
  search: string;
  date: string;
  actives: 0 | 1;
  time_begin?: string;
  time_end?: string;
  modal: boolean;
}
export const WarningListContext = createContext<{
  filterWarning: IParams;
  setFilterhWarning: (param: IParams) => void;
} | null>(null);

export const Hooks = () => {
  const [tabValue, setTabValue] = useState(0);
  const [fullList, setFullList] = useState<IMacFullItem[]>([]);
  const [staticList, setStaticList] = useState<IMacStaticItem[]>([]);
  const [filterWarning, setFilterhWarning] = useState<IParams>({
    search: "",
    date: defaultSelectValues[0].value,
    actives: 0,
    time_begin: undefined,
    time_end: undefined,
    modal: false,
  });
  const secondRender = useRef(false);

  const handleTabChange = (
    event: React.SyntheticEvent,
    newtabValue: number
  ) => {
    setTabValue(newtabValue);
  };

  useEffect(() => {
    if (tabValue) {
      getMacStaticList().then(({ data }) => setStaticList(data));
    } else {
      getMacFullList().then(({ data }) => setFullList(data));
    }
    secondRender.current = false;
  }, [tabValue]);

  useEffect(() => {
    if (secondRender.current) {
      const timer = setTimeout(() => {
        if (tabValue) {
          getMacStaticList().then(({ data }) => setStaticList(data));
        } else {
          getMacFullList({
            search: filterWarning.search || undefined,
            actives: filterWarning.actives,
            time_begin: filterWarning.time_begin,
            time_end: filterWarning.time_end,
          }).then(({ data }) => setFullList(data));
        }
      }, 800);
      return () => clearTimeout(timer);
    }
    secondRender.current = true;
  }, [filterWarning]);

  return {
    tabValue,
    fullList,
    staticList,
    filterWarning,
    setFilterhWarning,
    handleTabChange,
  };
};
