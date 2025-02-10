const forecastWeatherURL =
  "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc";

async function FetchForecastWeatherInformation(forecastWeatherURL) {
  try {
    // fetch the response data from the forecastWeatherURL using fetch GET
    const response = await fetch(forecastWeatherURL, { method: "GET" });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    // translate the response data into JSON object
    const result = await response.json();
    const stringS = result.generalSituation;
    console.log("result:" + stringS);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

FetchForecastWeatherInformation(forecastWeatherURL);
