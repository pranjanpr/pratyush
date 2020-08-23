import React from 'react';
import logo from './logo.svg';
import {useSpring,animated} from 'react-spring';
import './App.css';

import Toggle from './components/Toggle';



const App=() =>{
  const springs = useSpring({from:{ marginTop: -1000 }, to:{ marginTop: 0 }})



  return (

    <animated.div className="App" style={springs}>
    <header className="App-header"> Pratyush Ranjan </header>
    
    </animated.div>
  );
}

export default App;
