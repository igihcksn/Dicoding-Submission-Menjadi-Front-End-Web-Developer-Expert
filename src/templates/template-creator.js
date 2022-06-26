import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../scripts/globals/config';

const renderRestoSimpleList = ({ listName }) => `<li>${listName}</li>`;

const renderRestoDetailReviews = ({ review }) => `
    <div class="content__card">
        <div class="content__card-rounded"></div>
        <div class="content__card-review">
            <p>Name: ${review.name}</p>
            <p>Detail: ${review.review}</p>
            <p>Date: ${review.date}</p>
        </div>
    </div>
`;

const renderRestoResponsivePictures = ({ restaurant }) => `
    <picture>
        <source media="(min-width:465px) data-src="${CONFIG.BASE_IMAGE_URL}/smal/${restaurant.pictureId}">
        <source media="(min-width:650px)" data-src="${CONFIG.BASE_IMAGE_URL}/medium/${restaurant.pictureId}">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}" alt="${restaurant.name}" loading="lazy">
    </picture>
`;

const renderRestoCardItems = ({ restaurant }) => `
    <div class="content__card" tabindex="0">
        <div class="content__thumbnail">
            <span class="city">${restaurant.city}</span>
            ${renderRestoResponsivePictures({ restaurant })}
        </div>
        <div class="content__box">
            <p class="content__box___rating">Rating: ${restaurant.rating}</p>
            <a href="#/details/${restaurant.id}">
                <h3>${restaurant.name}</h3>
            </a>
            <p class="content__box___description">${restaurant.description.substring(0, 100)}</p>
        </div>
    </div>
`;

const renderRestoCardNoItems = () => `
    <div class="no__items" tabindex="0">
        <p>Ooops, Item not found</p>
    </div>
`;

const renderRestoDetail = ({ restaurant }) => `
    <h2>${restaurant.name}</h2>
    <div class="content__card-detail">
        ${renderRestoResponsivePictures({ restaurant })}
        <div class="content__card-detail-overview">
            <p><strong>Location:</strong> <i class="fa fa-location-arrow" aria-hidden="true"></i> ${restaurant.city}</p>
            <p><strong>Rating:</strong> <i class="fa fa-star" aria-hidden="true"></i> ${restaurant.rating}</p>
            <p><strong>Categories:</strong> ${restaurant.categories.map((category) => category.name)}</p>
            <p><strong>Adress:</strong> <i class="fa fa-map" aria-hidden="true"></i> ${restaurant.address}</p>
            <p class="content__card-detail-overview_description">${restaurant.description}</p>
            <hr/>
            <h3>List Menu</h3>
            <hr/>
            <div class="content__card-detail-overview_menus">
                <div class="content__card-detail-overview_menus-foods">
                    <h4>Makanan</h4>
                    <ul>
                        ${restaurant.menus.foods.map((food) => renderRestoSimpleList({ listName: food.name })).join('')}
                    </ul>
                </div>
                <div class="content__card-detail-overview_menus-drinks">
                    <h4>Minuman</h4>
                    <ul>
                        ${restaurant.menus.drinks.map((drink) => renderRestoSimpleList({ listName: drink.name })).join('')}
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
    <h3>Our Customer Reviews</h3>
    <div class="content__card-detail-reviews">
        ${restaurant.customerReviews.map((review) => renderRestoDetailReviews({ review })).join('')}
    </div>
`;

const renderButtonAddToFavourite = () => `
    <button aria-label="add resto to favorite" id="addToFavorite" class="add">
        <i class="fa fa-heart-o" aria-hidden="true"></i> Add to Favorite
    </button>
`;

const renderButtonRemoveFromFavourite = () => `
    <button aria-label="remove resto to favorite" id="removeFromFavorite" class="add">
        <i class="fa fa-trash-o" aria-hidden="true"></i> Remove from Favorite
    </button>
`;

const renderLoadingInfo = () => 'Please wait... <i class="fa fa-spinner fa-pulse"></i>';

export {
  renderRestoCardItems,
  renderRestoCardNoItems,
  renderRestoDetail,
  renderRestoSimpleList,
  renderButtonAddToFavourite,
  renderButtonRemoveFromFavourite,
  renderLoadingInfo,
};
