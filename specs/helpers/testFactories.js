import FavoriteRestoIdb from "../../src/scripts/data/favorite-resto-idb"
import FavoriteButtonInitiator from "../../src/scripts/utils/favorite-button-initiator"

const createLikeButtonPresenterWithResto = async (resto) => {
    await FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        favoriteResto: FavoriteRestoIdb,
        resto,
    });
};

export { createLikeButtonPresenterWithResto };