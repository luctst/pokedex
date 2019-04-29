/**
 * Import, Variables
 */
import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
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
                <Route exact path={["/", "/pokedex"]} component={Home}/>
                <Route exact path={["/pokemon/:name", "/pokedex/pokemon/:name"]} component={PokeCard} />
                <Route exact path={["/moves/:name", "/pokedex/moves/:name"]} component={PokeMove} />
            </GlobalStore>
        </Router>
    );
}

export default App;