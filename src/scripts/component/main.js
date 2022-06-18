class Main extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <div id="loading" class="loading__wrapper">
      </div>
      <div id="content" class="content__wrapper">
      </div>
    `;
  }
}

customElements.define('sla-content', Main);

export default Main;
