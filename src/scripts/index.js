import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import './component';
import Main from './view/main';
import swRegister from './utils/sw-register';

const main = new Main({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  main.renderPage();
});

window.addEventListener('load', () => {
  main.renderPage();
  swRegister();
});
