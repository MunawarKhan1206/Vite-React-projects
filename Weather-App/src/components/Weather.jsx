import './Weather.css';
import searchIcon from '../assets/search.png';
import clearIcon from '../assets/clear.png';
import cloudIcon from '../assets/clouds.png';
import drizzleIcon from '../assets/drizzle.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';
import windIcon from '../assets/wind.png';
import humidityIcon from '../assets/humidity.png';
import { useRef, useEffect, useState, useCallback, useMemo } from 'react';

const Weather = () => {
    const inputref = useRef();
    const [weatherData, setWeatherData] = useState(false);
    
    const allicons = useMemo(() => ({
        "01d": clearIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": drizzleIcon,
        "04n": drizzleIcon,
        "09d": rainIcon,
        "09n": rainIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon
    }), []);

    const search = useCallback(async (city) => {
        if (city === "") { // if city is empty alert
            alert("Enter City Name");  
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
            const res = await fetch(url);
            const data = await res.json();

            if (!res.ok) {
                console.log("Error Response: ", data.message);
                alert(data.message);
                return;
            }

            console.log("Success Response: ", data);
            const icon = allicons[data.weather[0].icon] || clearIcon;
            setWeatherData({
                humidity: data.main.humidity,
                windspeed: data.wind.speed,
                temp: Math.floor(data.main.temp),
                loc: data.name,
                icon: icon
            });

            // Clear the input field after search so user can search again
            inputref.current.value = "";
        } catch (error) {
            console.log("Fetch Error: ", error);
            setWeatherData(false);
        }
    }, [allicons]);

    useEffect(() => {
        // No default city search, user will input their  city
    }, [search]);

    return (
        <div className="weather">
            <h1></h1>
            <div className="search-bar">
                < input ref={inputref} aria-label="search" type="text" placeholder="Enter Your City..." />
                <img src={searchIcon} onClick={() => search(inputref.current.value)} alt="Search" />
            </div>
            {weatherData ? (  // if true show otherwise show nothing
                <>
                    <img src={weatherData.icon} className="weather-icon" alt="Weather Icon" />
                    <p className="temperature">{weatherData.temp}°C</p>
                    <p className="location">{weatherData.loc}</p>
                    <div className="weather-data">
                        <div className="col">
                            <img src={humidityIcon} alt="Humidity Icon" />
                            <p>{weatherData.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                        <div className="col">
                            <img src={windIcon} alt="Wind Icon" />
                            <p>{weatherData.windspeed}km/h</p>
                            <span>Wind Speed</span>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Weather;
