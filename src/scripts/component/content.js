import BaseData from '../data/DATA.json';
import { renderRestoCardItems } from '../../templates/template-creator';

class Content extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <h2>Explore Restaurant</h2>
            <div id="content" class="content__wrapper">
            </div>
        `;

    const contentContainer = document.querySelector('#content');
    BaseData.restaurants.forEach((restaurant) => {
      contentContainer.innerHTML += renderRestoCardItems({ restaurant });
    });
  }
}

customElements.define('sla-content', Content);

export default Content;
