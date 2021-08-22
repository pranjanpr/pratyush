import React,{useRef, useState} from 'react';
import Timeline from './Timeline';
import './blogstyle.css'



import Typical from 'react-typical';
import {useSpring,animated} from 'react-spring';
import {faLinkedinIn,faFacebookF,faGithub,faKaggle,faTwitter } from "@fortawesome/free-brands-svg-icons"
import {faAngleDoubleDown,faMapMarkerAlt,faPhoneAlt,faMailBulk} from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Blogs=()=>{
    const springs = useSpring({from:{ marginTop: -1000}, to:{ marginTop: 0 }})
    const spring2=useSpring({from:{marginTop:-1000},to:{marginTop:0}})
    const spring3=useSpring({from:{marginLeft:-3000},to:{marginLeft:0}})
    const spring4=useSpring({from:{opacity:0},to:{opacity:1},config: {
      duration: 1200,
    },})

    const toggler = useRef()
    const [curr,Setcurr] = useState(false)

    const showMenu = (toggleId, navId) =>{
      const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId)
  
      if(toggle && nav){
          toggle.addEventListener('click', ()=>{
              nav.classList.toggle('show')
          })
      }
  }
  showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

function toggleright(){

  console.log(toggler.current)
  Setcurr(!curr)
  toggler.current.classList.toggle('show')
}

return(
  <div>
  <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>
  <header class="l-header">
  <nav class="nav bd-grid">
      <div>
          <a href="#" class="nav__logo">Pratyush</a>
      </div>

      <div class="nav__menu" id="nav-menu" ref={toggler}>
          <ul class="nav__list">
              <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
              <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
              <li class="nav__item"><a href="#work" class="nav__link">Work</a></li>
              <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
              <li class="nav__item"><a href="https://pranjanpr.github.io/pratyush/Pratyush_Ranjan_Resume%20(3).pdf" class="nav__link">Resume</a></li>
          </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle" onClick={toggleright} >
          <i class='bx bx-menu'></i>
      </div>
  </nav>
</header>

<main class="l-main">

  <section class="home bd-grid" id="home">
      <div class="home__data">
          <h1 class="home__title">Hi,<br/>I'am <span class="home__title-color">Pratyush</span><br/>Ranjan</h1>

          <a href="#" class="button">Contact</a>
      </div>

      <div class="home__social">
          <a href="https://www.linkedin.com/in/pratyush-ranjan-iitk/" class="home__social-icon"><i class='bx bxl-linkedin'></i></a>
          <a href="https://twitter.com/ran_pratyush" class="home__social-icon"><i class='bx bxl-twitter' ></i></a>
          <a href="https://www.github.com/pranjanpr/" class="home__social-icon"><i class='bx bxl-github' ></i></a>
      </div>

      <div class="home__img">    
          <img src={require('./side.png')} alt=""/>
      </div>
  </section>


  <section class="about section " id="about">
      <h2 class="section-title">About Me</h2>

      <div class="about__container bd-grid">
          <div class="about__img">
              <img src="assets/img/about.jpg" alt=""/>
          </div>
          
          <div>
              <h2 class="about__subtitle">I'am Pratyush</h2>
              <p class="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
          </div>                                   
      </div>
  </section>

  <section class="about section " id="about">
  <div>
    <h2 class="section-title">Experience</h2>
    <Timeline/>
  </div>
  </section>

  <section class="work section" id="work">
      <h2 class="section-title">Projects</h2>

      <div class="work__container bd-grid">
          <div class="work__img">
              <img src="assets/img/work1.jpg" alt=""/>
          </div>
          <div class="work__img">
              <img src="assets/img/work2.jpg" alt=""/>
          </div>
          <div class="work__img">
              <img src="assets/img/work3.jpg" alt=""/>
          </div>
          <div class="work__img">
              <img src="assets/img/work4.jpg" alt=""/>
          </div>
          <div class="work__img">
              <img src="assets/img/work5.jpg" alt=""/>
          </div>
          <div class="work__img">
              <img src="assets/img/work6.jpg" alt=""/>
          </div>
      </div>
  </section>


  <section class="contact section" id="contact">
      <h2 class="section-title">Contact</h2>

      <div class="contact__container bd-grid">
          <form action="" class="contact__form">
              <input type="text" placeholder="Name" class="contact__input"/>
              <input type="mail" placeholder="Email" class="contact__input"/>
              <textarea name="" id="" cols="0" rows="10" class="contact__input"></textarea>
              <input type="button" value="Send" class="contact__button button"/>
          </form>
      </div>
  </section>
</main>


<footer class="footer">
  
  <div class="footer__social">
      <a href="https://www.linkedin.com/in/pratyush-ranjan-iitk/" class="footer__icon"><i class='bx bxl-linkedin' ></i></a>
      <a href="https://www.github.com/pranjanpr/" class="footer__icon"><i class='bx bxl-github' ></i></a>
      <a href="https://twitter.com/ran_pratyush" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
  </div>
  <p>&#169; {(new Date().getFullYear())} copyright all right reserved</p>
  
</footer>

</div>
)}

export default Blogs;
