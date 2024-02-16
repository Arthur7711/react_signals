import { Typography } from "@mui/material";

export const WanLan = ({ status }: { status: 0 | 1 }) => {
  return (
    <Typography
      sx={{
        height: "20px",
        borderRadius: 4,
        width: "fit-content",
        padding: "2px 8px",
        background: status ? "#D9ECD5" : "#E2E5EA",
        display: "flex",
        alignItems: "center",
      }}
    >
      {status ? "Enabled" : "Disabled "}
    </Typography>
  );
};
