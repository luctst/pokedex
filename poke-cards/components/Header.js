export default class Header {
    constructor(element) {
        this.renderTitle(element);
    }

    renderTitle(element) {
        const header = document.createElement('header');
        header.setAttribute("class", "container-fluid mt-5");
        header.innerHTML = `
        <div class="row">
            <div class="col-12">
                <h1 class="display-3">PokéCards</h1>
            </div>
        </div>
        `;
        element.appendChild(header);
    }
}