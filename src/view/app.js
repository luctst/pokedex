/**
 * Import, Variables
 */
import React from "react";
import {GlobalStore} from "../store/GlobalStore";
import {Header} from "./components/Header";
import {Home} from "./container/Home";

/**
 * The app component hold all the views available for our app.
 */
export const App = () => {
    return (
        <GlobalStore>
            <Header/>
            <Home/>
        </GlobalStore>
    );
}