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
        const filters = document.createElement("div");
        filterBtn.addEventListener('click', () => {
            filters.setAttribute('class', 'filters');
            filters.innerHTML = `
            <form>
            <div class="form-row align-items-center">
                <div class="col-auto my-1">
                    <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Choose...</option>
                        <option value="1">Types</option>
                        <option value="2">Hp</option>
                        <option value="3">Rarity</option>
                        <option value="4">Retreat cost</option>
                        <option value="5">Weakness</option>
                        <option value="6">Resistance</option>
                        <option value="7">EvolvesFrom</option>
                    </select>
                </div>
            </div>`;
            filterBtn.appendChild(filters)
        })

        filterBtn.removeEventListener('click', () => {
            filters.setAttribute('class', 'filters');
            filters.innerHTML = `
            <form>
            <div class="form-row align-items-center">
                <div class="col-auto my-1">
                    <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Choose...</option>
                        <option value="1">Types</option>
                        <option value="2">Hp</option>
                        <option value="3">Rarity</option>
                        <option value="4">Retreat cost</option>
                        <option value="5">Weakness</option>
                        <option value="6">Resistance</option>
                        <option value="7">EvolvesFrom</option>
                    </select>
                </div>
            </div>`;
        })
    }
}