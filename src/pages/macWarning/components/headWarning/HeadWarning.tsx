import { PageTitle } from "../../../../components/ui/heading";
import styles from "./headWarning.module.scss";
import HeadSelect from "../headSelect/HeadSelect";

export const HeadWarning = () => {
  return (
    <div className={styles.head}>
      <PageTitle variant="h1" sx={{ fontWeight: 600 }}>
        Mac Warning:
      </PageTitle>
      <HeadSelect />
    </div>
  );
};
