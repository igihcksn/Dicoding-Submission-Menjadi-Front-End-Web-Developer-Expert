const renderRestoCardItems = ({ restaurant }) => `
<div class="content__card" tabindex="0">
    <div class="content__thumbnail">
        <span class="city">${restaurant.city}</span>
        <img src="${restaurant.pictureId}" alt="${restaurant.name}" loading="lazy" />
    </div>
    <div class="content__box">
        <p class="content__box___rating">Rating: ${restaurant.rating}</p>
        <h3>${restaurant.name}</h3>
        <p class="content__box___description">${restaurant.description.substring(0, 100)}</p>
    </div>
</div>
`;

// eslint-disable-next-line import/prefer-default-export
export { renderRestoCardItems };
