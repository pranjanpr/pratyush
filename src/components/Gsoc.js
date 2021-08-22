import React from "react"
import './blogstyle.css'
import {Link} from 'react-router-dom'

const Gsoc = () => {
  return (  
    <div>
  <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'></link>
  <header class="l-header">
  <nav class="nav bd-grid">
      <div>
          <a href="#" class="nav__logo">Pratyush Ranjan</a>
      </div>

      <div class="nav__menu" id="nav-menu" >
          <ul class="nav__list">
              <li class="nav__item"><a href="#" class="nav__link active">GSoC'21</a></li>
              <li class="nav__item"><a href="https://github.com/pranjanpr/cups-filters" class="nav__link">Source Code</a></li>
              <Link to='/pratyush'><li class="nav__item"><a href="#contact" class="nav__link">Back Home</a></li></Link>
          </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle" >
          <i class='bx bx-menu'></i>
      </div>
  </nav>
</header>
<main class="l-main">
</main>
<section class="work section" id="work">
      <h2 class="section-title">Mentors</h2>
      <div class="mentor__container bd-grid">
          <div class="mentor__img">
              <img src={require('./till_openprinting.jpg')} alt="Till Kamppeter"/>
              <div class="image__overlay">
                <div class="image__title">Till Kamppeter</div>
                <p class="image__description"> Leader at OpenPrinting</p>
                <a href="https://github.com/tillkamppeter" class="footer__icon"><i class='bx bxl-github' ></i></a>
              </div>
          </div>
          <div class="mentor__img">
              <img src={require('./dhiraj.jpg')} alt="Dhiraj Yadav"/>
              <div class="image__overlay">
                <div class="image__title">Dheeraj Yadav</div>
                <a href="https://github.com/dheeraj135" class="footer__icon"><i class='bx bxl-github' ></i></a>
              </div>
          </div>
      </div>
  </section>
  <section class="work section" id="work">
  <h2 class="section-title">PROJECT: Converting CUPS Filters to Filter Function</h2>
  <div class="work__container">
    
    <div class="subtitle bd-grid"><h4>Problem Description</h4></div>
    <div class="define-content bd-grid">
      <p>
      Previously, some CUPS Filters were in the form of standalone executables. During a print job involving these filters, they were repeatedly called and hence system resource usage was extensive. Also for the usage in Printer Applications these filters need to be converted into library functions.
      Integrating these functions in a library would reduce the number of calls to the separate executables thereby saving the resources.<br/>
      These filters were:-<br/>
      pdftoraster()<br/>
      rastertopwg()<br/>
      texttopdf()<br/>
      bannertopdf()<br/>
      mupdftoraster()
      </p>
    </div>
    <div class="subtitle bd-grid"><h4> Little bit about Filters</h4></div>
    <div class="define-content bd-grid">
      <p>
      CUPS-Filters provide the filters which CUPS needs to convert job data from the input data to the printer's native language. Filters enable a user to print a file even if the printer does not support the file format.These filters are named according to their mime input and output.
      Eg. pdftoraster converts PDFs into CUPS-raster and pwg-raster format.
      </p>
    </div>
    <div class="subtitle bd-grid"><h4>My Work</h4></div>
    <div class="define-content bd-grid">
      
      The primary aim of this project was to convert these filters into filter functions and then integrate it within a library(libcupsfilters).
      During the course of this project I was able to convert all these mentioned filters to filter functions.
      The status of these filters are :-<br/>
      <div><h4>pdftoraster(merged)</h4><a href="https://github.com/OpenPrinting/cups-filters/pull/382"><p> https://github.com/OpenPrinting/cups-filters/pull/382<br/></p></a></div>
      <div><h4>rastertopwg(merged)</h4><a href="https://github.com/OpenPrinting/cups-filters/pull/388"><p>https://github.com/OpenPrinting/cups-filters/pull/388<br/></p></a></div>
      <div><h4>texttopdf(merged, patch needed)</h4><a href="https://github.com/OpenPrinting/cups-filters/pull/404"><p>https://github.com/OpenPrinting/cups-filters/pull/404<br/></p></a></div>
      <div><h4>bannertopdf(merged)</h4><a href="https://github.com/OpenPrinting/cups-filters/pull/407"><p>https://github.com/OpenPrinting/cups-filters/pull/407<br/></p></a></div>
      <div><h4>mupdftoraster(open)</h4><a href="https://github.com/OpenPrinting/cups-filters/pull/412"><p>https://github.com/OpenPrinting/cups-filters/pull/412<br/></p></a></div>
     
    </div>

  </div>
</section>
<section class="work section" id="work">
      <h2 class="section-title">Challenges</h2>
      <div class="bd-grid">
      <p>C/C++ is a kind of language which brings power to your hands. You decide whether you want to allocate static memory or dynamic ones. And as they say with great power comes great responsiblity so is the case with it. One needs to be be very careful about memory leaks. Although C/C++ don't have any built-in methods to determine which bit of memory was leaked, we have external tools to check it out. One such tool which helped me a lot is valgrind. I used --leak-check-full extensively during the project.</p>
      <p>Many filters included usage of different Open Source APIs which had very little documentation. It took me a while to understand the usage different color schemes(CMYK..). Also faced little difficulty during linking these functions with libcupsfilters.</p>
      </div>
  </section>
<section class="work section" id="work">
      <h2 class="section-title">Acknowledgements</h2>
      <div class="bd-grid">
      <p>I would like to express my sincere vote of thanks to my mentors, Till and Dhiraj, for being extremely supportive throughout the project. I would like to express my gratitude to Aveek Basu (basu [dot] aveek [at] gmail [dot] com), who found me this year during the Google Summer of Code selections, and for selecting me to contribute to such great projects.</p>
      </div>
  </section>
<section class="work section" id="work">
      <h2 class="section-title">Footnotes</h2>
      <div class="bd-grid">
      <p>CUPS-Filters got split out of CUPS for CUPS version 1.6.x, containing the filters and backends which Apple does not need for Mac OS X and therefore did not want to maintain anymore. Till Kamppeter had overtaken this part as an OpenPrinting project named CUPS-Filters. He added CUPS-browsed as CUPS itself did not automatically make remote CUPS queues available locally anymore. He also took maintainership on all CUPS features which Apple has given up. With the time, cups-filters got improved cups-filters, especially switched to a PDF-based printing workflow, added legacy CUPS broadcasting/browsing, sophisticated filtering of remote printers, auto setup of remote IPP printers, driverless printing, etc., and all the time kept it compatible with new CUPS features.</p>
      </div>
  </section>
<footer class="footer">
  <div class="footer__social">
      <a href="#" class="footer__icon"><i class='bx bxl-linkedin' ></i></a>
      <a href="#" class="footer__icon"><i class='bx bxl-github' ></i></a>
      <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a>
  </div>
  <p>&#169; {(new Date().getFullYear())} copyright all right reserved</p>
</footer>

</div>
  )
}
export default Gsoc