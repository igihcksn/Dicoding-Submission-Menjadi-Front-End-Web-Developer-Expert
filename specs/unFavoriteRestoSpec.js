import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';
import * as TestFactories from './helpers/testFactories';

describe('UnFavoriting A Resto', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestoIdb.updateResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto(1);
  });

  it('Remove Favorite button should appear when resto has been favorited', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    const component = document.querySelector('[aria-label="remove resto to favorite"]');
    expect(component).toBeTruthy();
  });

  it('Favorite button should not appear when resto has been favorited', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    const component = document.querySelector('[aria-label="add resto to favorite"]');
    expect(component).toBeFalsy();
  });

  it('Remove Favorite button able to click for removing from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="remove resto to favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });

  it('Should not have error when remove favorite resto that not exist in list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

    await FavoriteRestoIdb.deleteResto(1);

    document.querySelector('[aria-label="remove resto to favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllResto()).toEqual([]);
  });
});
