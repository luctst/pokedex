export default class RenderFilters {
    constructor(element) {
        this.filtersRender(element);
    }

    /**
    * Render the searchbar and the icon filter
    * @param {HTMLElement} element === the previous html element which is render.
    */
    filtersRender(element) {
        const searchBar = document.createElement("section");
        searchBar.setAttribute('class', 'container-fluid search--bar');

        searchBar.innerHTML = `
        <div class="row">
            <div class="col-8">
                <form>
                    <div class="form-group">
                        <input id="myInput" placeholder="Search by name" class="form-control">
                    </div>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-3 mb-5">
                                <label>Type</label>
                                <select class="form-control type" name="types">
                                    <option selected>Default</option>
                                    <option>Fire</option>
                                    <option>Water</option>
                                    <option>Fighting</option>
                                    <option>Psychic</option>
                                    <option>Dragon</option>
                                    <option>Colorless</option>
                                    <option>Fairy</option>
                                    <option>Grass</option>
                                    <option>Metal</option>
                                    <option>Lightning</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label>Rarity</label>
                                <select class="form-control rarity" name="rarity">
                                    <option selected>Default</option>
                                    <option>Rare</option>
                                    <option>Common</option>
                                    <option>Holo</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label>Supertype</label>
                                <select class="form-control rarity" name="supertype">
                                    <option selected>Default</option>
                                    <option>Trainer</option>
                                    <option>Pokemon</option>
                                    <option>Energy</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label>Hp</label>
                                <select class="form-control rarity" name="hp">
                                    <option selected>Default</option>
                                    <option>10</option>
                                    <option>20</option>
                                    <option>30</option>
                                    <option>40</option>
                                    <option>50</option>
                                    <option>60</option>
                                    <option>70</option>
                                    <option>80</option>
                                    <option>90</option>
                                    <option>100</option>
                                    <option>110</option>
                                    <option>120</option>
                                    <option>130</option>
                                    <option>140</option>
                                    <option>150</option>
                                    <option>160</option>
                                    <option>170</option>
                                    <option>180</option>
                                    <option>190</option>
                                    <option>200</option>
                                    <option>210</option>
                                    <option>220</option>
                                    <option>230</option>
                                    <option>240</option>
                                    <option>250</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label>RetreatCost</label>
                                <select class="form-control rarity" name="retreatCost">
                                    <option selected>Default</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label>Weaknesses</label>
                                <select class="form-control rarity" name="weaknesses">
                                    <option selected>Default</option>
                                    <option>Fire</option>
                                    <option>Water</option>
                                    <option>Fighting</option>
                                    <option>Psychic</option>
                                    <option>Dragon</option>
                                    <option>Colorless</option>
                                    <option>Fairy</option>
                                    <option>Grass</option>
                                    <option>Metal</option>
                                    <option>Lightning</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <label>Resistances</label>
                                <select class="form-control rarity" name="resistances">
                                    <option selected>Default</option>
                                    <option>Fire</option>
                                    <option>Water</option>
                                    <option>Fighting</option>
                                    <option>Psychic</option>
                                    <option>Dragon</option>
                                    <option>Colorless</option>
                                    <option>Fairy</option>
                                    <option>Grass</option>
                                    <option>Metal</option>
                                    <option>Lightning</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>`;
        element.appendChild(searchBar);
    }
}