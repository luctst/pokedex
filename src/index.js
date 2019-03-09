/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import {App} from "./view/App";
import {BrowserRouter as Router, Route} from 'react-router-dom';
const app = document.querySelector("#root");

/**
 * The global component of the app handle the the route here
 */
const Main = () => {
    return (
        <Router>
            <Route exact path="/" component={App}/>
        </Router>
    );
}

/**
 * Execute the render fonction
 */
render(<Main/>, app);