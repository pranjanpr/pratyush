import React,{useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import {useSpring,animated} from 'react-spring';
import './App.css';

import _ from 'lodash'
import {render} from 'react-dom';

import Blog from './components/Blogs';




const App=() =>{
  return (
  <div>
  
  <Blog/>
  
  </div>
  );}



export default App;

//