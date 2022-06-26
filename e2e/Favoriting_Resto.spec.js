const assert = require('assert');

Feature('Favoriting Resto');

Scenario('Favorite item not found at first time', ({ I }) => {
  I.amOnPage('/');
  I.wait(3);
  I.click('Favorite');
  I.see('Ooops, Item not found', '.no__items');
});

Scenario('Favoriting one movie', async ({ I }) => {
  I.amOnPage('/');

  I.wait(3);

  I.seeElement('.content__box a');

  const firstFavoriteItems = locate('.content__box a').first();
  const firstFavoriteTitle = await I.grabTextFrom(firstFavoriteItems);
  I.click(firstFavoriteItems);

  I.seeElement('#addToFavorite');
  I.click('#addToFavorite');
  
  I.wait(1);
  I.click('Favorite');
  I.seeElement('.content__card');
  const favoritedRestoTitle = await I.grabTextFrom(firstFavoriteItems);

  assert.strictEqual(firstFavoriteTitle, favoritedRestoTitle);
});

Scenario('Remove resto after add to favorite one movie', async ({ I }) => {
  I.amOnPage('/');

  I.wait(3);

  I.seeElement('.content__box a');

  const firstFavoriteItems = locate('.content__box a').first();
  I.click(firstFavoriteItems);

  I.seeElement('#addToFavorite');
  I.click('#addToFavorite');
  
  I.wait(1);
  I.click('Favorite');
  I.seeElement('.content__card');
  const favoritedRestoTitle = await I.grabTextFrom(firstFavoriteItems);
  I.click(firstFavoriteItems);

  I.seeElement('#removeFromFavorite');
  I.click('#removeFromFavorite');
  
  I.wait(1);
  I.click('Favorite');

  I.see('Ooops, Item not found', '.no__items');
});
