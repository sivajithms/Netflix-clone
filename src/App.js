import React from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import './App.css'
import {action,originals} from './url'
import Banners from './components/Banner/Banners';
import RowPost from './components/RowPost/RowPost';


function App(){
  return(
    <div className='App'>
      <NavBar/>
      <Banners/>
      <RowPost url={originals} title='Netflix originals' />
      <RowPost url={action} title='Action' isSmall  />
      
    </div>
  )
}

export default App;