import { useEffect, useState } from "react";
import { IOffice } from "../../../../core/models/support";
import { getOffices } from "../../../../core/api/support";
import { SelectChangeEvent } from "@mui/material";

export const useHeadHooks = () => {
  const [officeId, setOfficeId] = useState("");
  const [offices, setOffices] = useState<IOffice[]>([]);
  const handleChange = (event: SelectChangeEvent) => {
    setOfficeId(event.target.value);
    localStorage.setItem("office", event.target.value);
  };
  useEffect(() => {
    getOffices().then(({ data }) => {
      setOffices(data);
      setOfficeId(localStorage.getItem('office') || data?.[0].short_name);
    });
  }, []);

  return { officeId, offices, handleChange };
};
