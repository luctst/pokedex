import switchScript from "../helper/switchScript";
import Header from "../components/Header";
import Projects from "../components/Projects";
const projects = [
    {content: "Pokedex", description: "A pokedex with all pokemons generation's", link: "/pokedex"},
    {content: "Poke-cards", description: "A colllection of pokemon cards", link: "/poke-cards"}
]

/**
 * The main component who hols all our view and logic of all components.
 * @param {HTMLElement} root The HTML Element who render this function.
 */
function App(root) {
    switch (window.location.pathname) {
        case `/`:
        case "/pokedex/":
            new Header(root);
            new Projects(root, projects);
            break;
        case "/poke-cards":
        case "/pokedex/poke-cards":
            switchScript("poke-cards");
            break;
        case "/pokedex":
        case "/pokedex/pokedex":
            switchScript("pokedex");
            break;
        default:
            break;
    }
}

export default App;