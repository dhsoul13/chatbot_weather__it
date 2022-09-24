import axios from "axios";
import config from "config";

export const getCityFromCootdinate = async ({ coordinate }) => {
  try {
    if (coordinate.lat && coordinate.lon) {
      const infoCity = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${
          coordinate.lat
        }&lon=${coordinate.lon}&lang=ru&appid=${config.get("apiKey")}`
      );
      return infoCity.data;
    } else {
      return false;
    }
  } catch (e) {
    console.log(1, e);
  }
};
