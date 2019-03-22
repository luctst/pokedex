export default class SearchBar {
    constructor(element) {
        this.renderSearchBar(element);
    }

    renderSearchBar(element) {
        const searchBar = document.createElement("div");
        searchBar.setAttribute('class', 'col-xs-3 search--bar');
        searchBar.innerHTML = `
        <input type="text" id="myInput" size="80" placeholder="Search by name">
        <button class="button is-primary"><i class="fas fa-search"></i></button>`;
        element.appendChild(searchBar);
    }
}