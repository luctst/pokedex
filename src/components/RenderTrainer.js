export default class RenderTrainer {
    constructor(el, data) {
        this.renderTrainer(el, data)
    }

    renderTrainer(el, data) {
        el.innerHTML = `
        <header class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex align-items-center mt-4 text-center">
                <h1 class="trainer--name">${data.cards[0].name}</h1>
                    <div class="d-flex header--about">
                        <p class="ml-5"><strong>Rarity:</strong> ${data.cards[0].rarity}</p>
                        <p class="ml-5"><strong>Supertype:</strong> ${data.cards[0].supertype}</p>
                    </div>
                    <a href="/"><button type="button" class="btn btn-success btn--back">Back</button></a>
                </div>
            </div>
        </header>
        <section class="container-fluid mt-5 section--cards">
            <div class="row">
                <div class="col-3 trainer--img text-center">
                    <img class="trainer--picture" src="${data.cards[0].imageUrl}">
                </div>
                <div class="col-9 trainer--about">
                    <div class="render--text"></div>
                    <p><strong>Description:</strong></p>
                    <p>${data.cards[0].text}</p>
                </div>
            </div>
        <section>`;
    }
}