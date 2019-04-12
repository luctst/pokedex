/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import App from "./container/app";
import Cards from "./routes/Cards";
const app = document.querySelector("#root");

if (window.location.pathname === "/") {
    new App(app);
} else if (window.location.pathname === "/cards") {
    new Cards(app);
}