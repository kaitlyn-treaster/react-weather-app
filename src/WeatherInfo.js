import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <div class="info">
                <div class="place-container">
                    <div class="row">
                        <div class="col-8">
                            <div class="degree">
                                <div id="current-city">
                                    <span id="city">{props.data.city}</span>
                                </div>
                                <div class="as-of">
                                    As of <span id="date">
                                        <FormattedDate date={props.data.date} />
                                        </span> 
                                </div>
                                <div class="temperature" id="temperature">{Math.round(props.data.temperature)}</div> 
                                <div class="weather" id="description">{props.data.description}</div>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="float-left">
                                <img 
                                src={props.data.iconUrl} alt={props.data.description} id="icon" class="float-left" />
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
                        <i class="fas fa-wind"></i> Wind
                       </li>
                        <li>
                         <span id="wind">{props.data.wind}</span> mph
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
                        <span id="humidity">{props.data.humidity}</span>%
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
    );
}