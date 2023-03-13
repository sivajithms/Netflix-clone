import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import Banners from './components/Banner/Banners';
import RowPost from './components/RowPost/RowPost';


function App(){
  return(
    <div className='App'>
      <NavBar/>
      <Banners/>
      <RowPost/>
    </div>
  )
}

export default App;