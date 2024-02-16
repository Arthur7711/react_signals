import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./headSelect.module.scss";
import { useHeadHooks } from "./hooks";

export default function BasicSelect() {
  const { officeId, offices, handleChange } = useHeadHooks();

  return (
    <Box>
      {offices.length ? (
        <FormControl>
          <Select
            variant="standard"
            labelId="warning-select"
            id="warning-offeces"
            value={officeId}
            label="office_name"
            onChange={handleChange}
            className={styles.head_select}
          >
            {offices.length &&
              offices.map((el) => (
                <MenuItem key={el.id} value={el.short_name}>
                  {el.office_name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      ) : null}
    </Box>
  );
}
