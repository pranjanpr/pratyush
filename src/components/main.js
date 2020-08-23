import React from 'react';
import {Switch,Route,BrowserRouter } from 'react-router-dom';
import About from './About';
import Blogs from './Blogs';
import Resume from './Resume';

const Main=()=>{
    return(
        <BrowserRouter>
        <Switch>
        <Route path="/about" component={About}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/blogs" component={Blogs}/>
        
        </Switch>
        </BrowserRouter>
    );
}

export default Main;