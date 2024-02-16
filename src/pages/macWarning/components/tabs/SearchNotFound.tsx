import { Box, Typography } from "@mui/material";

export const SearchNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#576B8B",
        paddingTop:'8vh'
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>Nothing found</Typography>
      <Typography sx={{ fontSize: "12px" }}>
        Try to change your search.
      </Typography>
    </Box>
  );
};
