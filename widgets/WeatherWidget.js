import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Text, StyleSheet, View } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome5";
const SunIcon = () => <Icon name="sun" size={30} color="#00f0ff" />;
const SunRainIcon = () => (
  <Icon name="cloud-sun-rain" size={30} color="#00f0ff" />
);
const MoonIcon = () => <Icon name="moon" size={30} color="#00f0ff" />;
const MoonRainIcon = () => (
  <Icon name="cloud-moon-rain" size={30} color="#00f0ff" />
);

/*
// Simple fetch method
const weatherJSON = fetch(
	url
)
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
	})
	.catch((error) => {
		console.log("Error: " + error);
	});
*/
/*
fetch(url, { method: "GET" })
	.then((response) => {
		return response.json(); // 使用 json() 可以得到JSON 物件, 使用 text() 可以得到純文字 String
	})
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log("Error: " + error);
		
	});
*/

// Widget of displaying weather
const WeatherWidget = (parameters) => {
  const navigation = useNavigation();
  // constant
  const realTimeWeatherURL =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc";

  // variable
  const [temperature, setTemperature] = useState("");
  const [isRainning, setIsRainning] = useState("false");
  const [isDayTime, setIsDayTime] = useState("false");

  // fetch the weather information from HK Observatory
  async function FetchRealTimeWeatherInformation(realTimeWeatherURL) {
    try {
      // fetch the response data from the realTimeWeatherURL using fetch GET
      const response = await fetch(realTimeWeatherURL, { method: "GET" });
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      // translate the response data into JSON object
      const result = await response.json();
      // obtain the temperature for  "King's Park" from the JSON
      const localTemperature = result.temperature.data[0].value;
      setTemperature(localTemperature);

      // obtain the rainfall for "Yau Tsim Mong" from the JSON,
      // if there is rainfall ,then set the "isRainning" as "rain"
      result.rainfall.data[13].max > 0
        ? setIsRainning("true")
        : setIsRainning("false");
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  // get the current time from local
  const GetCurrentTime = () => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    //set "daytime" to be "true" or "false" according to the "currentHour"
    currentHour >= 6 && currentHour <= 18
      ? setIsDayTime("true")
      : setIsDayTime("false");
  };

  useEffect(() => {
    FetchRealTimeWeatherInformation(realTimeWeatherURL);
    GetCurrentTime();
  });

  return (
    <TouchableOpacity
      className="weatherWidget"
      style={styles.weatherWidget}
      onPress={() => {
        navigation.navigate("/weather");
      }}
    >
      <Text style={styles.temperature}>{temperature}°C</Text>

      <View className="weatherIcon" style={styles.weatherIcon}>
        {/* Check if it is at DayTime, then display daytime icon, else display Night icon */}
        {isDayTime === "true" ? (
          isRainning === "true" ? (
            <SunRainIcon />
          ) : (
            <SunIcon />
          )
        ) : isRainning === "true" ? (
          <MoonRainIcon />
        ) : (
          <MoonIcon />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default WeatherWidget;

const styles = StyleSheet.create({
  weatherWidget: {
    //outer
    padding: 10,
  },
  temperature: {
    // color
    color: "#00f0ff",

    // font
    fontSize: 50,
    fontWeight: "bold",
  },
  weatherIcon: {},
});
