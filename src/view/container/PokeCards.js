export default class PokeCards {
    constructor(el) {
        this.pokemonData = [];
        this.getData(el)
    }



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
        cardsSection.setAttribute("class", "container-fluid poke--cards d-flex flex-wrap mt-5");
        this.pokemonData.map(el => {
        const pokeCards = document.createElement('div');
        pokeCards.setAttribute('class', 'poke--card');
        pokeCards.innerHTML = `
                <div class="col-sm-3">
                    <div class="card--pokemon">
                        <img class="card--picture" src="${el.imageUrl}">
                    </div>
            </div>`;
            cardsSection.appendChild(pokeCards)
        });
        element.appendChild(cardsSection);
    }
}