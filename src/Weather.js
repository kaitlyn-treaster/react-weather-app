import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
        <div class="weather-container">
        <br />
        <div class="form-group">
            <form class="search-form" id="search-form">
                <input type="text" placeholder="🔍  Enter city..." autofocus="on" id="search-bar" autocomplete="off" />
                <input type="submit" value="Search" id="submit-button" />
                <span class="units"
                ><a href="/" id="celsius-link" class="active">°C |</a> 
                <a href="/" id="fahrenheit-link">°F</a></span>
            </form>
        </div>
        
        <br />
        
        <div class="info">
            <div class="place-container">
                <div class="row">
                    <div class="col-8">
                        <div class="degree">
                            <div id="current-city">
                                <span id="city">{weatherData.city}</span>
                            </div>
                            <div class="as-of">
                                As of <span id="date"><FormattedDate date={weatherData.date} /></span> 
                            </div>
                            <div class="temperature" id="temperature">{Math.round(weatherData.temperature)}</div> 
                            <div class="weather" id="description">{weatherData.description}</div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="float-left">
                            <img 
                            src={weatherData.iconUrl} alt={weatherData.description} id="icon" class="float-left" />
                        </div>
                        <div class="average" id="average"></div>
                    </div>
                </div>
            </div>    
        </div>
        
        <br />
        <br />
                
        <div class="weather-today">
            <br />
           <h4>Weather today</h4>
           <br />
           <div class="row">
               <div class="col-sm">
                   <ul class="bottom-box">
                       <li>
                        <i class="fas fa-cloud-rain"></i> Precipitation
                       </li>
                        <li>
                         <span id="precipiation"></span> %
                       </li>
                   </ul>
               </div>
           </div>
           <hr />
           <div class="row">
               <div class="col-sm">
                   <ul class="bottom-box">
                       <li>
                        <i class="fas fa-wind"></i> Wind
                       </li>
                        <li>
                         <span id="wind">{weatherData.wind}</span> mph
                       </li>
                   </ul>
               </div>
           </div>
           <hr />
           <div class="row">
               <div class="col-sm">
                   <ul class="bottom-box">
                    <li>
                        <i class="fas fa-tint"></i> Humidity
                    </li>
                    <li>
                        <span id="humidity">{weatherData.humidity}</span>%
                    </li>
                   </ul>
               </div>
           </div>
        </div>
        <br />
        <br />

        <div class="weekly-forecast">
            <br />
            <h4>
                Weekly Forecast
            </h4>
            <div class="weather-forecast" id="forecast"></div>
            <br />
        </div>
        <br />
    </div>
    </div>
    );
} else {
    const apiKey = "e29b2285a8a53e39bda51449f0504bf1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
}
}