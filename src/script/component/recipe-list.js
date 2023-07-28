import "./recipe-item.js";
class RecipeList extends HTMLElement {
  set recipes(allrecipes) {
    this._recipes = allrecipes;
    this.render();
  }
  render() {
    this.innerHTML = "";
    this._recipes.forEach((recipe) => {
      const recipeItemElement = document.createElement("recipe-item");
      recipeItemElement.recipe = recipe;
      recipeItemElement.className = "col-lg-3 col-md-4 col-sm-6";
      this.appendChild(recipeItemElement);
    });
  }
  renderError(message) {
    this.innerHTML = "";
    this.innerHTML += `<h2 class="placeholder">${message} </h2>`;
  }
}
customElements.define("recipe-list", RecipeList);
