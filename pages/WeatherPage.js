import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

// Page that display the weather information
const WeatherPage = () => {
  const navigate = useNavigation();

  const [generalSituation, setGeneralSituation] = useState("");
  const [weatherForecast, setWeatherForecast] = useState("");

  const forecastWeatherURL =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc";

  // fetch the forecast weather information from HK Observatory
  async function FetchForecastWeatherInformation(forecastWeatherURL) {
    try {
      // fetch the response data from the forecastWeatherURL using fetch GET
      const response = await fetch(forecastWeatherURL, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      // translate the response data into JSON object
      const result = await response.json();

      setGeneralSituation(result.generalSituation);
      setWeatherForecast(result.forecastDesc);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  useEffect(() => {
    FetchForecastWeatherInformation(forecastWeatherURL);
  });
  return (
    <View style={styles.weatherPage}>
      <Text style={styles.weatherPageText}>General Situation: {generalSituation}</Text>
      <Text style={styles.weatherPageText}>Weather Forecast: {weatherForecast}</Text>
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
