import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class Main {
  constructor({ content }) {
    this._content = content;
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innetHTML = await page.render();
    await page.afterRender();
  }
}

export default Main;
