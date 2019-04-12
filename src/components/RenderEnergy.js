export default class RenderEnergy {
    constructor(el, data) {
        this.renderEnergy(el, data)
    }

    renderEnergy(el, data) {
        el.innerHTML = `
        <header class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex align-items-center mt-4 text-center">
                <h1 class="energy--name">${data.cards[0].name}</h1>
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
                <div class="col-3 energy--img text-center">
                    <img class="energy--picture" src="${data.cards[0].imageUrl}">
                </div>
               <div class="col-9 energy--about"></div>
            </div>
        <section>`;
        this.renderTextEnergy(document.querySelector('.energy--about'), data.cards[0]);
    }

    renderTextEnergy(element, data) {
        const p = document.createElement('p');

        if (data.text) {
            p.innerHTML = `
            <p><strong>Description: </strong></p>
            <p>${data.text}</p>
            `;
            element.appendChild(p);
        } else {
            p.innerHTML = `<em>No description.</em>`;
            element.appendChild(p);
        }
    }
}