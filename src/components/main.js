import React from 'react';
import {Switch,Route,BrowserRouter } from 'react-router-dom';
import About from './About';

import Resume from './Resume';

const Main=()=>{
    return(
        <BrowserRouter>
        <Switch>
        <Route exact path="/about" component={About}/>
        <Route path="/resume" component={Resume}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Main;