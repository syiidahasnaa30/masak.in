class FlyerLeft extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <span>HIDANGKAN MASAKAN TERBAIKMU</span>
      <p>Mulai temukan resep makanan favoritmu dan sajikan dengan hidangan di ruang makanmu</p>
      `;
  }
}
customElements.define("flyer-left", FlyerLeft);
