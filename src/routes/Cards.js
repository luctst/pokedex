/**
 * Import, variables..
 */
import { getData } from "../actions/helper";
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
            this.render(el, dataParsed);
        }
    }

    /**
     * 
     * @param {HTMLElement} el === The root div
     * @param {Array} data === The pokemon cards's array 
     */
    render(el, data) {
        el.innerHTML = `
        <header class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex align-items-center mt-4">
                <h1>${data.cards[0].name}</h1>
                <p class="ml-5"><strong>HP:</strong> ${data.cards[0].hp}</p>
                <p class="ml-5"><strong>Type:</strong> ${data.cards[0].types}</p>
                <p class="ml-5"><strong>Rarity:</strong> ${data.cards[0].rarity}</p>
                </div>
            </div>
        </header>
        <section class="container-fluid mt-5 section--cards">
            <div class="row">
                <div class="col-6 pkmn--img">
                    <img class="pkmn--picture" src="${data.cards[0].imageUrl}">
                </div>
                <div class="col-6 pkmn--about">
                    <p><strong>Supertype:</strong> ${data.cards[0].supertype}</p>
                    <p><strong>ATTACKS:</strong> </p>
                    <div class="render--attacks"></div>
                    <p><strong>RetreatCost energy:</strong> ${data.cards[0].convertedRetreatCost} + ${data.cards[0].retreatCost}</p>
                    <p><strong>Subtype:</strong> ${data.cards[0].subtype}</p>
                    <p><strong>Weaknesses:</strong></p>
                    <div class="render--weaknesses"></div>
                </div>
            </div>
        <section>`;

        /**
         * @param {Loop}  === Function which loop on the Object in attacks
         */
        
        data.cards[0].attacks.map(el => {
            for (const i in el) {
                const htmlP = document.querySelector('.render--attacks');
                const p = document.createElement('p');
                switch (i) {
                    case "name": 
                       p.innerHTML = `<strong>Name attack:</strong> ${el[i]}`;
                       htmlP.appendChild(p);
                        break;
                    case "damage": 
                        p.textContent = `Damage: ${el[i]} `;
                        htmlP.appendChild(p);
                        break;
                    case "cost": 
                        p.innerHTML = `Energy: <strong>${el.cost}</strong>`;
                        htmlP.appendChild(p);
                        break;
                    case "text": 
                        p.textContent = `Description attack: ${el[i]} `;
                        htmlP.appendChild(p);
                        break;
                    default:
                        break;
                }
            }
        })

        /**
         * @param {Loop}  === Function which loop on the Object in weaknesses
         */
        data.cards[0].weaknesses.map(el => {
            for (const i in el) {
                const htmlP = document.querySelector('.render--weaknesses');
                const p = document.createElement('p');
                switch (i) {
                    case "type":
                        p.innerHTML = `<strong>${el[i]}</strong> ${el.value}`;
                        htmlP.appendChild(p);
                        break;
                    default:
                        break;
                }
            }
        })
    }
}