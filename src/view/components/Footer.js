export default class Footer {
    constructor(element) {
        this.renderFooter(element);
    }

    renderFooter(element) {
        const footer = document.createElement('footer');
        footer.innerHTML = `
        <div class="footer">
            <div class="footer-links">
                <a href="#"><i class="fab fa-github"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
            </div>
                <div class="footer-copyright">
                    This footer is made with <i class="fas fa-heart"></i> by Kévin
                </div>
        </div>`;
        element.appendChild(footer);
    }
}