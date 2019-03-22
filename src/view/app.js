/**
 * Import, Variables
 */
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import PokeCards from "./container/PokeCards";
export default class App {
    constructor(element) {
        new Header(element);
        new Introduction(element);
        new PokeCards(element);
    }
}