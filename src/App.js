import React,{useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import {useSpring,animated} from 'react-spring';
import './App.css';
import Main from './components/main';
import Toggle from './components/Toggle';
import {BrowserRouter as Router ,Link} from 'react-router-dom';
import Emoji from './components/Emoji';
import Typical from 'react-typical';
import throttle from 'lodash/throttle'
import _ from 'lodash'
import {render} from 'react-dom';
import Sticky from './components/Sticky';
import Blog from './components/Blogs';




const App=() =>{
  

  
return (
  <div>
  
  <Blog/>
  
  </div>
  );}



export default App;

//