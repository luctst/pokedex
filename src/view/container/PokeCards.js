import Footer from "../components/Footer";

export default class PokeCards {
    constructor(el) {
        this.pokemonData = [];
        this.getData(el)
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
                console.log(dataParsed);
                this.renderCards(element);
            })
            .catch(error => console.log(error));
    }

    renderCards(element) {
        const cardsSection = document.createElement('section');
        cardsSection.setAttribute("class", "container-fluid d-flex flex-wrap mt-5 section--cards");
        this.pokemonData.map(el => {
        const pokeCards = document.createElement('div');
        pokeCards.setAttribute("class", "poke--cards");
            pokeCards.innerHTML = `<a class="card-link" href="#" ><img class="card--picture" src="${el.imageUrl}"></a>`;
            cardsSection.appendChild(pokeCards)
        });
        element.appendChild(cardsSection);
        new Footer(element);
    }
}