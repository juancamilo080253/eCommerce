//direccionamiento
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from "../login/login";

export default function Approuter (){
    return(
        <Router>
            <Routes>
                <Route exact path = {["/","/login"]} component={Login}/> 
            </Routes>
        </Router>
    )
}