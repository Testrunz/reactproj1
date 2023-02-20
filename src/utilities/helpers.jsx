import moment from "moment";

export const isEmpty = (value) =>
  value === undefined || value === null || value === "";

export const getDateString = (value, format, isUnix, convertToLocal) => {
  if (
    (typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "object") &&
    !Array.isArray(value) &&
    !isEmpty(format)
  ) {
    if (isUnix) {
      return moment.unix(Number(value)).format(format);
    } else {
      if (convertToLocal) return moment.parseZone(value).local().format(format);
      return moment.parseZone(value).format(format);
    }
  }
  return "";
};
