import { renderRestoDetail } from '../../templates/template-creator';
import API_ENDPOINT from '../globals/api-endpoiint';
import UrlParser from '../routes/url-parser';

class Detail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <div id="content" class="content__wrapper">
      </div>
    `;

    const contentContainer = document.querySelector('#content');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await fetch(API_ENDPOINT.DETAIL(url.id)).then((res) => res.json());
    if (resto && resto.restaurant) {
      contentContainer.innerHTML += renderRestoDetail({ restaurant: resto.restaurant });
    } else {
      window.history.back();
    }
  }
}

customElements.define('sla-detail', Detail);

export default Detail;
