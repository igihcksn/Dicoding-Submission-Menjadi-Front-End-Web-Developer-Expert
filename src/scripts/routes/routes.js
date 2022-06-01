import MainPage from '../view/pages/index';
import DetailsPage from '../view/pages/detail';
import FavoritPage from '../view/pages/favorit';

const routes = {
  '/': MainPage,
  '/details/:id': DetailsPage,
  '/favorit': FavoritPage,
};

export default routes;
