const apiKey = "8dcc9f311b44bfccccc29c91a2868781"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");

const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);


    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "Clouds.png";
    }

    else if(data.weather[0].main == "Rainy"){
        weatherIcon.src = "Rainy.png";
    }

    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Drizzle.png";
    }

    else if(data.weather[0].main == "Smoke"){
        weatherIcon.src = "Smoke.png";
    }

    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Clear.png";
    }

    else if(data.weather[0].main == "Haze"){
        weatherIcon.src = "Haze.png";
    }

    document.querySelector(".weather").style.display = "block"; 
    document.querySelector(".error").style.display = "none";

    }  
 }
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
