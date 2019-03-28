export default class Introduction {
    constructor(element) {
        this.renderIntroText(element);
    }
/**
 * Render the introduction text which is present the app.
 @param {HTMLElement} element === the previous html element which is render.
 */
    renderIntroText(element) {
        const introText = document.createElement("section");
        introText.setAttribute("class", "container-fluid introduction mt-4");
        introText.innerHTML = `
        <div class="row">
            <div class="col-8">
                <div class="intro--text">
                    <p> Welcome on PokéCards. You can retrieve all cards about your favorite Pokémon. If you want to find all of them, you can search him by his name and if you want a special one, use the filters. ;) </p>
                    <p>GOTTA CATCH ALL OF THEM !!!</p>
                </div>
            </div>
        </div>`;
        element.appendChild(introText);
    }
}