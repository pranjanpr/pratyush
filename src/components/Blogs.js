import React,{useState,useEffect} from 'react';
import '../App.css';

import {BrowserRouter as Router ,Link} from 'react-router-dom';
import Main from './main';
import Typical from 'react-typical';
import {useSpring,animated} from 'react-spring';
import {faTwitter,faInstagram,faLinkedinIn,faFacebookF,faGithub} from "@fortawesome/free-brands-svg-icons"
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Test from './Test';


const Blogs=()=>{
    const springs = useSpring({from:{ marginTop: -1000}, to:{ marginTop: 0 }})
    const spring2=useSpring({from:{marginTop:-1000},to:{marginTop:0}})
    const spring3=useSpring({from:{marginLeft:-3000},to:{marginLeft:0}})
    const spring4=useSpring({from:{opacity:0},to:{opacity:1},config: {
      duration: 1200,
    },})




return(

  <div className="App" >

    <animated.header className="App-header" style={springs}>
      
      <div className="name">Pratyush Ranjan</div>

      <nav className="main-nav">
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/resume">Resume</a></li>
        </ul>
      </nav>

    </animated.header>

    <div className="main-wrapper" >
    <animated.div className="imagediv" style={spring4}>
      <a href="#"><img className="imagee" src={require('./side.png')} alt="" /></a>
    </animated.div>
      <animated.nav className="main-navv" role="navigation" style={spring3}>
        <ul className="main-menu">
          <li><a href="#first">About Me</a></li>
          <li><a href="#second">My Work</a></li>
          <li><a href="#third">CP Handles</a></li>
          <li><a href="#section4">Contact Me</a></li>
          
        </ul>
      </animated.nav>

    <div className="social-network">
      <ul className="soial-icons">
        <li><a><FontAwesomeIcon  icon={faFacebookF} /></a></li>
        <li><a><FontAwesomeIcon  icon={faLinkedinIn} /></a></li>
        <li><a><FontAwesomeIcon  icon={faTwitter} /></a></li>
        <li><a><FontAwesomeIcon  icon={faInstagram} /></a></li>
        <li><a><FontAwesomeIcon  icon={faGithub} /></a></li>
      </ul>
    </div>

  </div>

    <div className="App-body">

      <animated.div style={spring2}>
        <img className="pict" src={require('./logo512.png')} />
      </animated.div >
  <div>
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
          'deep learner',
          1000,
          'LETS DIVE Innnn...✨',
          1000,]}/>
      </p>
      </div> 
      <div><FontAwesomeIcon size='2x' icon={faAngleDoubleDown} />
      
      
      </div>  
         
    </div>

    <div className="wrapper">
      <div className="fixed-bg bg-1" id="first">
        <h1>Fixed Background scrolling</h1>
      </div>
      <div className="scroll-bg">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</h3>
      </div>
      <div className="fixed-bg bg-2" id="second">
        <h1>Fixed Background scrolling</h1>
      </div>
      <div className="scroll-bg">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
      </div>
      <div className="fixed-bg bg-3" id="third">
        <h1>Fixed Background scrolling</h1>
      </div>
      <div className="scroll-bg">
      <p>Copyright© 2020 Pratyush Ranjan</p>
      </div>
      
    </div> 
    
  </div>
)}

export default Blogs;
