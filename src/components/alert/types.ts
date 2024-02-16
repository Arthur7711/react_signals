export interface IAlert {
  severity: "error" | "info" | "success" | "warning";
  title: string;
  description: string;
  show: boolean;
}
