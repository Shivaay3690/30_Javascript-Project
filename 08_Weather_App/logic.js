const ApiKey = "e49257a966eaf88f16333763f24836bd"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${ApiKey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'

    }
    else {

        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = 'clouds.png'
        }
        else if (data.weather[0].main == 'clear sky') {
            weatherIcon.src = 'clear.png'
        }
        else if (data.weather[0].main == 'rain') {
            weatherIcon.src = 'rain.png'
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = 'drizzle.png'
        }
        else if (data.weather[0].main == 'mist') {
            weatherIcon.src = 'mist.png'
        }

        document.querySelector('.weather').style.display = "block"
        document.querySelector('.error').style.display = "none"
    }

}

searchBtn.addEventListener('click', function () {
    checkweather(searchBox.value);
})
