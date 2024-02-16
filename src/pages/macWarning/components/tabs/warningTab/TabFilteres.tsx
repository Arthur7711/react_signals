import Select from "@mui/material/Select";
import { Box, MenuItem, Stack, Typography } from "@mui/material";
import styles from "./warning.module.scss";
import SearchIcon from "../../../../../components/ui/icons/SearchIcon.svg";
import CloseIcon from "../../../../../components/ui/icons/CloseIcon.svg";
import { TabFiltersData } from "./TabFiltersData";
import { InlineSwitch } from "../../../../../components/ui/InlineSwitch";
import { RangeCalendarCustom } from "./rangeCalendar/RangeCalendar";

export const TabFilteres = () => {
  const {
    period,
    handleChange,
    context,
    searchList,
    clearSearch,
    checked,
    switchChange,
    datePeriods,
    open,
    selecContainer,
  } = TabFiltersData();
  return (
    <section className={styles.tabContainer}>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <label>
          <img alt="search" src={SearchIcon} />
          <input
            placeholder="Search"
            value={context?.filterWarning.search}
            onChange={searchList}
          />
          {context?.filterWarning.search ? (
            <img alt="clear" src={CloseIcon} onClick={clearSearch} />
          ) : null}
        </label>
        <label className={styles.controler}>
          <span className={styles.selectDescription}>Last reg:</span>
          <Select
            variant="standard"
            labelId="date-period-label"
            id="date-period"
            value={period}
            label="date-period"
            onChange={handleChange}
            className={styles.period_select}
            ref={selecContainer}
          >
            {datePeriods.map((el) => (
              <MenuItem key={el.value} value={el.value}>
                {el.title}
              </MenuItem>
            ))}
            <MenuItem onClick={open} value={"custom"}>
              Custom period
            </MenuItem>
          </Select>
        </label>
        <RangeCalendarCustom />
      </Box>
      <Stack direction="row" alignItems="center">
        <InlineSwitch value={checked} onChange={switchChange} />
        <Typography
          sx={{
            fontSize: "14px",
            color: "#162031",
          }}
        >
          Including devices in Actives
        </Typography>
      </Stack>
    </section>
  );
};
