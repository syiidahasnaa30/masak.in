import axios from "axios";
const main = () => {
  const baseUrl = "https://api-food-recipe.herokuapp.com";

  const getRecipes = () => {
    axios
      .get(`${baseUrl}/recipe`)
      .then((response) => {
        console.log(response.data);
        renderAllRecipe(response.data.data);
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };
  const searchRecipeByKeyword = (keyword) => {
    axios
      .get(`${baseUrl}/search?q=${keyword}`)
      .then((response) => {
        console.log(response.data);
        renderAllRecipe(response.data.data);
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };
  // Render function
  const renderAllRecipe = (allrecipe) => {
    const menulist = document.querySelector("recipe-list");
    menulist.recipes = allrecipe;
    console.log(menulist.recipes);
  };
  const showResponseMessage = (message = "Check Your Internet Connection") => {
    alert(message);
  };
  document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("inputSearch");
    const searchButton = document.getElementById("searchButton");

    searchButton.addEventListener("click", () => {
      const keyword = searchInput.value;
      if (keyword == "") {
        getRecipes();
      } else {
        searchRecipeByKeyword(keyword);
      }
    });
    if (searchInput.value == "") {
      getRecipes();
    }
  });
};
export default main;
