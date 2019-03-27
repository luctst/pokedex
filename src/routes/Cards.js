/**
 * Import, variables..
 */
import { getData } from "../actions/helper";

/**
* Render the /cards component. 
*/
export default class Test {
    constructor(element) {
        this.getPokemonData(element);
    }

    /**
     * Fetch the data of the pokemon in url
     * @param {HTMLElement} el the html element to get with `render` function.
     */
    async getPokemonData(el) {
        const pokeName = window.location.search.split("=");
        const dataParsed = await getData(`https://api.pokemontcg.io/v1/cards?name=${pokeName[1].toLowerCase()}`);
        
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
            this.render(el, dataParsed);
        }
    }

    render(el, data) {
        const section = document.createElement('section');
        section.setAttribute("class", "container-fluid d-flex flex-wrap mt-5 section--cards");
        section.innerHTML = `<h1>${data.cards[0].name}</h1>`;
        data.cards.map(el => {
           // console.log(data.cards[0]);

            const pokeCards = document.createElement('div');
            pokeCards.setAttribute("class", "poke--cards");
            pokeCards.innerHTML =
                `<a class="card-link">
                    <img class="card--picture" src="${el.imageUrl}">
                </a>
                <div class="about">
                    <p>${el.supertype}</p>
                    <p>${el.hp}</p>
                    <p>${el.attacks}</p>
                    <p>${el.convertedRetreatCost}</p>
                    <p>${el.rarity}</p>
                    <p>${el.retreatCost}</p>
                    <p>${el.subtype}</p>
                    <p>${el.types}</p>
                    <p>${el.weaknesses}</p>
                </div>`;
            section.appendChild(pokeCards);
            
            /**
             * @param {HTMLELement} el === the card clicked
             * Test which pick up the el clicked
             */
            pokeCards.addEventListener('click', () => {
                if (el.imageUrl) {
                    console.log(el.imageUrl); 
                } 
            })
            
        });
        el.appendChild(section);
    }
    // <p>${this.loopAttacks(el.attacks)}</p>
            // loopAttacks(array) {
            //     for (let i = 0; i < array.length; i++) {
            //        const  attacks = {
            //             name: array[i].name, 
            //             damage: array[i].damage,
            //             text: array[i].text,
            //             convertedEnergyCost: array[i].convertedEnergyCost
            //         }
            //         return Object.values(attacks);
            //        // console.log(attacks);
                    
            //     }
            // }
}