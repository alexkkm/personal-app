import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import MessageBoard from "../widgets/MessageBoard";
import Table from "../widgets/Table";
import { set } from "firebase/database";

// Page that display the weather information
const WeatherPage = () => {
  const navigate = useNavigation();

  const [realtimeTemperature, setRealtimeTemperature] = useState("");
  const [generalSituation, setGeneralSituation] = useState("");
  const [localForecastWeather, setLocalForecastWeather] = useState("");
  const [localLongForecastWeather, setLocalLongForecastWeather] = useState("");

  // 9 days forecast
  const [firstDate, setFirstDate] = useState("");
  const [firstWeekday, setFirstWeekday] = useState("");
  const [firstDayWeather, setFirstDayWeather] = useState("");
  const [firstDayMaxTemp, setFirstDayMaxTemp] = useState("");
  const [firstDayMinTemp, setFirstDayMinTemp] = useState("");

  const [secondDate, setSecondDate] = useState("");
  const [secondWeekday, setSecondWeekday] = useState("");
  const [secondDayWeather, setSecondDayWeather] = useState("");
  const [secondDayMaxTemp, setSecondDayMaxTemp] = useState("");
  const [secondDayMinTemp, setSecondDayMinTemp] = useState("");

  const [thirdDate, setThirdDate] = useState("");
  const [thirdWeekday, setThirdWeekday] = useState("");
  const [thirdDayWeather, setThirdDayWeather] = useState("");
  const [thirdDayMaxTemp, setThirdDayMaxTemp] = useState("");
  const [thirdDayMinTemp, setThirdDayMinTemp] = useState("");

  const [fourthDate, setFourthDate] = useState("");
  const [fourthWeekday, setFourthWeekday] = useState("");
  const [fourthDayWeather, setFourthDayWeather] = useState("");
  const [fourthDayMaxTemp, setFourthDayMaxTemp] = useState("");
  const [fourthDayMinTemp, setFourthDayMinTemp] = useState("");

  const [fifthDate, setFifthDate] = useState("");
  const [fifthWeekday, setFifthWeekday] = useState("");
  const [fifthDayWeather, setFifthDayWeather] = useState("");
  const [fifthDayMaxTemp, setFifthDayMaxTemp] = useState("");
  const [fifthDayMinTemp, setFifthDayMinTemp] = useState("");

  // url of the HK Observatory API
  const realTimeWeatherURL =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc";
  const localForecastWeatherURL =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc";
  const nineDaysForecastWeatherURL =
    "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc";

  // fetch the realtime temperature
  async function FetchRealTimeTemperature(realTimeWeatherURL) {
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
      setRealtimeTemperature(localTemperature);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

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
      setLocalLongForecastWeather(result.outlook);
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

      setFirstDate(result.weatherForecast[0].forecastDate);
      setFirstWeekday(result.weatherForecast[0].week);
      setFirstDayWeather(result.weatherForecast[0].forecastWeather);
      setFirstDayMaxTemp(result.weatherForecast[0].forecastMaxtemp.value);
      setFirstDayMinTemp(result.weatherForecast[0].forecastMintemp.value);

      setSecondDate(result.weatherForecast[1].forecastDate);
      setSecondWeekday(result.weatherForecast[1].week);
      setSecondDayWeather(result.weatherForecast[1].forecastWeather);
      setSecondDayMaxTemp(result.weatherForecast[1].forecastMaxtemp.value);
      setSecondDayMinTemp(result.weatherForecast[1].forecastMintemp.value);

      setThirdDate(result.weatherForecast[2].forecastDate);
      setThirdWeekday(result.weatherForecast[2].week);
      setThirdDayWeather(result.weatherForecast[2].forecastWeather);
      setThirdDayMaxTemp(result.weatherForecast[2].forecastMaxtemp.value);
      setThirdDayMinTemp(result.weatherForecast[2].forecastMintemp.value);

      setFourthDate(result.weatherForecast[3].forecastDate);
      setFourthWeekday(result.weatherForecast[3].week);
      setFourthDayWeather(result.weatherForecast[3].forecastWeather);
      setFourthDayMaxTemp(result.weatherForecast[3].forecastMaxtemp.value);
      setFourthDayMinTemp(result.weatherForecast[3].forecastMintemp.value);

      setFifthDate(result.weatherForecast[4].forecastDate);
      setFifthWeekday(result.weatherForecast[4].week);
      setFifthDayWeather(result.weatherForecast[4].forecastWeather);
      setFifthDayMaxTemp(result.weatherForecast[4].forecastMaxtemp.value);
      setFifthDayMinTemp(result.weatherForecast[4].forecastMintemp.value);
    } catch (error) {
      console.log("Error:", error.message);
    }
  }

  // JSOn that store the forecast temperature
  const forecastData = [
    {
      date: firstDate,
      weekday: firstWeekday,
      highTemp: firstDayMaxTemp,
      lowTemp: firstDayMinTemp,
      description: firstDayWeather,
    },
    {
      date: secondDate,
      weekday: secondWeekday,
      highTemp: secondDayMaxTemp,
      lowTemp: secondDayMinTemp,
      description: secondDayWeather,
    },
    {
      date: thirdDate,
      weekday: thirdWeekday,
      highTemp: thirdDayMaxTemp,
      lowTemp: thirdDayMinTemp,
      description: thirdDayWeather,
    },
    {
      date: fourthDate,
      weekday: fourthWeekday,
      highTemp: fourthDayMaxTemp,
      lowTemp: fourthDayMinTemp,
      description: fourthDayWeather,
    },
    {
      date: fifthDate,
      weekday: fifthWeekday,
      highTemp: fifthDayMaxTemp,
      lowTemp: fifthDayMinTemp,
      description: fifthDayWeather,
    },
  ];

  useEffect(() => {
    FetchRealTimeTemperature(realTimeWeatherURL);
    FetchLocalForecastWeatherInformation(localForecastWeatherURL);
    FetchNineDaysForecastWeatherInformation(nineDaysForecastWeatherURL);
  });

  return (
    <View style={styles.weatherPage}>
      {/* Realtime Temperature */}
      <Text style={styles.realtimeTemperature}>{realtimeTemperature}°C</Text>
      {/* Message Board for Today weather */}
      <MessageBoard
        title="Today"
        textList={[
          "概況: " + generalSituation,
          "預測: " + localForecastWeather,
          "展望: " + localLongForecastWeather,
        ]}
      />

      {/* Table for 9 days forecast */}
      <WeatherTable forecastData={forecastData} />
    </View>
  );
};

