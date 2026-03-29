import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react'
import "./SearchBox.css";
function SearchBox({ updateInfo }) {
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = import.meta.env.VITE_API_KEY;

    let getWeatherInfo = async(city)=>{
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found or API error");
            }
            let jsonResponse = await response.json();
            let result={
                city:city,
                temp:jsonResponse.main.temp,
                temp_min:jsonResponse.main.temp_min,
                temp_max:jsonResponse.main.temp_max,
                description:jsonResponse.weather[0].description,
                weather:jsonResponse.weather[0].main,
                humidity:jsonResponse.main.humidity,
                wind:jsonResponse.wind.speed
            };
            return result;
        } catch(err) {
            console.log("Error fetching weather data:", err);
            return null;
        }
    }
    let [city,setcity]=useState("");
    let handleChange=(event)=>{
        setcity(event.target.value);
    }
    let handleSubmit= async (event)=>{
        event.preventDefault();
        setcity("");
        let newInfo = await getWeatherInfo(city);
        if (newInfo) {
            updateInfo(newInfo);
        }
    }
        return(
        <>
            <div className="search-box">
                <h2 style={{ color: '#333', marginBottom: '20px', marginTop: 0 }}>Weather App</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
                    <TextField id="outlined-basic" label="City Name" variant="outlined" size="small" onChange={handleChange} value={city} name="city" required sx={{ flex: 1, minWidth: '150px' }} />
                    <Button variant="contained" type="submit" sx={{ textTransform: 'none', borderRadius: '8px' }}>Search</Button>
                </form>
                
                 
            </div>
        </>
    )
}
export default SearchBox;