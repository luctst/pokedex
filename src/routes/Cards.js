/**
 * Import, variables..
 */
import { getData } from "../actions/helper";
import RenderPkmn from "../components/RenderPkmn";
import RenderTrainer from "../components/RenderTrainer";
import RenderEnergy from "../components/RenderEnergy";
/**
* Render the /cards component. 
*/
export default class Cards {
    constructor(element) {
        this.getPokemonData(element);
    }

    /**
     * Fetch the data of the pokemon in url
     * @param {HTMLElement} el the html element to get with `render` function.
     */
    async getPokemonData(el) {
        const pokeId = window.location.search.split("=");
        const dataParsed = await getData(`https://api.pokemontcg.io/v1/cards?id=${pokeId[1]}`);

        if (dataParsed.cards.length === 0) {
            const section = document.createElement("section");
            section.setAttribute("class", "container d-flex justify-content-center align-items-center");
            section.setAttribute("style", "height:100vh;");
            section.innerHTML = `
                <div class="row">
                    <div class="col-12">
                        <h1 class="text-center display-3">${pokeName[1]} is not a pokemon..</h1>
                        <p class="small"><a href="${window.location.origin}/cards?name=charizard"> Try to click here</a></p>
                    </div>
                </div>
            `;
            el.appendChild(section);
        } else {
            if (dataParsed.cards[0].supertype === "Pokémon") {
                new RenderPkmn(el, dataParsed);  
            } else if (dataParsed.cards[0].supertype === "Energy") {
                new RenderEnergy(el, dataParsed);
            } else {
                 new RenderTrainer(el, dataParsed);
             }
        }
    }
}