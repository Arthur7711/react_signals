import { Box, Typography } from "@mui/material";
import { format } from "date-fns";

export const Status = ({ status, date }: { status: 0 | 1; date: string }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
      <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <Box
          sx={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: status ? "#25A23B" : "#576B8B",
          }}
        />
        <span>{status ? "Online" : "Offline"}</span>
      </Box>
      <Typography
        sx={{
          fontSize: "12px",
          color: "#576B8B",
          display: !status ? "block" : "none",
        }}
      >
        {format(new Date(date), "yyyy.MM.dd HH:MM").split(" ").join(" at ")}
      </Typography>
    </Box>
  );
};
