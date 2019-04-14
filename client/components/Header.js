/**
 * Define the Header component.
 * @param {HTMLElement} root The HTML element to render the `Header` component.
 */
function Header(root) {
    this.root = root;
    this.render(this.root);
}

Header.prototype.render = function (element) {
    const header = document.createElement("header");
    header.setAttribute("class", "container");
    header.innerHTML = `
        <div class="row">
            <div class="col-12">
                <h1 class="display-4">Pokedex !</h1>
                <hr/>
            </div>
        </div>`;
        
    element.appendChild(header);
}

export default Header;