export default WeatherPage;

/** **/

const WeatherTable = ({ forecastData }) => {
  // Assuming forecastData is an array of objects with the required fields
  const tableData = forecastData.map((day, index) => ({
    id: index,
    date: day.date,
    weekday: day.weekday,
    highTemp: day.highTemp,
    lowTemp: day.lowTemp,
    description: day.description,
  }));

  const header = {
    id: "header",
    data: ["Date", "Weekday", "High Temp (°C)", "Low Temp (°C)", "Description"],
  };

  return (
    <View style={styles.weatherTable}>
      <FlatList
        data={[header, ...tableData]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.weatherTableRow}>
            {item.id === "header" ? (
              item.data.map((cellData, colIndex) => (
                <Text key={colIndex} style={styles.weatherCellHeader}>
                  {cellData}
                </Text>
              ))
            ) : (
              <>
                <Text style={styles.weatherCell}>{item.date}</Text>
                <Text style={styles.weatherCell}>{item.weekday}</Text>
                <Text style={styles.weatherCell}>{item.highTemp}</Text>
                <Text style={styles.weatherCell}>{item.lowTemp}</Text>
                <Text style={styles.weatherCell}>{item.description}</Text>
              </>
            )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherPage: {
    backgroundColor: "#000000",
  },
  realtimeTemperature: {
    color: "#00f0ff",
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
  },
  weatherPageText: {
    // color
    color: "#00f0ff",
  },
  weatherTable: {
    color: "#00f0ff",
    backgroundColor: "rgba(0, 240, 255, 0.05)",
    borderColor: "#00f0ff",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    overflow: "hidden",
    width: "90%",
    alignSelf: "center",
  },
  weatherTableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#00f0ff",
  },
  weatherCellHeader: {
    flex: 1,
    textAlign: "center",
    color: "#00f0ff",
    fontWeight: "bold",
    borderRightWidth: 1,
    borderColor: "#00f0ff",
    padding: 10,
    backgroundColor: "rgba(0, 240, 255, 0.03)",
  },
  weatherCell: {
    flex: 1,
    textAlign: "left",
    borderRightWidth: 1,
    borderColor: "#00f0ff",
    color: "#00f0ff",
    padding: 10,
  },
});
