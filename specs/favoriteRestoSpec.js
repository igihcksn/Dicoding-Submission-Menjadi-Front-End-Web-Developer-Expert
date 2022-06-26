import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favoriting A Resto', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addFavoriteButtonContainer();
  });

  it('Favorite button should appear at first time', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    const component = document.querySelector('[aria-label="add resto to favorite"]');
    expect(component).toBeTruthy();
  });

  it('Remove Favorite button should not appear at first time', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    const component = document.querySelector('[aria-label="remove resto to favorite"]');
    expect(component).toBeFalsy();
  });

  it('Favotite button able to click', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('#addToFavorite').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getRestoById(1);

    expect(resto).toEqual({ id: 1 });

    FavoriteRestoIdb.deleteResto(1);
  });

  it('Favotite button not able to add resto when its already add to list favorite', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.updateResto(1);

    document.querySelector('#addToFavorite').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getAllResto();

    expect(resto).toEqual([{ id: 1 }]);

    FavoriteRestoIdb.deleteResto(1);
  });

  it('Cannot add resto to favorite when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ });

    await FavoriteRestoIdb.updateResto(1);

    document.querySelector('#addToFavorite').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getAllResto();

    expect(resto).toEqual([]);
  });
});
