import React from 'react';
import Logo from "./movies_logo.png";
import {Link} from 'react-router-dom';
function NavBar(){
    
    return <>
    <div className='border pl-12 flex space-x-8 items-center py-4'>
            <img src={Logo} className=' w-[50px] md:w-[60px]'></img>
            <Link to="/" className='text-blue-400 font-semibold text-xl md:text-3xl'>Movies</Link>
            <Link to="Favourites" className='text-blue-400 font-semibold text-xl md:text-3xl'>Favourites</Link>
            
        </div>
    </>
}
export default NavBar;