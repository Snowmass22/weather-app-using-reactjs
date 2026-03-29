import { useState, useEffect } from 'react'
import SearchBox from './Searchbox';
import InfoBox from './InfoBox';
import './App.css';

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  useEffect(() => {
    const fetchInitialWeather = async () => {
      const API_URL = "https://api.openweathermap.org/data/2.5/weather";
      const API_KEY = import.meta.env.VITE_API_KEY;
      try {
        let response = await fetch(`${API_URL}?q=&appid=${API_KEY}&units=metric`);
        if (!response.ok) {
          throw new Error("Failed to fetch initial weather data");
        }
        let jsonResponse = await response.json();
        setWeatherInfo({
          city: jsonResponse.name,
          temp: jsonResponse.main.temp,
          temp_min: jsonResponse.main.temp_min,
          temp_max: jsonResponse.main.temp_max,
          description: jsonResponse.weather[0].description,
          weather: jsonResponse.weather[0].main,
          humidity: jsonResponse.main.humidity,
          wind: jsonResponse.wind.speed
        });
      } catch (error) {
        console.error("Error fetching initial weather data:", error);
      }
    };
    fetchInitialWeather();
  }, []);

  return (
    <div className="weather-wrapper">
      <div className="app-container">
         <SearchBox updateInfo={setWeatherInfo} />
         {weatherInfo && <InfoBox info={weatherInfo} />}
      </div>
    </div>
  )
}

export default App
