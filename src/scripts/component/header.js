class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="header__description">
                <h1>It's a Whole New Food Affair</h1>
                <p>Explore and discover great places to eat near you, from street food to modern gourmet delicacies. Get inspired with our curated collections and culinary recommendations, and cash in on our Eats Vouchers.</p>
            </div>
        `;
  }
}

customElements.define('sla-header', Header);

export default Header;
