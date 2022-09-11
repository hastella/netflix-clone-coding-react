import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import data from '../data/db.json';
import '../css/searchResult.css';

const WeatherSlide = () => {

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

    const selectArray = () => {
    let iconId =
        weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
    switch (iconId) {
        case "0":
        return  <div>
                    <div className ="search-result-slider">
                        {data.sunny
                            .filter((item, index) => index < 5)
                            .map((item) => (
                            <img src= {item.url}/>
                        ))}
                    </div>
                    <div className ="search-result-slider">
                        {data.sunny
                            .filter((item, index) => index > 4 && index < 10 )
                            .map((item) => (
                            <img src= {item.url}/>
                        ))}
                    </div>
                </div>
        
        case "2" :
        case "3" :
        case "5" :
        case "7" :
        case "8" :          //switch - case 문에서는 || 가 적용되지 않아서 이렇게 적용시켜준다.
        return <div>
                    <div className ="search-result-slider">
                        {data.rainy
                            .filter((item, index) => index < 5)
                            .map((item) => (
                            <img src= {item.url}/>
                        ))}
                    </div>
                    <div className ="search-result-slider">
                        {data.rainy
                            .filter((item, index) => index > 4 && index < 10 )
                            .map((item) => (
                            <img src= {item.url}/>
                        ))}
                    </div>
                </div>
    
        case "6":
        return <div>
                <div className ="search-result-slider">
                    {data.snow
                        .filter((item, index) => index < 5)
                        .map((item) => (
                        <img src= {item.url}/>
                    ))}
                </div>
                <div className ="search-result-slider">
                    {data.snow
                        .filter((item, index) => index > 4 && index < 10 )
                        .map((item) => (
                        <img src= {item.url}/>
                    ))}
                </div>
            </div>
    }
};

  return (
    <div>
        <div className = "search-result-container">
            <h1>오늘 날씨에 어울리는 시리즈</h1>
            {selectArray()}
        </div>
    </div>
  )
}

export default WeatherSlide