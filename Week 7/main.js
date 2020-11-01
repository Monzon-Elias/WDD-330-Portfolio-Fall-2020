//=================================================================   
//========================= AJAX ==========================
//=================================================================

const jasonSection = document.getElementById("weatherContainer");
jasonSection.style.borderStyle = "solid";
jasonSection.style.borderRadius = ".5rem";
jasonSection.style.textAlign = "center";

//CITY WEATHER TODAY
const URL = "https://api.openweathermap.org/data/2.5/weather?q=Rexburg&units=imperial&APPID=2d683c1fb0de4088f43e9dc236bb0842";

async function getCityWeather() {
    try {
        const response = await fetch(URL);
        const jsonData = await response.json();
        console.log(jsonData);

        let cityName = jsonData.name;
        let cityforecast = jsonData.weather[0].description;
        let cityTemp = jsonData.main.temp;
        let cityWind = jsonData.wind.speed;
        let cityIcon = jsonData.weather[0].icon;

        //CITY NAME
        document.getElementById("cityName").innerHTML = cityName;

        //CITY FORECAST
        document.getElementById("cityWeatherDesc").innerHTML = cityforecast;
        
        //CITY TEMP IN FAHRENHEIT
        document.getElementById("cityTemp").innerHTML = cityTemp;

        //CITY WIND SPEED IN MPH
        document.getElementById("windSpeed").innerHTML = cityWind;

        //CITY WEATHER ICON
        document.getElementById("cityIcon").src = "https://openweathermap.org/img/wn/" + cityIcon + "@2x.png";

    } catch (e) {
        throw Error(e);
    }
}
getCityWeather();