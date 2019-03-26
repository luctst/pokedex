/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import App from "./view/app";
import PokeCards from "./view/container/PokeCards";
const app = document.querySelector("#root");

//new App(app);

if (window.location.pathname === "/") {
    new App(app);
} else if (window.location.pathname === "/") {
    window.location.pathname = 'pkmn_card.html';
    console.log(window.pathname); 
}