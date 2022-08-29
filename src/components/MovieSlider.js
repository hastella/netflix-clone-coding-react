import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
// import RankCard from "./RankCard"
import dummy from '../db.json';

const MovieSlider = () => {

  // const [movieList, setMovieList] = useState([])

  // const getUrls = async() => {
  //   let url = `http://localhost:3001/${title}`
  //   let response = await fetch(url)
  //   let data = await response.json();
  //   setMovieList(data)
  //   console.log(data)
  // }

  // useEffect(() => {
  //   getUrls()
  // },[])

  return (
    <div>
      <MovieCard/>
      {/* {
        dummy&& dummy.map(item => {
          return (
            <>
              <MovieCard src = {item.url}/>
              <MovieCard src = {item.url}/>
            </>
          )
        })
      } */}
    </div>
  )
}

export default MovieSlider;