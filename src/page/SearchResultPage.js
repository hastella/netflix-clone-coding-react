import React from 'react'
import {useState,useEffect} from "react";
import { useRecoilValue } from "recoil";
import { searchState } from '../recoil/search';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import data from '../data/data.json';
import '../css/searchResult.css'
import '../css/Footer.css'

const SearchResultPage = () => {

  const search = useRecoilValue(searchState);

  return (
    <div>
      <Navigation />
      <div class="search-result">
        <h1>다음과 관련된 콘텐츠:</h1>
        <span>{search}</span>
      </div>
      <div className = "search-result-container">
        <div className ="search-result-slider">
            {data.comedy
            .filter((item, index) => index < 5)
            .map((item) => (
              <img src= {item.url}/>
              ))}
        </div>
        <div className ="search-result-slider">
            {data.comedy
            .filter((item, index) => index > 4 && index < 10 )
            .map((item) => (
              <img src= {item.url}/>
              ))}
        </div>
      </div>
      {/* <div>
        <Footer/>
      </div> */}
    </div>
  )
}

export default SearchResultPage