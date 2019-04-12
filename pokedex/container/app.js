/**
 * Import, Variables
 */
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import GlobalStore from "../store/GlobalStore";
import Home from "./Home";
import PokeCard from "../components/PokeCard";
import PokeMove from "../components/PokeMove";

/**
 * The app component hold all the views available for our app.
 */
export const App = () => {
    return (
        <Router>
            <GlobalStore>
                <Route exact path="/" component={Home}/>
                <Route exact path="/pokemon/:name" component={PokeCard} />
                <Route exact path="/moves/:name" component={PokeMove} />
            </GlobalStore>
        </Router>
    );
}

export default App;