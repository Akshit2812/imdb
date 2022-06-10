import './App.css';
import NavBar from "./components/NavBar";
import Banner from './components/Banner';
import Movies from './components/Movies'
import Pagination from './components/Pagination'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Favourites from './components/Favourites'
import {Login} from "./components/Login";
import {Register} from "./components/Register";
function App() {
  return (
    <BrowserRouter>
    <Login />
    <Register/>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<>
          <Banner/>
          <Movies/>
          {/* <Pagination /> */}
        </>}/>
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
      
    </BrowserRouter>
  );
}
export default App;