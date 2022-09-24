import { format } from "date-format-parse";

export const getTime = ({ timeZona = 0 }) => {
  try {
    const d = new Date();
    const timeYourRaz = timeZona * 1000;
    const timeFromUTC0 = (Date.now() / 60000 + d.getTimezoneOffset()) * 60000;
    const time = format(timeFromUTC0 + timeYourRaz, "HH:mm:ss");
    return time;
  } catch (e) {
    console.log(e);
    return 0;
  }
};
