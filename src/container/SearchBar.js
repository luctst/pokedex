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
        this.filterByName(element);
        this.filterApply();
        this.state = {
            filters: []
        }
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
     * Render cards by a pokemon name.
     * @param {String} element the pokemon name from the `inputValue` node element.
     */
    filterByName(element) {
        const inputValue = document.getElementById("myInput");
        inputValue.addEventListener('input', async () => {
            const dataParsed = await getData(`https://api.pokemontcg.io/v1/cards?name=${inputValue.value}`);
            this.pokemonData = [...dataParsed.cards];
            new PokeCards(element, this.pokemonData);
        });
    }
  
    filterApply() {
        const filter = document.querySelectorAll('select');
        let url = `https://api.pokemontcg.io/v1/cards?`;
        
        filter.forEach(element => {
            element.addEventListener('change', async () => {
                
                if (element.value === "Default") {
                    if (this.state.filters.length !== 0) {
                        const indexPos = this.state.filters.indexOf(element.name);
                        this.state.filters.splice(indexPos, 1); 
                    }
                } else if (this.state.filters.includes(element.name)) {
                    
                    console.log(url);
                    console.log(element.value);
                    
                   // let oldUrl = url.split(`${element.value}`);
                    const oldUrl = url.split('Fire');
                    
                    console.log(oldUrl);
                    const newUrl = url.replace('Fire', 'Water');
                    console.log(newUrl);
                    const dataParsed = await getData(newUrl);
                    this.pokemonData = [...dataParsed.cards];
                    new PokeCards(element, this.pokemonData);

                    // Log the new element.value
                    // const newUrl = url.replace( oldUrl, `${element.value}`);
                    // console.log(newUrl);

                    // Log https://api.pokemontcg.io/v1/cards?types=Fire&rarity=RareWater
                    // const testUrl = url.replace(oldUrl, newUrl);
                    // const urlGang = `${url +=element.name=testUrl}`;
                    // console.log(urlGang);
                    
                    
                    
                    
                    
                } else {
                    this.state.filters.push(element.name);

                    this.state.filters.filter((el, i) => {
                        if (url.includes(el)) {
                            null;
                        } else if (i === 0) {
                            url += `${el}=${element.value}`;
                           // console.log(url);
                            
                        } else {
                            url += `&${el}=${element.value}`;
                           // console.log(url);
                            
                        }
                    });

                    const dataParsed = await getData(url);
                    this.pokemonData = [...dataParsed.cards];
                    new PokeCards(element, this.pokemonData);
                }
            })
        });

        // const filterInput = document.querySelectorAll('.checkmark');
        // const filterLabel = document.querySelectorAll('label');
        // // const dataFilter = await getData(`https://api.pokemontcg.io/v1/cards?${filterLabel[i].innerText}`);
        // filterInput.forEach(element => {
        //     element.addEventListener("click", console.log(element));
        //     // element.addEventListener('click', () => {
        //     //     for (let i = 0; i < filterLabel.length; i++) {
        //     //         console.log(`Tu es l'innerText de: ${filterLabel[i].innerText}`);
        //     //     }
        //     // });
        // });
    }

    /**
    * Render the searchbar and the icon filter
    @param {HTMLElement} element === the previous html element which is render.
    */
    renderSearchBar(element) {
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
                                <div class="col-3">
                                    <label>Type</label>
                                    <select class="form-control type" name="types">
                                        <option selected>Default</option>
                                        <option>Fire</option>
                                        <option>Water</option>
                                        <option>Elektric</option>
                                        <option>Stone</option>
                                        <option>Wind</option>
                                    </select>
                                </div>
                                <div class="col-3">
                                    <label>Rarity</label>
                                    <select class="form-control rarity" name="rarity">
                                        <option selected>Default</option>
                                        <option>Rare</option>
                                        <option>Ex</option>
                                        <option>holo</option>
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