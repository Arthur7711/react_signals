import { styled } from "styled-components";
import { Button } from "@mui/material";

export const PrimeButton = styled(Button)<{ $height: string }>`
  height: ${({ $height }) => $height};
`;

export const DownloadButton = styled(Button)(() => ({
  borderColor: "#CFD5DD !important",
  gap: "8px",
  color: "#162031 !important",
  "&:disabled": {
    color: "#AAB3C2 !important",
  },
}));
