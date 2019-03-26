/**
 * Import, Variables
 */
import "./assets/scss/main.scss";
import App from "./container/app";
import Test from "./routes/Cards";
const app = document.querySelector("#root");

if (window.location.pathname === "/") {
    new App(app);
} else if (window.location.pathname === "/cards") {
    new Test(app);

}