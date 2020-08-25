import React from 'react';
import '../App.css';
import {BrowserRouter as Router ,Link} from 'react-router-dom';
import Main from './main';
import Typical from 'react-typical';
import {useSpring,animated} from 'react-spring';

const Blogs=()=>{
    const springs = useSpring({from:{ marginTop: -1000}, to:{ marginTop: 0 }})
    const spring2=useSpring({from:{marginTop:-1000},to:{marginTop:0}})
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

    <div className="main-wrapper">

      <nav className="main-navv" role="navigation">
        <ul classNav="main-menu">
          <li><a href="#section1">About Me</a></li>
          <li><a href="#section2">What I’m good at</a></li>
          <li><a href="#section3">My Work</a></li>
          <li><a href="#section4">Contact Me</a></li>
        </ul>
      </nav>

    <div className="social-network">
      <ul className="soial-icons">
        <li><a href="https://fb.com/templatemo"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
        <li><a href="#"><i className="fa fa-rss"></i></a></li>
      </ul>
    </div>

  </div>

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
          'deep learner',
          1000,
          'LETS DIVE Innnn...✨',
          1000,]}/>
      </p>

    </div>

    <div className="wrapper">
      <div className="fixed-bg bg-1">
        <h1>Fixed Background scrolling</h1>
      </div>
      <div className="scroll-bg">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna. Etiam sodales arcu at lectus porttitor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur id urna dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et pharetra justo, quis suscipit risus. Maecenas tincidunt efficitur ex in pharetra.</h3>
      </div>
      <div className="fixed-bg bg-2">
        <h1>Fixed Background scrolling</h1>
      </div>
      <div className="scroll-bg">
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dolor tempor, posuere mi id, eleifend magna. Nulla at lectus magna.</h3>
      </div>
      <div className="fixed-bg bg-3">
        <h1>Fixed Background scrolling</h1>
      </div>
    </div> 
    
  </div>
)}

export default Blogs;
