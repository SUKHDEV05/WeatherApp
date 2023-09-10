const api_key ="86ae0bfe290fbb7bc934c259e7a3f75e";
const api_url = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcons = document.querySelector(".weather-icon")

async function checkWeather (city){
    const respons = await fetch(api_url + city +`&appid=${api_key}`);

    if(respons.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        const data = await respons.json();


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round( data.main.temp) + "°C";
    document.querySelector(".humidity ").innerHTML = data.main.humidity + "%"; 
    document.querySelector(".wind ").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "clouds"){
        weatherIcons.src ="clouds.png"

    } else if(data.weather[0].main == "clear"){
        weatherIcons.src = "clear.png";

    } else if(data.weather[0].main == "Rain"){
        weatherIcons.src = "Rain.png";

    } else if(data.weather[0].main == "Drizzer"){
        weatherIcons.src = "Drizzer.png";

    } else if(data.weather[0].main == "Mist"){
        weatherIcons.src = "Mist.png";
    }

    document.querySelector(".weather").style.display = "block"
    document.querySelector(".error").style.display = "none";

        
    }

    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})


