import SpoonacularAPI from "../api/SpoonacularAPI.mjs";
import { getParam, loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const api = new SpoonacularAPI();
const id = getParam("id");
let currentRecipe = null;

init();

async function init() {
  currentRecipe = await api.getRecipeDetails(id);

  // To render recipe details
  document.getElementById("recipe-details").innerHTML = `
    <h1>${currentRecipe.title}</h1>
    <img src="${currentRecipe.image}">
    <p>${currentRecipe.summary}</p>
  `;

  // Add event listener to save the button
  const saveBtn = document.getElementById("save-btn");

  if (saveBtn) {
    saveBtn.addEventListener("click", () => saveRecipe(currentRecipe));
  }
}

function saveRecipe(recipe) {
  let list = JSON.parse(localStorage.getItem("my-cookbook")) || [];

  if (!list.some(item => item.id === recipe.id)) {
    list.push({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image
    });

    localStorage.setItem("my-cookbook", JSON.stringify(list));
    alert("Recipe saved!");
  } else {
    alert("This recipe is already in your cookbook.");
  }
}


