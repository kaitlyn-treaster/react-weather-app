import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    function search() {
        const apiKey = "e29b2285a8a53e39bda51449f0504bf1";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
        <div class="weather-container">
        <br />
        <div class="form-group" onSubmit={handleSubmit}>
            <form class="search-form" id="search-form">
                <input type="text" placeholder="🔍  Enter city..." autofocus="on" id="search-bar" onChange={handleCityChange} />
                <input type="submit" value="Search" id="submit-button" />
                
            </form>
        </div>
        
        <br />
        <WeatherInfo data={weatherData}/>
        </div>
    </div>
    );
} else {
    search();
    return "Loading...";
}
}