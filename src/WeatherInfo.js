import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div className="info">
                <div className="place-container">
                    <div className="row">
                        <div className="col-8">
                            <div className="degree">
                                <div id="current-city">
                                    <span id="city">{props.data.city}</span>
                                </div>
                                <div className="as-of">
                                    As of <span id="date">
                                        <FormattedDate date={props.data.date} />
                                        </span> 
                                </div>
                                <WeatherTemperature celsius={props.data.temperature} />
                                <div className="weather" id="description">{props.data.description}</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="float-left" id="icon">
                                <WeatherIcon code={props.data.icon} />
                            </div>
                            <div className="average" id="average"></div>
                        </div>
                    </div>
                </div> 
            </div>
            
            <br />
            <br />
                
        <div className="weather-today">
            <br />
           <h4>Weather today</h4>
           <br />
           <div className="row">
               <div className="col-sm">
                   <ul className="bottom-box">
                       <li>
                        <i className="fas fa-wind"></i> Wind
                       </li>
                        <li>
                         <span id="wind">{Math.round(props.data.wind)}</span> mph
                       </li>
                   </ul>
               </div>
           </div>
           <hr />
           <div className="row">
               <div className="col-sm">
                   <ul className="bottom-box">
                    <li>
                        <i className="fas fa-tint"></i> Humidity
                    </li>
                    <li>
                        <span id="humidity">{props.data.humidity}</span>%
                    </li>
                   </ul>
               </div>
           </div>
        </div>
        <br />
        <br />

        <div className="weekly-forecast">
            <br />
            <h4>
                Weekly Forecast
            </h4>
            <div className="weather-forecast" id="forecast"><WeatherForecast /></div>
            <br />
        </div>
        <br />
    </div>
    );
}