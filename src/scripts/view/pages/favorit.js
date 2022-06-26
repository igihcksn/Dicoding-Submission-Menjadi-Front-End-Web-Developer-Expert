import { renderLoadingInfo, renderRestoCardItems, renderRestoCardNoItems } from '../../../templates/template-creator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const FavoritPage = {
  async render() {
    return `
      <h2>Your Favorite Restaurant</h2>
      <sla-content></sla-content>
    `;
  },

  async afterRender() {
    const contentContainer = document.querySelector('#content');
    const loadingContainer = document.querySelector('#loading');
    loadingContainer.innerHTML = renderLoadingInfo();
    const resto = await FavoriteRestoIdb.getAllResto();
    loadingContainer.remove();
    if (resto && resto.length > 0) {
      resto.forEach((restaurant) => {
        contentContainer.innerHTML += renderRestoCardItems({ restaurant });
      });
    } else {
      contentContainer.innerHTML += renderRestoCardNoItems();
    }
  },
};

export default FavoritPage;
