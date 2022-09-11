import React from "react"
import { useEffect } from 'react'
import { Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./page/MainPage";
import AccountPage from "./page/AccountPage";
import LoadingPage from "./page/LoadingPage";
import SearchResultPage from "./page/SearchResultPage";
import WeatherPage from "./page/WeatherPage";
import Auth from "./Auth";
import LoginPage from "./page/LoginPage";

function App() {
  
  const REST_API_KEY = "c713d837ce4378a4a46bd1ddf787f249";
  const REDIRECT_URI = "http://localhost:3005/oauth/kakao/callback";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    useEffect(() => {
      document.body.classList.add('body');
    })

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/">
            <h1>
              {/* <a href={KAKAO_AUTH_URL}> */}
                Kakao Login
                {/* </a> */}
                </h1>
          </Route>
          <Route path="/oauth/kakao/callback">
            <Auth />
          </Route>
        </Routes>
        <Route path="/account" element={<AccountPage/>} />
        <Route path="/loading" element={<LoadingPage/>} />
        <Route path="/main" element={<MainPage/>} />
        <Route path="/search" element={<SearchResultPage/>} />
        <Route path="/main_weather" element={<WeatherPage/>} />
      </Router>
    </div>
  )
}

export default App;