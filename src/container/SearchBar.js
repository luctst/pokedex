import PokeCards from "./PokeCards";

export default class SearchBar {
    constructor(element, el) {
        this.pkmnArr = [];
        this.getData(el);
        this.renderSearchBar(element);
    }

    /**
     * Call API which pick up the data
     * RendeCards renders the cards's view.
     @param {HTMLElement} element === the previous html element which is render.
     */
    getData(element) {
        fetch("https://api.pokemontcg.io/v1/cards?page=2")
            .then(result => result.json())
            .then(dataParsed => {
                this.pokemonData = [...dataParsed.cards];
                //this.renderCards(element);
                new PokeCards(element);
            })
            .catch(error => console.log(error));
    }

    
    /**
    * Render the searchbar and the icon filter
    @param {HTMLElement} element === the previous html element which is render.
    */
    renderSearchBar(element) {
        const searchBar = document.createElement("div");
        searchBar.setAttribute('class', 'col-xs-3 search--bar');
        searchBar.innerHTML = `
        <input type="text" id="myInput" size="80" placeholder="Search by name">
        <button class="button is-primary search--btn"><i class="fas fa-search"></i></button>`;
        element.appendChild(searchBar);
        this.renderFilters(element);
        this.searchByName();
    }

    /**
     * Method to search by name and render all cards ask by the name.
     */
    searchByName() {
        const btnSearch = document.querySelector('.search--btn');
        const inputSearch = document.querySelector('input');
        
        btnSearch.addEventListener('click', () => {
            window.location.href = `cards?name=${inputSearch.value}`;
        })

        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13) {
                window.location.href = `cards?name=${inputSearch.value}`;
            }
        })
    }

    /**
     * Method which render filters.
     * @param {HTMLElement} element === the previous html element which is render.
     */

    renderFilters(element) {
        //const filterBtn = document.querySelector('.filter--btn');
        const filters = document.createElement("div");
        filters.setAttribute('class', 'filters');

        // filterBtn.addEventListener('click', () => {
        filters.innerHTML = `
            <h3>Filters:</h3>
                <label class="container">Trainers
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                
                <label class="container">Types
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                
                <label class="container">Hp
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                <label class="container">Rarity
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                <label class="container">Retreat cost
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                <label class="container">Weakness
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                <label class="container">Resistance
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                
                <label class="container">EvolvesFrom
                <input type="checkbox">
                <span class="checkmark"></span>
                </label> `;
        // })
        element.appendChild(filters)
    }
}