/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import React from "react";
import { render } from "react-dom";
import {App} from "./view/App";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { PokeCard } from "./view/components/PokeCard";
const app = document.querySelector("#root");

/**
 * The global component of the app handle the route here
 */
const Main = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/pokemon/:name" component={PokeCard}/>
                <Route exact path="/" component={App}/>
            </Switch>
        </Router>
    );
}

/**
 * Execute the render fonction
 */
render(<Main/>, app);