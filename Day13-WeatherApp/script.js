// API Key (Regístrate en https://openweathermap.org/api para obtener una gratis)
const API_KEY = ""; // ¡Reemplaza esto con tu API Key!
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Elementos del DOM
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const currentDate = document.getElementById("currentDate");
const temp = document.getElementById("temp");
const weatherIcon = document.getElementById("weatherIcon");
const weatherDesc = document.getElementById("weatherDesc");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

// Función para formatear la fecha
function formatDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
}

// Función para obtener el clima
async function getWeather(city) {
    try {
        const response = await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`);
        const data = await response.json();

        if (data.cod === 200) {
            // Actualizar la UI con los datos
            cityName.textContent = `${data.name}, ${data.sys.country}`;
            currentDate.textContent = formatDate();
            temp.textContent = Math.round(data.main.temp);
            weatherDesc.textContent = data.weather[0].description;
            humidity.textContent = `${data.main.humidity}%`;
            wind.textContent = `${data.wind.speed} km/h`;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        } else {
            alert("City not found. Please try again.");
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("An error occurred. Please try again later.");
    }
}

// Event Listeners
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const city = cityInput.value.trim();
        if (city) {
            getWeather(city);
        }
    }
});

// Mostrar fecha al cargar la página
currentDate.textContent = formatDate();