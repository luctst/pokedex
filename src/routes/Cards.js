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
                <div class="col-12 d-flex align-items-center mt-4 text-center">
                <h1 class="pkmn--name">${data.cards[0].name}</h1>
                    <div class="d-flex header--about">
                        <p class="ml-5"><strong>HP:</strong> ${data.cards[0].hp}</p>
                        <p class="ml-5"><strong>Type:</strong> ${data.cards[0].types}</p>
                        <p class="ml-5"><strong>Rarity:</strong> ${data.cards[0].rarity}</p>
                        <p class="ml-5"><strong>Supertype:</strong> ${data.cards[0].supertype}</p>
                    </div>
                    <a href="/"><button type="button" class="btn btn-success btn--back">Back</button></a>
                </div>
            </div>
        </header>
        <section class="container-fluid mt-5 section--cards">
            <div class="row">
                <div class="col-4 pkmn--img text-center">
                    <img class="pkmn--picture" src="${data.cards[0].imageUrl}">
                </div>
                <div class="col-8 pkmn--about">
                    <div class="render--attacks"></div>
                    <p class="cards--retreat--cost"><strong>RetreatCost energy:</strong> ${data.cards[0].convertedRetreatCost} ${data.cards[0].retreatCost}</p>
                    <p><strong>Subtype:</strong> ${data.cards[0].subtype}</p>
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
                       p.innerHTML = `<span class="cost">${el.cost}</span> || ${el[i]} || +${el.damage}`;
                       p.setAttribute("class", "p--name");
                       htmlP.appendChild(p);
                        break;
                    // case "damage": 
                    //     p.textContent = ` + ${el[i]} `;
                    //     p.setAttribute("class", "p--damage");
                    //     htmlP.appendChild(p);
                    //     break;
                    // case "cost": 
                    //     p.innerHTML = `Energy: <strong>${el.cost}</strong>`;
                    //     p.setAttribute("class", "p--cost");                        
                    //     htmlP.appendChild(p);
                    //     break;
                    case "text": 
                        p.textContent = `${el[i]} `;
                        p.setAttribute("class", "p--text");
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
                        p.innerHTML = `<strong>Weaknesses</strong>: ${el[i]}${el.value}`;
                        htmlP.appendChild(p);
                        break;
                    default:
                        break;
                }
            }
        })
    }
}