import Header from "../components/Header";
import Projects from "../components/Projects";
const projects = [
    {content: "Pokedex", description: "A pokedex with all pokemons generation's", link: "/pokedex"},
    {content: "Poke-cards", description: "Test", link: "/poke-cards"}
]

/**
 * The main component who hols all our view and logic of all components.
 * @param {HTMLElement} root The HTML Element who render this function.
 */
function App(root) {
    new Header(root);
    new Projects(root, projects);
}

export default App;