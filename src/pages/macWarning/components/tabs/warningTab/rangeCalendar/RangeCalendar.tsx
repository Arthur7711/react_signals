import { Box } from "@mui/material";
import { DateRangePicker } from "react-date-range";
import styles from "./styles.module.scss";
import { useRangeHooks } from "./hooks";

export const RangeCalendarCustom = () => {
  const { showModal, range, handleSelect } = useRangeHooks();
  return (
    <>
      {showModal.value ? (
        <Box sx={{ position: "fixed", left: "40%", top: "40%" }}>
          <DateRangePicker
            ranges={[range]}
            onChange={handleSelect}
            showMonthAndYearPickers={false}
            showDateDisplay={false}
            className={styles.rangePicker}
          />
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};
