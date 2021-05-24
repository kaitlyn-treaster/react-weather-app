import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";


export default function WeatherForecast() {
    return (
        <div className="WeatherForcast">
            <div className="row">
                <div className="col">
                    <div className="weatherForecast-day">Thu</div>
                    <br />
                    <WeatherIcon code="01d" size={36} />
                    <br />
                    <br />
                    <div className="WeatherForecast-temperatures">
                        <span className="WeatherForecast-temperature-max">19°</span>
                        <span className="WeatherForecast-temperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}