/**
 * Define the projects component who render a list of projects.
 * @param {HTMLElement} root The HTML element to render the component.
 */
function Projects(root, data) {
    this.root = root;
    this.projectsData = data
    this.render(this.root, this.projectsData);
}

Projects.prototype.render = function(element, data = []) {
    const section = document.createElement("section");
    section.setAttribute("class", "container mt-3");

    section.innerHTML = `
        <div class="row">
            <div class="col-6">
                <h2>Projects:</h2>
                <ul class="list-group"></ul>
            </div>
        </div>`;
    
    element.appendChild(section);
    
    data.forEach(el => {
        const li = document.createElement("li");
        li.setAttribute("class", "list-group-item mb-3");

        li.innerHTML = `<a href="${el.link}">${el.content}</a> - <small>${el.description}</small>`;

        document.querySelector(".list-group").appendChild(li);
    })
}

export default Projects;