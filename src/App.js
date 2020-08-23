import React from 'react';
import logo from './logo.svg';
import {useSpring,animated} from 'react-spring';
import './App.css';
import Main from './components/main';
import Toggle from './components/Toggle';
import {BrowserRouter,Link} from 'react-router-dom';
import Emoji from './components/Emoji';
import Typical from 'react-typical';
const App=() =>{
  const springs = useSpring({from:{ marginTop: -1000 }, to:{ marginTop: 0 }})



  return (
    <div>
    <animated.div className="App" style={springs}>
    <header className="App-header">
 
  <Typical
    loop={Infinity}
   
    steps={
      [
        'Hey All ! I am Pratyush Ranjan ',
      1500,
        'developer',
        1000,
        'deep learner',
        1000,
        

      ]
    }
    />
    <Emoji symbol="👌" label="waah"/></header>
    <div><Main/></div>
    </animated.div>
    
    </div>
      
        
  );
}

export default App;
