import { renderLoadingInfo, renderRestoCardItems, renderRestoCardNoItems } from '../../../templates/template-creator';
import RestoDbSource from '../../data/resto-source';

const MainPage = {
  async render() {
    return `
      <h2>Explore Restaurant</h2>
      <sla-content></sla-content>
    `;
  },

  async afterRender() {
    const contentContainer = document.querySelector('#content');
    const loadingContainer = document.querySelector('#loading');
    loadingContainer.innerHTML = renderLoadingInfo();
    const resto = await RestoDbSource.listResto();
    loadingContainer.remove();
    if (resto && resto.restaurants) {
      resto.restaurants.forEach((restaurant) => {
        contentContainer.innerHTML += renderRestoCardItems({ restaurant });
      });
    } else {
      contentContainer.innerHTML += renderRestoCardNoItems();
    }
  },
};

export default MainPage;
