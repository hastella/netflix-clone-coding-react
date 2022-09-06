import React from 'react'
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import MovieSlider from '../components/MovieSlider';
import Footer from '../components/Footer';
import Pc from '../components/Responsive/Pc';
import Mobile from '../components/Responsive/Mobile';

const MainPage = ({item, children}) => {

  return (
    <div>
        <Navigation />
        <Banner />
        <MovieSlider/>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default MainPage