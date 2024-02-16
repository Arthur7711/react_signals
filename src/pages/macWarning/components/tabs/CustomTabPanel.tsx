import { Box } from "@mui/material";
import { TabPanelProps } from "./types";

export function CustomTabPanel(props: TabPanelProps) {
  const { children, tabValue, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`mac-tabpanel-${index}`}
      aria-labelledby={`mac-tab-${index}`}
      {...other}
    >
      {tabValue === index && <Box sx={{ pt: 3, pl: 1 }}>{children}</Box>}
    </div>
  );
}
