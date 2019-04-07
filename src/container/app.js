/**
 * Import, Variables
 */
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import FormFilter from "./FormFilter";

/** 
 * App who render the Header, Introduction and Pokecards 
 @param {HTMLElement} element === the previous html element which is render.
 */
export default class App {
    constructor(element) {
        new Header(element);
        new Introduction(element);
        new FormFilter(element);
    }
}