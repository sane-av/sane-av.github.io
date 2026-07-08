import { format } from "date-fns";

const dateFormat = (
  date: Date | string,
  pattern: string = "dd MMM, yyyy",
): string => {
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return "";
  const output = format(dateObj, pattern);
  return output;
};

export default dateFormat;
