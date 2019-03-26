export default class SearchBar {
    constructor(element) {
        this.renderSearchBar(element);
    }


    /**
    * Render the searchbar and the icon filter
    @param {HTMLElement} element === the previous html element which is render.
    */
    renderSearchBar(element) {
        const searchBar = document.createElement("div");
        searchBar.setAttribute('class', 'col-xs-3 search--bar');
        searchBar.innerHTML = `
        <input type="text" id="myInput" size="80" placeholder="Search by name">
        <button class="button is-primary"><i class="fas fa-search"></i></button>`;
        element.appendChild(searchBar);
        this.renderFilters(element);
    }

    renderFilters(element) {
        //const filterBtn = document.querySelector('.filter--btn');
        const filters = document.createElement("div");
        filters.setAttribute('class', 'filters');

       // filterBtn.addEventListener('click', () => {
            filters.innerHTML = `
            <h3>Filters:</h3>
                <label class="container">Trainers
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                
                <label class="container">Types
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                
                <label class="container">Hp
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                <label class="container">Rarity
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                <label class="container">Retreat cost
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                <label class="container">Weakness
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                <label class="container">Resistance
                <input type="checkbox">
                <span class="checkmark"></span>
                </label>
                
                <label class="container">EvolvesFrom
                <input type="checkbox">
                <span class="checkmark"></span>
                </label> `;
       // })
        element.appendChild(filters)
    }
}