/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import App from "./container/app";
import Cards from "./routes/Cards";
const app = document.querySelector("#root");

if (window.location.pathname === "/" || window.location.pathname === "/poke-cards") {
    new App(app);
} else if (window.location.pathname === "/cards" || window.location.pathname === "/poke-cards/cards") {
    new Cards(app);
}