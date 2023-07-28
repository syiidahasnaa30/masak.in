class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    
    <input  id="inputSearch" placeholder="Masukkan kata kunci makanan yang anda cari">
    <button id="searchButton">Cari Resep</button>
    `;
  }
}
customElements.define("search-container", SearchBar);
