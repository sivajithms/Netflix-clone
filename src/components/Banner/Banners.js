import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Banner.css'
import axios from '../../axios'

function Banners() {
  const [movie,setMovie] = useState()
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get(`/discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
        setMovie(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
        console.log(response.data.results[0]);
      });
      }, 7000); 
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='banner' style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
        <div className='content'>
            <h1 className='title'>{movie ? movie.name ? movie.name : movie.original_title : ""}</h1>
            <div className="banner_buttons">
                <button className='button'>Play </button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banners
