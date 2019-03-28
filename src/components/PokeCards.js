/**
 * Render the pokemon cards.
 */
export default class PokeCards {
    constructor(el, arr) {
        this.renderCards(el, arr);
    }

    renderCards(element, pokemonArr) {
        if (document.querySelector(".section--cards")) {
            const cardSection = document.querySelector(".section--cards");
            cardSection.innerHTML = "";

            pokemonArr.map(el => {
                const pokeCards = document.createElement('div');
                pokeCards.setAttribute("class", "poke--cards");

                pokeCards.innerHTML = `<a class="card-link" href="${window.location.href}cards?id=${el.id}"><img class="card--picture" src="${el.imageUrl}"></a>`;

                cardSection.appendChild(pokeCards);
            });
        } else {
            const cardsSection = document.createElement('section');
            cardsSection.setAttribute("class", "container-fluid d-flex flex-wrap mt-5 section--cards");
    
            pokemonArr.map(el => {
            const pokeCards = document.createElement('div');
            pokeCards.setAttribute("class", "poke--cards");

            pokeCards.innerHTML = `<a class="card-link" href="${window.location.href}cards?id=${el.id}"><img class="card--picture" src="${el.imageUrl}"></a>`;

            cardsSection.appendChild(pokeCards);
            });
    
            element.appendChild(cardsSection);
        }
    }
}