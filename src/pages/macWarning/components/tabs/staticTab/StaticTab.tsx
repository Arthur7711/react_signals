import { IMacStaticItem } from "../../../../../core/models/macWarning";
import { StaticTable } from "./StaticTable";

export const StaticTab = ({ tableData }: { tableData: IMacStaticItem[] }) => {
  return (
    <div>
      <StaticTable tableData={tableData} />
    </div>
  );
};
