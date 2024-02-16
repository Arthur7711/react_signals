import { Box } from "@mui/material";
import { useState } from "react";
import SearchIcon from "../../../../../components/ui/icons/SearchIcon.svg";
import CloseIcon from "../../../../../components/ui/icons/CloseIcon.svg";

export const TableFiltres = () => {
  const [search, setSearch] = useState("");
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px", pb: "12px" }}>
      <label>
        <img alt="search" src={SearchIcon} />
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search ? (
          <img alt="clear" src={CloseIcon} onClick={() => setSearch("")} />
        ) : null}
      </label>
    </Box>
  );
};
