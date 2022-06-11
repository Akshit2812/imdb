import React, { useState , useEffect } from 'react';
import Image from './banner_pics.jpg';
import axios from 'axios';
import { Oval } from  'react-loader-spinner';
import Pagination from './Pagination';
function Movies() {
  const [movies,setMovies] = useState([])//empty array
  const [page,setPage] = useState(1);//set page do +1 or -1 of our page
  const [hover,setHover]= useState('')
  const [favourites,setFavourites]= useState([])
  const [search, setSearch] = useState("")
  // const [searchTitle, setSearchTitle] = useState("");
  // const [loading, setLoading] = useState(false);
  // const [posts, setPosts] = useState([]);
//default page no diaplayed is 1
  function goAhead(){
     setPage(page+1);
 }
 function goBack(){
     if(page>1){
       setPage(page-1);
     }
 }
useEffect(function(){
  let oldFav = localStorage.getItem("imdb");
    oldFav = JSON.parse(oldFav) || [];
    console.log(oldFav);
  axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=6324e62e3f17328f83f1204c0edf9a20&page=${page}`).then((res)=> 
  {   
    console.table(res.data.results)
    setMovies(res.data.results);
    
    
  })
  
},[page])

let add=(movie)=>{
  let newArray=[...favourites,movie]//3 dots make old entries spread 
  setFavourites([...newArray])
  console.log(newArray)
  localStorage.setItem("imdb",JSON.stringify(newArray))

}

let del = (movie) => {
  let newArray = favourites.filter((m)=> m.id!=movie.id)
  setFavourites([...newArray])
  localStorage.setItem("imdb",JSON.stringify(newArray))
}
//searching
let filteredMovies = []
filteredMovies =filteredMovies.filter((movie)=>
  movie.title.toLowerCase().includes(search.toLowerCase())

)


  return <>
    <div className=' text-center bg-slate-900'>
        <div className="p-5 text:xl md:text-2xl font-bold text-center flex justify-center text-white">Trending Movies</div>
        <div className='text-center'>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} 
                placeholder='Search' className='border border-2 text-center p-1 m-2' />
                <button className='m-2 text-lg p-1 px-2 bg-gray-400 hover:bg-blue-400 text-white rounded-xl font-bold'>
                    Search</button>
                {/* {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}         */}
                 <div className='movie'>{
                    movies.length > 0 && movies.map((movie) => <movie key= {movie.id}{...movies} />)
                  }
                </div>
                </div>
        {
          movies.length == 0 ?//checking movies.lenght if zero then print loader
             <div className='flex justify-center'>
                <Oval  //printing loader
                    height="100"
                    width="100"
                    color='grey'
                    secondaryColor='grey'
                    ariaLabel='loading'
                  />
              </div>:

              <div className='flex flex-wrap justify-center'>
               {
                    movies.map((movie)=>(
                    <div className={ `bg-[url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})] 
                        md:h-[30vh] md:w-[250px]  
                        h-[25vh] w-[150px] 
                        bg-center bg-cover 
                        flex items-end 
                        justify-center 
                        rounded-xl 
                        m-4 
                        hover:scale-110 
                        ease-out duration-3000
                        relative` }
              onMouseEnter={()=>{setHover(movie.id)
              
              }}

              on onMouseLeave={()=>setHover("")}
              >

                {
                  hover == movie.id && <>{
                    !favourites.find((m)=>m.id == movie.id) ?
                    <div className='text-white absolute top-2 right-2 p-2 bg-gray-800 rounded-xl cursor-pointer 
                    '
                    onClick={()=>add(movie)}
                    >Add to Favourites</div> :
                    <div className='text-white absolute top-2 right-2 p-2 bg-gray-800 rounded-xl cursor-pointer 
                    '
                    onClick={()=>del(movie)}
                    >Remove from Favourite
                    </div>


                  }
                  
                  
                  </>
                
                }
              <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>{movie.title}</div>
          </div>

             ))
        
              
          
             
           }
        </div>
        }
    
    </div>
    <Pagination pageProp={page} goBack={goBack} goAhead={goAhead}/>
    </>
  
}

export default Movies;