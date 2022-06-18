import { renderButtonAddToFavourite, renderButtonRemoveFromFavourite } from '../../templates/template-creator';
import FavoriteRestoIdb from '../data/favorite-resto-idb';

const FavoriteButtonInitiator = {
  async init({ favoriteButtonContainer, resto }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;
    const isRestoExist = await this._isRestoExist(id);

    if (isRestoExist) {
      this._renderUnFavorite();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getRestoById(id);
    return !!resto;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = renderButtonAddToFavourite();

    const favoriteButton = document.querySelector('#addToFavorite');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.updateResto(this._resto);
      this._renderButton();
    });
  },

  _renderUnFavorite() {
    this._favoriteButtonContainer.innerHTML = renderButtonRemoveFromFavourite();

    const favoriteButton = document.querySelector('#removeFromFavorite');
    favoriteButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonInitiator;
