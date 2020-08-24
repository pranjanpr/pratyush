import React,{Component} from 'react';
import '../App.css';
import {BrowserRouter as Router ,Link} from 'react-router-dom';
import Main from './main';
import Typical from 'react-typical';
import {useSpring,animated} from 'react-spring';

const Blogs=()=>{
    const springs = useSpring({from:{ marginTop: -1000}, to:{ marginTop: 0 }})
    const spring2=useSpring({from:{marginLeft:-3000},to:{marginLeft:0}})
return(
    <div className="App" >
        <div className="App-body">
            <animated.div style={spring2}>
                 <img className="pict" src={require('./logo512.png')} />
            </animated.div >
            <p>
            <Typical
                loop={Infinity}
                steps={[
                'Hey All ! 👋 I am Pratyush Ranjan ',
                1500,
                'developer',
                1000,
                'competitive coder',
                1000,
                'LETS DIVE Innnn...✨',
                1000,]}/>
            </p>
        </div>
          <div className="main-wrapper">
          lorenepsumjwsdbejbxksbdj
          </div>
        <div class="wrapper">
  
  <div class="fixed-bg bg-1">
    <h1>Fixed Background scrolling</h1>
  </div>
  
  <div class="scroll-bg">
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</h3>
  </div>
  
  <div class="fixed-bg bg-2">
    <h1>Fixed Background scrolling</h1>
  </div>
  
  <div class="scroll-bg">
    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
  </div>
  
  <div class="fixed-bg bg-3">
    <h1>Fixed Background scrolling</h1>
  </div>
  
</div> 
    </div>
)}

export default Blogs;
