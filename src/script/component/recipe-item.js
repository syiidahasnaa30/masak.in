class RecipeItem extends HTMLElement {
  set recipe(recipeItem) {
    this._recipe = recipeItem;
    this.render();
  }

  render() {
    let indexOfComa = this._recipe.title.indexOf(",");
    let title;
    if (indexOfComa == -1) {
      title = this._recipe.title;
    } else {
      title = this._recipe.title.substring(0, indexOfComa);
    }
    this.innerHTML = `
        <div class="card menu-item" >
            <img class="card-img-top" alt="gambar" src="${
              this._recipe.images[0]
            }" style="width:100%">
            <div class="card-body">     
                <h5>${title.replace("Resep", "")}</h5>
                <p><i class="fa-solid fa-clock"></i> ${
                  this._recipe.time
                } penyajian</p>
                <p><i class="fa-solid fa-bell-concierge"></i> ${
                  this._recipe.servings
                }</p>
                <p>${this._recipe.title.toLowerCase()}</p>
                <a style=" color: #ff971d; font-weight: 500; font-size:18;">Selengkapnya</a>
            </div>
        </div>`;
  }
}

customElements.define("recipe-item", RecipeItem);
