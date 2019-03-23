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
        <button class="button is-primary"><i class="fas fa-search"></i></button>
        <button class="filter--btn button is-primary"><i class="fas fa-sort-amount-down"></i></button>`;
        element.appendChild(searchBar);
        this.renderFilters();
    }
    
    renderFilters() {
        const filterBtn = document.querySelector('.filter--btn');
        filterBtn.addEventListener('click', () => {
            const filters = document.createElement("div");
            filters.setAttribute('class', 'filters');
            filters.innerHTML = `
            <ol>
                <a class="filter-link" href="#"><li>Types</li></a>   
                <a class="filter-link" href="#"><li>Hp</li></a>
                <a class="filter-link" href="#"><li>rarity</li></a>
                <a class="filter-link" href="#"><li>Retreat cost</li></a>
                <a class="filter-link" href="#"><li>Weakness</li></a>
                <a class="filter-link" href="#"><li>Resistance</li></a>
                <a class="filter-link" href="#"><li>EvolvesFrom</li></a>
            </ol>`;
            filterBtn.appendChild(filters)
            
        })
    }
}