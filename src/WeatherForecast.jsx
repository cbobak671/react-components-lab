import React from "react";
import "./WeatherForecast.css";

const WeatherForecast = ({day, conditions, time}) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src="" alt="" />
      <p>
        <span>Conditions: {conditions} </span>current weather conditions
      </p>
      <p>
        <span>Time: {time}</span>time of day
      </p>
    </div>
  );
};

export default WeatherForecast;
