import React,{useState,useEffect} from 'react';
import './App.css';
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import Movies from './components/Movies'
import Pagination from './components/Pagination'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favourites from './components/Favourites'


// const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=6324e62e3f17328f83f1204c0edf9a20&query";


function App() {
  return (
    <>
    <BrowserRouter>
      
      <NavBar>
      </NavBar>
      <Routes>
        <Route path="/" element={<>
          <Banner/>
          <Movies/>
          {/* <Pagination /> */}
        </>}/>

        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;