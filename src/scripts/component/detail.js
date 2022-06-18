class Detail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = `
      <div id="loading" class="loading__wrapper">
      </div>
      <div id="content" class="content__wrapper"></div>
      <div id="favoriteButtonContainer"></div>
    `;
  }
}

customElements.define('sla-detail', Detail);

export default Detail;
