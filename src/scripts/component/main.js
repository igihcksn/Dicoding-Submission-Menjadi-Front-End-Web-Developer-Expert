import { renderRestoCardItems, renderRestoCardNoItems } from '../../templates/template-creator';
import API_ENDPOINT from '../globals/api-endpoiint';

class Main extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <h2>Explore Restaurant</h2>
      <div id="content" class="content__wrapper">
      </div>
    `;

    const contentContainer = document.querySelector('#content');
    const resto = await fetch(API_ENDPOINT.LIST).then((res) => res.json());
    if (resto && resto.restaurants) {
      resto.restaurants.forEach((restaurant) => {
        contentContainer.innerHTML += renderRestoCardItems({ restaurant });
      });
    } else {
      contentContainer.innerHTML += renderRestoCardNoItems();
    }
  }
}

customElements.define('sla-content', Main);

export default Main;
