/**
 * Import, variables
 */
import PokeCards from "../components/PokeCards";
import {getData} from "../actions/helper";
import Footer from "../components/Footer";

/**
 * Render the searchBar component.
 */
export default class SearchBar {
    constructor(element) {
        this.pokemonData = [];
        this.getPokeData(element);
        this.renderSearchBar(element);
    }

    /**
     * Call API which pick up the data
     * RendeCards renders the cards's view.
     @param {HTMLElement} element === the previous html element which is render.
     */
    async getPokeData(element) {
        const dataParsed = await getData("https://api.pokemontcg.io/v1/cards?page=2");
        this.pokemonData = [...dataParsed.cards];
        new PokeCards(element, this.pokemonData);
        new Footer(element);
    }
  
    /**
    * Render the searchbar and the icon filter
    @param {HTMLElement} element === the previous html element which is render.
    */
    renderSearchBar(element) {
        const searchBar = document.createElement("div");
        searchBar.setAttribute('class', 'col-xs-3 search--bar');

        searchBar.innerHTML = `<input type="text" id="myInput" size="80" placeholder="Search by name">`;
        element.appendChild(searchBar);

        const inputValue = document.getElementById("myInput");
        inputValue.addEventListener('input', async () => {
            const dataParsed = await getData(`https://api.pokemontcg.io/v1/cards?name=${inputValue.value}`);
            this.pokemonData = [...dataParsed.cards];
            new PokeCards(element, this.pokemonData);
        })
        this.renderFilters(element);
    }

    /**
     * Method which render filters.
     * @param {HTMLElement} element === the previous html element which is render.
     */
    renderFilters(element) {        
        const filters = document.createElement("div");
        filters.setAttribute('class', 'filters');

        filters.innerHTML = `
        
                `;

                element.appendChild(filters)

            this.filterApply();
    }

    filterApply() {
        const filterInput = document.querySelectorAll('.checkmark');
        const filterLabel = document.querySelectorAll('label');
        // const dataFilter = await getData(`https://api.pokemontcg.io/v1/cards?${filterLabel[i].innerText}`);
        filterInput.forEach(element => {
            element.addEventListener('click', () => {
                for (let i = 0; i < filterLabel.length; i++) {
                    console.log(`Tu es l'innerText de: ${filterLabel[i].innerText}`);
                }
            });
        });
    }
}