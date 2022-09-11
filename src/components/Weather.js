import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {
    TiWeatherSunny,
    TiWeatherStormy,
    TiWeatherShower,
    TiWeatherDownpour,
    TiWeatherSnow,
    TiWeatherCloudy,
  } from "react-icons/ti";
import { BsCloudFog } from "react-icons/bs";
import '../css/WeatherPage.css'

const Weather = () => {

    const lat = 36;
    const lon = 127;
    const city = "Seoul";
    const API_KEY = "7188f9295b37d633e77219ad9af5a98e"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    const [weather,setWeather] = useState("");

    //날씨 가져오기
    axios.get(url).then((response) => {
        const data = response.data;
        setWeather({
          id: data.weather[0].id,
          temperature: data.main.temp,
          main: data.weather[0].main,
          loading: false,
        })
    })

    const selectIcon = () => {
        let iconId =
          weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
        switch (iconId) {
          case "0":
            return <TiWeatherSunny size="6rem" color="red" />;
          case "2":
            return <TiWeatherStormy size="6rem" color="black" />;
          case "3":
            return <TiWeatherShower size="6rem" color="blue" />;
          case "5":
            return <TiWeatherDownpour size="6rem" color="navy" />;
          case "6":
            return <TiWeatherSnow size="6rem" color="white" />;
          case "7":
            return <BsCloudFog size="6rem" color="white" />;
          case "8":
            return <TiWeatherCloudy size="6rem" color="white" />;
        }
    };

    return (
    <div className ="weather_container">
        <div className ="weather_icon">
        {selectIcon()}
        </div>
        <div className="weather_info">
            <div>{city}</div>
            <div>{weather.temperature}℃</div>
            <div>{weather.main}</div>
        </div>
    </div>
    )
}

export default Weather