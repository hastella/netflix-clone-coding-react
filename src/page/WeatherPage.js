import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import Navigation from '../components/Navigation';
import Weather from '../components/Weather';
import WeatherSlide from '../components/WeatherSlide';
import data from '../data/data.json'

const WeatherPage = () => {

    return (
    <div>
        <Navigation/>
        <Weather/>
        <WeatherSlide/>
    </div>
    )
}

export default WeatherPage