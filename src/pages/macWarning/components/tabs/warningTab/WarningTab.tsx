import { IMacFullItem } from "../../../../../core/models/macWarning";
import { WarningTable } from "./WarningTable";

export const WarningTab = ({ tableData }: {tableData:IMacFullItem[]}) => {
  return (
    <div>
      <WarningTable tableData={tableData} />
    </div>
  );
};
