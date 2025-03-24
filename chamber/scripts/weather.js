const apiKey = 'your_openweathermap_api_key';  // Make sure you replace this with your actual API key
const chamberLocation = 'Springpace, ZW';  // Example location

async function getWeather() {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=Johannesburg&appid=ikNSdsMwfHfQ4cKlPqoHC8arurdbI7rG11GBV4nwhpackOi2&units=metric`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${"Johannesburg"}&units=imperial&cnt=4&appid=${ikNSdsMwfHfQ4cKlPqoHC8arurdbI7rG11GBV4nwhpackOi2}`;
  
  
    try {
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();
        document.getElementById('current-temp').textContent = Math.round(weatherData.main.temp);
        document.getElementById('weather-desc').textContent = weatherData.weather[0].description;
        document.getElementById('weather-icon').src = 'http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png';

        const forecastResponse = await fetch(forecastUrl);
        const forecastData = await forecastResponse.json();
        const forecastContainer = document.getElementById('forecast-container');
        forecastContainer.innerHTML = ''; 

        forecastData.list.slice(1, 4).forEach(forecast => {
            const forecastElement = document.createElement('div');
            forecastElement.className = 'forecast-day';
            forecastElement.innerHTML = `
                <p><strong>${new Date(forecast.dt * 1000).toLocaleDateString()}</strong></p>
                <p>Temp: ${Math.round(forecast.main.temp)} °F</p>
                <p>${forecast.weather[0].description}</p>
            `;
            forecastContainer.appendChild(forecastElement);
        });
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

getWeather();  // Fetch and display the weather