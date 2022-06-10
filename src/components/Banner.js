import React,{useState,useEffect} from 'react';
import Image from "./banner_pics.jpg";
import axios from 'axios'
function Banner(){
    const [movie,setMovie] = useState({})//empty array
useEffect(function(){
  axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=6324e62e3f17328f83f1204c0edf9a20&page=2").then((res)=> 
  {   
    console.table(res.data.results)
    setMovie(res.data.results[1]);
  
  })

},[])
    return <>
        <div className={`bg-[url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})] h-[40vh] md:h-[90vh] bg-center bg-cover flex items-end justify-center`}>
            <div className='text-xl md:text-3xl text-black p-4 bg-slate-400 w-full flex justify-center bg-slate-300'>
                {movie?.title}</div>
        </div>   
    </>;

}
export default Banner;
