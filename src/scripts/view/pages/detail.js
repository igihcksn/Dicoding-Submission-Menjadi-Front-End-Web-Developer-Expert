import { renderButtonAddToFavourite, renderRestoDetail } from '../../../templates/template-creator';
import RestoDbSource from '../../data/resto-source';
import UrlParser from '../../routes/url-parser';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const DetailsPage = {
  async render() {
    return '<sla-detail></sla-detail>';
  },

  async afterRender() {
    const contentContainer = document.querySelector('#content');
    const buttonFavorite = document.querySelector('#favoriteButtonContainer');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    if (resto && resto.restaurant) {
      contentContainer.innerHTML += renderRestoDetail({ restaurant: resto.restaurant });
      FavoriteButtonInitiator.init({
        favoriteButtonContainer: buttonFavorite,
        resto: {
          id: resto.restaurant.id,
          name: resto.restaurant.name,
          description: resto.restaurant.description,
          city: resto.restaurant.city,
          address: resto.restaurant.address,
          pictureId: resto.restaurant.pictureId,
          categories: resto.restaurant.categories,
          menus: resto.restaurant.menus,
          rating: resto.restaurant.rating,
          customerReviews: resto.restaurant.customerReviews,
        },
      });
      buttonFavorite.innerHTML += renderButtonAddToFavourite();
    } else {
      window.history.back();
    }
  },
};

export default DetailsPage;
