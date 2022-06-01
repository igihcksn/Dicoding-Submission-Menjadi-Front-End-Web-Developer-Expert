class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<p>Copyright © 2022 - Find Resto</p>';
  }
}

customElements.define('sla-footer', Footer);

export default Footer;
