//direccionamiento
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from "../login/login";
import Inicio from "../index/index";

export default function Approutes (){
    return(
        <Router>
            <Routes>
                <Route exact path = "/login" element={<Login />}></Route>
                <Route exact path = "/*" element={(
                    <h1 style={{marginTop:300}}>
                        404 <br/> pagina no encontrada
                    </h1>
                )}></Route> 
                <Route exact path = "/index" element={<Inicio />}></Route>
                <Route exact path = "/" element={<Inicio />}></Route>
            </Routes>
        </Router>
    );
}