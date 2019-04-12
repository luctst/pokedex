export default class Loader {
    constructor(element) {
        this.renderLoader(element);
    }

    renderLoader(element) {
        const div = document.createElement("div");
        div.setAttribute("class", "loader");
        element.appendChild(div)
    }
}