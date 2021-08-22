import React,{useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import {useSpring,animated} from 'react-spring';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import _ from 'lodash'
import {render} from 'react-dom';

import Blog from './components/Blogs';
import Gsoc from './components/Gsoc';



const App=() =>{
  return (
 <Router>
    <Switch>
      <Route path="/pratyush" component={Blog}></Route>
      <Route path="/gsoc" component={Gsoc}></Route>
    </Switch>
  </Router>
  );}



export default App;

//