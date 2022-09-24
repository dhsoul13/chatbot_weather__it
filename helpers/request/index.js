import axios from "axios";

export const getReq = async () => {
  try {
    const data = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&lang=ru&appid=eab7ac7a08619621584e5b62a1d3371d"
    );
    console.log(data);
    return data;
  } catch (e) {
    console.log(e);
  }
};
