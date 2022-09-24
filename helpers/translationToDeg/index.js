export const transToDeg = ({ temp = 0 }) => {
  return Math.floor(temp - 273.15);
};
