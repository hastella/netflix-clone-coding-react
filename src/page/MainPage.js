import React from 'react'
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import MovieSlider from '../components/MovieSlider';
import dummy from '../db.json';

const MainPage = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <div className = "container"> 
        <h1>어워드 수상! 감명을 주는 시리즈</h1>
        <MovieSlider/>
        <h1>몰아보기 추천 해외 시리즈</h1>
        <MovieSlider/>
        {/* <MovieSlider id = {3}/>
        <MovieSlider id = {4}/> */}
      </div>
    </div>
  )
}

export default MainPage