/**
 * Import, variables
 */
import PokeCards from "../components/PokeCards";
import {getData} from "../actions/helper";
import Footer from "../components/Footer";

/**
 * Render the searchBar component.
 */
export default class FormFilter {
    constructor(element) {
        this.pokemonData = [];
        this.state = {
            baseUrl: "https://api.pokemontcg.io/v1/cards?",
            filtersList: []
        }
        this.render(element);
        this.initialCardsRender(element);
        this.filterByName(element);
        this.applyFilter(element);
    }

    /**
     * Fetch data with the url argument and render the `pokeCards` component.
     * @param {HTMLElement} element The element html to use for render the poke cards.
     * @param {String} url The string of parameters to add to the request.
     */
    async reRenderCards(element, url) {
        const dataParsed = await getData(url);
        this.pokemonData = [...dataParsed.cards];
        new PokeCards(element, this.pokemonData);
    }

    /**
     * Render the first pokeCards without any filter, check if an footer element exist. 
     * If yes don't re render the footer component to avoid duplication.
     * @param {HTMLElement} element === the previous html element which is render.
     */
    initialCardsRender(element) {
        this.reRenderCards(element, this.state.baseUrl);
        document.querySelector("footer") ? null : new Footer(element);
    }

    /**
     * Render cards by a pokemon name when the search bar is changing.
     * First case - No filter to apply fetch only with `searchInput.value` as value for `name` parameter.
     * Second case - The value of the input is empty executed the `initialRenderCards` to display default cards.
     * Third case - If filter is activated fetch with the filter and the name parameter so we're using `&` to * separate our filters to our `name` parameter.
     * @param {String} element the pokemon name from the `inputValue` node element.
     */
    filterByName(element) {
        const searchInput = document.getElementById("myInput");

        searchInput.addEventListener('input', async () => {
            if (this.state.filtersList.length === 0 && searchInput.value !== "") {
                //this.reRenderCards(element, `${this.state.baseUrl}name=${searchInput.value}`);
                //console.log(`${this.state.baseUrl}name=${searchInput.value}`);
                this.state.baseUrl = `https://api.pokemontcg.io/v1/cards?name=${searchInput.value}`;
                console.log(this.state.baseUrl);
                this.reRenderCards(element, this.state.baseUrl);
                
                
            } else if (searchInput.value === "") {
                this.state.baseUrl = "https://api.pokemontcg.io/v1/cards?";
                this.reRenderCards(element, this.state.baseUrl);
            } else {
                this.reRenderCards(element, `${this.state.baseUrl}&name=${searchInput.value}`); 
                console.log(this.state.baseUrl);
                
            }
        });
    }
  
    /**
     * Apply filter and reRender cards with the filters.
     */
    applyFilter(element) {
        const getSelect = document.querySelectorAll("select");
        const searchInput = document.getElementById("myInput");

        getSelect.forEach(el => {
            el.addEventListener("change", () => {
                
                if (el.value === "Default") {
                    this.state.filtersList.map(object => {
                        if (object.param === el.name) {
                            const newUrl = this.state.baseUrl.replace(`${object.param}=${object.value}`, "");
                            console.log(object, newUrl);
                        }
                    })
                } else if (this.state.baseUrl.includes(el.name)) {
                    this.state.filtersList.map(object => {
                        if (object.param === el.name) {
                            const newUrl = this.state.baseUrl.replace(object.value, el.value);
                            object.value = el.value;
                            this.state.baseUrl = newUrl;
                            console.log(searchInput.value);
                            console.log(this.state.baseUrl);
                            
                        }
                    })

                    this.reRenderCards(element, this.state.baseUrl);
                } else {
                    this.state.filtersList.push({param: el.name, value: el.value});
                    
                    this.state.filtersList.map((elInMap, index) => {
                        if (this.state.baseUrl.includes(elInMap.param)) {
                            null;
                        } else if (index === 0 && searchInput.value !== "")  {
                            this.state.baseUrl += `name=${searchInput.value}&${elInMap.param}=${elInMap.value}`;
                            console.log(searchInput.value);
                            console.log(this.state.baseUrl);
                        } else {
                            this.state.baseUrl += `&${elInMap.param}=${elInMap.value}`;
                            console.log(this.state.baseUrl);
                        }
                    });
                    
                    this.reRenderCards(element, this.state.baseUrl);
                }
            });
        });
    }

    /**
    * Render the searchbar and the icon filter
    * @param {HTMLElement} element === the previous html element which is render.
    */
    render(element) {
        const searchBar = document.createElement("section");
        searchBar.setAttribute('class', 'container-fluid search--bar');

        searchBar.innerHTML = `
            <div class="row">
                <div class="col-8">
                    <form>
                        <div class="form-group">
                            <input id="myInput" placeholder="Search by name" class="form-control">
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-3 mb-5">
                                    <label>Type</label>
                                    <select class="form-control type" name="types">
                                        <option selected>Default</option>
                                        <option>Fire</option>
                                        <option>Water</option>
                                        <option>Fighting</option>
                                        <option>Psychic</option>
                                        <option>Dragon</option>
                                        <option>Colorless</option>
                                        <option>Fairy</option>
                                        <option>Grass</option>
                                        <option>Metal</option>
                                        <option>Lightning</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label>Rarity</label>
                                    <select class="form-control rarity" name="rarity">
                                        <option selected>Default</option>
                                        <option>Rare</option>
                                        <option>Common</option>
                                        <option>Holo</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label>Supertype</label>
                                    <select class="form-control rarity" name="supertype">
                                        <option selected>Default</option>
                                        <option>Trainer</option>
                                        <option>Pokemon</option>
                                        <option>Energy</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label>Hp</label>
                                    <select class="form-control rarity" name="hp">
                                        <option selected>Default</option>
                                        <option>hp</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label>RetreatCost</label>
                                    <select class="form-control rarity" name="retreatCost">
                                        <option selected>Default</option>
                                        <option>retreatCost</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label>Weaknesses</label>
                                    <select class="form-control rarity" name="weaknesses">
                                        <option selected>Default</option>
                                        <option>weaknesses</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label>Resistances</label>
                                    <select class="form-control rarity" name="resistances">
                                        <option selected>Default</option>
                                        <option>resistances</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>`;
        element.appendChild(searchBar);
    }
}