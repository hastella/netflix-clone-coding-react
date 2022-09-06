import React from "react"
import { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./page/MainPage";
import AccountPage from "./page/AccountPage";
import LoadingPage from "./page/LoadingPage";
import SearchResultPage from "./page/SearchResultPage";

function App() {

    useEffect(() => {
      document.body.classList.add('body');
    })

  return (
    <div>
      <Routes>
        <Route path="/" element={<AccountPage/>} />
        <Route path="/loading" element={<LoadingPage/>} />
        <Route path="/main" element={<MainPage/>} />
        <Route path="/search" element={<SearchResultPage/>} />
      </Routes>
      
    </div>
  )
}

export default App;