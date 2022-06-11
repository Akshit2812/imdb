import React, { useState } from 'react';

function Pagination({pageProp,goBack,goAhead}) {

    return <>
    <div className=" w-full 
    flex justify-center
     bg-slate-900 p-4">
        <button className="
        p-2
        border-2
        border-white
        text-white
        border-r-0
        rounded-l-xl 
        text-lg
        
        "
        onClick={goBack}
        >Previous</button>
        <button className="p-2 border-2 border-white text-white bg-slate-900 text-lg"
        >{pageProp}
        </button>
        <button className='p-2 border-2 border-white text-white  border-l-0 rounded-r-xl
         text-xl' onClick={goAhead}
         >Next</button>
    </div>
    </>
  
}

export default Pagination;