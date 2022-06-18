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

const renderRestoResponsivePictures = ({ pictureId }) => `
    <picture>
        <source media="(min-width:465px) srcset="${CONFIG.BASE_IMAGE_URL}/smal/${pictureId}">
        <source media="(min-width:650px)" srcset="${CONFIG.BASE_IMAGE_URL}/medium/${pictureId}">
        <img src="${CONFIG.BASE_IMAGE_URL}/large/${pictureId}" alt="${name}" loading="lazy">
    </picture>
`;

const renderRestoCardItems = ({ restaurant }) => `
    <div class="content__card" tabindex="0">
        <div class="content__thumbnail">
            <span class="city">${restaurant.city}</span>
            ${renderRestoResponsivePictures({ pictureId: restaurant.pictureId })}
        </div>
        <div class="content__box">
            <p class="content__box___rating">Rating: ${restaurant.rating}</p>
            <a href="#/details/${restaurant.id}"><h3>${restaurant.name}</h3></a>
            <p class="content__box___description">${restaurant.description.substring(0, 100)}</p>
        </div>
    </div>
`;

const renderRestoCardNoItems = () => `
    <div class="content__card no__items" tabindex="0">
        <p>Ooops, Item not found</p>
    </div>
`;

const renderRestoDetail = ({ restaurant }) => `
    <h2>${restaurant.name}</h2>
    <div class="content__card-detail">
        ${renderRestoResponsivePictures({ pictureId: restaurant.pictureId })}
        <div class="content__card-detail-overview">
            <p><strong>Lokasi:</strong> ${restaurant.city}</p>
            <p><strong>Rating:</strong> ${restaurant.rating}</p>
            <p><strong>Category:</strong> ${restaurant.categories.map((category) => category.name)}</p>
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

export {
  renderRestoCardItems,
  renderRestoCardNoItems,
  renderRestoDetail,
  renderRestoSimpleList,
};
