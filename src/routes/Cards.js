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

    loopAttacks(array) {
        const attackArr = [];
        array.map(el => {
            Object.values(el).map(value => attackArr.push(value));
        })
        return attackArr;
    }

    render(el, data) {
       const valuesArr = this.loopAttacks(data.cards[0].attacks);
       console.log(valuesArr);       
       
        el.innerHTML = `
        <header class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h1>${data.cards[0].name}</h1>
                </div>
            </div>
        </header>
        <section class="container-fluid mt-5 section--cards">
            <div class="row">
                <div class="col-6 pkmn--img">
                    <img class="pkmn--picture" src="${data.cards[0].imageUrl}">
                </div>
                <div class="col-6 pkmn--about">
                    <p>${data.cards[0].supertype}</p>
                    <p>${data.cards[0].hp}</p>
                    <p>ATTACKS: </p>
                    <div class="render--attacks"></div>
                    <p>${data.cards[0].convertedRetreatCost}</p>
                    <p>${data.cards[0].rarity}</p>
                    <p>${data.cards[0].retreatCost}</p>
                    <p>${data.cards[0].subtype}</p>
                    <p>${data.cards[0].types}</p>
                    <p>${data.cards[0].weaknesses}</p>
                </div>
            </div>
        <section>`;

        valuesArr.map(value => {
            const htmlP = document.querySelector('.render--attacks');
            const p = document.createElement('p');
            p.textContent = value;
            htmlP.appendChild(p);
        })
    }
}