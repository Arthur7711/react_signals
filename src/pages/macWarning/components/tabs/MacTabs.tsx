import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { StaticTab } from "./staticTab/StaticTab";
import { WarningTab } from "./warningTab/WarningTab";
import { CustomTabPanel } from "./CustomTabPanel";
import { Hooks, WarningListContext } from "./hooks";

export default function MacTabs() {
  const {
    tabValue,
    handleTabChange,
    fullList,
    staticList,
    filterWarning,
    setFilterhWarning,
  } = Hooks();
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="basic tabs example"
        >
          <Tab label="Warning list" sx={{ textTransform: "none" }} />
          <Tab label="Static list" sx={{ textTransform: "none" }} />
        </Tabs>
      </Box>
      <CustomTabPanel tabValue={tabValue} index={0}>
        <WarningListContext.Provider
          value={{ filterWarning, setFilterhWarning }}
        >
          <WarningTab tableData={fullList} />
        </WarningListContext.Provider>
      </CustomTabPanel>
      <CustomTabPanel tabValue={tabValue} index={1}>
        <StaticTab tableData={staticList} />
      </CustomTabPanel>
    </Box>
  );
}
