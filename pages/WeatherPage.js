import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import MessageBoard from "../widgets/MessageBoard";

// Page that display the weather information
const WeatherPage = () => {
  const navigate = useNavigation();

  const [generalSituation, setGeneralSituation] = useState("");
  const [localForecastWeather, setLocalForecastWeather] = useState("");

  // 9 days forecast
  const [firstDate, setFirstDate] = useState("");
  const [firstDayWeather, setfirstDayWeather] = useState("");
  const [firstDayMaxTemp, setfirstDayMaxTemp] = useState("");
  const [firstDayMinTemp, setfirstDayMinTemp] = useState("");

  const [secondDate, setSecondDate] = useState("");
  const [secondDayWeather, setSecondDayWeather] = useState("");
  const [secondDayMaxTemp, setSecondDayMaxTemp] = useState("");
  const [secondDayMinTemp, setSecondDayMinTemp] = useState("");

  const [thirdDate, setThirdDate] = useState("");
  const [thirdDayWeather, setThirdDayWeather] = useState("");
  const [thirdDayMaxTemp, setThirdDayMaxTemp] = useState("");
  const [thirdDayMinTemp, setThirdDayMinTemp] = useState("");

  const [fourthDate, setFourthDate] = useState("");
  const [fourthDayWeather, setFourthDayWeather] = useState("");
  const [fourthDayMaxTemp, setFourthDayMaxTemp] = useState("");
  const [fourthDayMinTemp, setFourthDayMinTemp] = useState("");

  // url of the HK Observatory API
  const localForecastWeatherURL =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc";
  const nineDaysForecastWeatherURL =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc";

  // fetch the forecast weather information from HK Observatory
  async function FetchLocalForecastWeatherInformation(localForecastWeatherURL) {
    try {
      // fetch the response data from the forecastWeatherURL using fetch GET
      const response = await fetch(localForecastWeatherURL, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      // translate the response data into JSON object
      const result = await response.json();

      setGeneralSituation(result.generalSituation);
      setLocalForecastWeather(result.forecastDesc);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  // fetch the forecast weather information from HK Observatory
  async function FetchNineDaysForecastWeatherInformation(
    nineDaysForecastWeatherURL
  ) {
    try {
      // fetch the response data from the forecastWeatherURL using fetch GET
      const response = await fetch(nineDaysForecastWeatherURL, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      // translate the response data into JSON object
      const result = await response.json();

      //setGeneralSituation(result.generalSituation);
      //setLocalForecastWeather(result.forecastDesc);
      setFirstDate(result.weatherForecast[0].week);
      setfirstDayWeather(result.weatherForecast[0].forecastWeather);
      console.log(firstDate);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  useEffect(() => {
    FetchLocalForecastWeatherInformation(localForecastWeatherURL);
    FetchNineDaysForecastWeatherInformation(nineDaysForecastWeatherURL);
  });
  return (
    <View style={styles.weatherPage}>
      <MessageBoard
        title="Today"
        textList={[
          "General Situation: " + generalSituation,
          "Local Forecast Weather: " + localForecastWeather,
        ]}
      />
    </View>
  );
};

export default WeatherPage;

const styles = StyleSheet.create({
  weatherPage: {
    backgroundColor: "#000000",
  },
  weatherPageText: {
    // color
    color: "#00f0ff",
  },
});
