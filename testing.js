const forecastWeatherURL =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc";

async function FetchForecastWeatherInformation(forecastWeatherURL) {
  try {
    // fetch the response data from the forecastWeatherURL using fetch GET
    const response = await fetch(forecastWeatherURL, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    // translate the response data into JSON object
    const result = await response.json();
    console.log("result:" + JSON.stringify(result));
  } catch (error) {
    console.log("Error:", error.message);
  }
}

FetchForecastWeatherInformation(forecastWeatherURL);
