import App from "./container/App";
const app = document.querySelector("#root");

switch (window.location.pathname) {
    case "/":
        new App(app);
        break;
    case "/poke-cards":
        const oldScript = document.querySelector("script");
        const newScript = document.createElement("script");

        newScript.setAttribute("src", "poke-cards/bundle.js");
        document.querySelector("body").replaceChild(newScript, oldScript);
        break;
    default:
        break;
}