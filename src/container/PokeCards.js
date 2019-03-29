export default class PokeCards {
    constructor(el) {
        this.renderCards(el);
    }

    /**
     * Call API which pick up the data
     * RendeCards renders the cards's view.
     @param {HTMLElement} element === the previous html element which is render.
     */
    renderCards(element) {
        const cardsSection = document.createElement('section');
        cardsSection.setAttribute("class", "container-fluid d-flex flex-wrap mt-5 section--cards");
        this.pokemonData.map(el => {
            const pokeCards = document.createElement('div');
            pokeCards.setAttribute("class", "poke--cards");
            pokeCards.innerHTML = `<a class="card-link" href="${window.location.href}cards?name=${el.name}"><img class="card--picture" src="${el.imageUrl}"></a>`;
            cardsSection.appendChild(pokeCards);
        });
        element.appendChild(cardsSection);
    }
}