import { FindLogo } from '../../public/images';

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="nav__logo">
                <img src="${FindLogo}" alt="Slamet Logo" />
            </div>
            <a id="menu" class="nav__burger" href="#" aria-label="menu burger">☰</a>
            <ul class="nav__list">
                <li class="nav__item"><a href="/">Home</a></li>
                <li class="nav__item"><a href="#">Favorite</a></li>
                <li class="nav__item"><a href="https://github.com/igihcksn">About Us</a></li>
            </ul>
        `;

    const navbar = document.querySelector('#menu');
    const navbarList = document.querySelector('.nav__list');
    const drawer = document.querySelector('#drawer');
    const main = document.querySelector('main');
    const header = document.querySelector('header');

    navbar.addEventListener('click', (e) => {
      navbarList.classList.toggle('open');
      e.stopPropagation();
    });

    drawer.addEventListener('click', () => {
      navbarList.classList.remove('open');
    });

    main.addEventListener('click', () => {
      navbarList.classList.remove('open');
    });

    header.addEventListener('click', () => {
      navbarList.classList.remove('open');
    });
  }
}

customElements.define('sla-navbar', Navbar);

export default Navbar;
