export interface IMacFullParams {
  region: string;
  time_end: string;
  time_begin: string;
  search: string;
  page_number: number;
  page_size: number;
  actives: 0 | 1;
}
export interface IMacFullItem {
  check_actives: string | null;
  comment_last: string | null;
  comment_owner: string | null;
  date: string;
  hostname: string;
  id: number;
  ipaddress: string;
  lan: 0 | 1;
  mac: string;
  place: string;
  wan: 0 | 1;
  status: 0 | 1;
}
export interface IMacFullList {
  data: IMacFullItem[];
  total: number;
}
export type TMacStaticParams = Pick<
  IMacFullParams,
  "region" | "page_number" | "page_size"
>;

export interface IMacStaticItem {
  id: number;
  ipaddress: string;
  mac: string;
  hostname: string;
  place: string;
  lan: 0 | 1;
  wan: 0 | 1;
  date: string;
  comment_last: string;
  comment_owner: string;
  check_actives: string;
  status: 0 | 1;
}
export interface IMacStaticList {
  total: 0;
  data: IMacStaticItem[];
}
