import React from 'react';
import '../App.css';



import Typical from 'react-typical';
import {useSpring,animated} from 'react-spring';
import {faLinkedinIn,faFacebookF,faGithub,faKaggle,faTwitter } from "@fortawesome/free-brands-svg-icons"
import {faAngleDoubleDown,faMapMarkerAlt,faPhoneAlt,faMailBulk} from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Timeline from './Timeline';

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
        <li><a >Blogs</a></li>
          <li><a href="https://pranjanpr.github.io/pratyush/Pratyush_Ranjan_Resume%20(3).pdf" target="_blank" >Resume</a></li>
        </ul>
      </nav>

    </animated.header>

    <div className="main-wrapper" >
    <animated.div className="imagediv" style={spring4}>
      <a href="#"><img className="imagee" src={require('./side.png')} alt="" /></a>
    </animated.div>
    <div className="codeforce"><a href="https://www.codechef.com/users/eleganc">eleganc</a></div>
    <div className="codeforce-jr"><a>Codechef</a></div>
      <animated.nav className="main-navv" role="navigation" style={spring3}>
        <ul className="main-menu">
          <li><a href="#first" >About Me</a></li>
          <li><a href="#second">Timeline</a></li>
          
          <li><a href="#third">Contact Me</a></li>
          
        </ul>
 
      </animated.nav>

    <div className="social-network">
      <ul className="soial-icons">
        <li><a href="https://www.facebook.com/pratyush.ranjan.54540/"><FontAwesomeIcon  icon={faFacebookF} /></a></li>
        <li><a href="https://www.linkedin.com/in/pratyush-ranjan-iitk/"><FontAwesomeIcon  icon={faLinkedinIn} /></a></li>
        <li><a href="https://www.kaggle.com/pratyushranjan20"><FontAwesomeIcon  icon={faKaggle} /></a></li>
        <li><a href="https://twitter.com/ran_pratyush"><FontAwesomeIcon  icon={faTwitter} /></a></li>
        <li><a href="https://www.github.com/pranjanpr"><FontAwesomeIcon  icon={faGithub} /></a></li>
      </ul>
    </div>

  </div>

    <div className="App-body">
      <animated.div style={spring2}>
        <img className="pict" src={require('./logo513.png')} />
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
      <div className="sliding-icon"><a href="#first"><FontAwesomeIcon size='2x' icon={faAngleDoubleDown} /></a></div>  
    </div>

    <div className="wrapper">
      <div className="fixed-bg bg-1" id="first">
        <div className="fixed-black">
        <h1>About</h1>
        <p> </p>
        <p>I am a rising sophomore at IIT Kanpur majoring in Mechanical Department. I love to develop cool things and I am always up for listening interactions of algorithms and mathematics. You can probably snatch away my attention if you come up with some business idea or an awesome deep learning project idea or a mind-boggling CP question.</p>
        <p>I have experience in Front end development and I am growing towards Backend as well having currently Django in my pocket. I can pretty much apply deep learning models and have some internship experience about it also. I am pretty familier with new technologies and just need a good internet to dive on to apply those.</p>
        <p>In my spare time you can catch me sketching stuff or watching videos or procastinating things. You can find me in C-609, Hall-13 (search in adjacent rooms too) or at CC building.</p>
        </div>
      </div>
      <div className="scroll-bg" id="second">
        <h1>Timeline</h1>
        <Timeline/>
      </div>
      <div className="fixed-bg bg-2" id="third" >
        
        <div className="fixed" >
        <h1>Contacts :</h1>
        <h2><FontAwesomeIcon  icon={faMapMarkerAlt} /> Address</h2>
        <p>C-609 Hall 13, IIT KANPUR</p>
        <h2><FontAwesomeIcon  icon={faPhoneAlt} /> Phone</h2>
        <p>+91 7310797025</p>
        <h2><FontAwesomeIcon  icon={faMailBulk} /> Email</h2>
        <p>pratyush.ranjan911@gmail.com</p>
        <p>pranjan@iitk.ac.in</p>
        </div>
      </div>
      
      <div className="scroll-bg" >
      <h4>Copyright© 2020 Pratyush Ranjan</h4>
      </div>
      
    </div> 
    
  </div>
)}

export default Blogs;
