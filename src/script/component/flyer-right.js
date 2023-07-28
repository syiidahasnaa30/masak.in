class FlyerRight extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `<img alt="Gambar makanan" src="https://th.bing.com/th/id/OIP.Gri0xJOEa-DifWgSTcIJZgHaE7?pid=ImgDet&w=474&h=315&rs=1">`;
  }
}
customElements.define("flyer-right", FlyerRight);
