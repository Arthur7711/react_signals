import { format, startOfYesterday, sub } from "date-fns";

export const defaultSelectValues = [
  {
    value: "1day",
    title: "1 day",
    time_begin: format(startOfYesterday(), "yyyy-MM-dd"),
    time_end: format(new Date(), "yyyy-MM-dd"),
  },
  {
    value: "1week",
    title: "1 week",
    time_begin: format(sub(new Date(), { weeks: 1 }), "yyyy-MM-dd"),
    time_end: format(new Date(), "yyyy-MM-dd"),
  },
  {
    value: "1month",
    title: "1 month",
    time_begin: format(sub(new Date(), { months: 1 }), "yyyy-MM-dd"),
    time_end: format(new Date(), "yyyy-MM-dd"),
  },
];
