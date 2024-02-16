import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IMacFullItem } from "../../../../../core/models/macWarning";
import { Box } from "@mui/material";
import { WanLan } from "../../WanLan";
import { Status } from "../../Status";
import styles from "./warning.module.scss";
import { TabFilteres } from "./TabFilteres";
import DownloadCloudIcon from "../../../../../components/ui/icons/DownloadCloudIcon.svg";
import { DownloadButton } from "../../../../../components/ui/button";
import { WarningListContext } from "../hooks";
import { useContext } from "react";
import { HiglitingText } from "../../../../../helpers/HiglitingText";
import { SearchNotFound } from "../SearchNotFound";

export function WarningTable({ tableData }: { tableData: IMacFullItem[] }) {
  const context = useContext(WarningListContext);
  return (
    <>
      <TabFilteres />
      <TableContainer
        component={Paper}
        sx={{ height: "68vh" }}
        className={styles.tableContainer}
      >
        <Box
          sx={{
            height: "60px",
            display: "flex",
            alignItems: "center",
            p: "0 20px",
            gap: "4px",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            Devices: <b> {tableData.length}</b>
          </Box>
          <DownloadButton variant="outlined">
            <img alt="download" src={DownloadCloudIcon} />
            <span>Export</span>
          </DownloadButton>
        </Box>
        <Table
          className={styles.tableContainer}
          sx={{ minWidth: 650 }}
          aria-label="simple table"
        >
          <TableHead sx={{ background: "#E2E5EA" }}>
            <TableRow>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">IP address</TableCell>
              <TableCell align="left">MAC address</TableCell>
              <TableCell align="left">Hostname</TableCell>
              <TableCell align="left">Place</TableCell>
              <TableCell align="left">WAN</TableCell>
              <TableCell align="left">LAN</TableCell>
              <TableCell align="left">Comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ background: row.check_actives ? "#E2E5EA" : "none" }}
              >
                <TableCell align="left">
                  <Status status={row.status} date={row.date} />
                </TableCell>
                <TableCell align="left">
                  <HiglitingText
                    text={row.ipaddress}
                    search={context?.filterWarning.search}
                  />
                </TableCell>
                <TableCell align="left">
                  <HiglitingText
                    text={row.mac}
                    search={context?.filterWarning.search}
                  />
                </TableCell>
                <TableCell align="left">
                  <HiglitingText
                    text={row.hostname}
                    search={context?.filterWarning.search}
                  />
                </TableCell>
                <TableCell align="left">{row.place}</TableCell>
                <TableCell align="left">
                  <WanLan status={row.wan} />
                </TableCell>
                <TableCell align="left">
                  <WanLan status={row.lan} />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: row.comment_last ? "#162031" : "#8393A9",
                  }}
                >
                  {row.comment_last ? (
                    <HiglitingText
                      text={row.comment_last}
                      search={context?.filterWarning.search}
                    />
                  ) : (
                    "No comment"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {context?.filterWarning.search ? <SearchNotFound /> : null}
      </TableContainer>
    </>
  );
}
