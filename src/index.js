/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import App from "./view/app";
import PokeCards from "./view/container/PokeCards";
const app = document.querySelector("#root");

new App(app);

if (window.location.href === "/") {
    new App(app)
} else if (window.location.href !== "/") {
    window.pathname = 'pkmn_card.html';
    console.log(window.pathname); 
}