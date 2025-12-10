import "./styles/recipe.css";
import SpoonacularAPI from "./api/SpoonacularAPI.mjs";
import { getParam, loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const api = new SpoonacularAPI();
const id = getParam("id");
let currentRecipe = null;

init();

async function init() {
  if (!id) return;

  currentRecipe = await api.getRecipeDetails(id);

  const container = document.getElementById("recipe-details");
  if (!container) return;

  container.innerHTML = `
    <h1>${currentRecipe.title}</h1>
    <img src="${currentRecipe.image}" alt="${currentRecipe.title}">
    <p>${currentRecipe.summary}</p>
  `;

  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => saveRecipe(currentRecipe));
  }
}

function saveRecipe(recipe) {
  let list = JSON.parse(localStorage.getItem("my-cookbook")) || [];

  if (!list.some((item) => item.id === recipe.id)) {
    list.push({
      id: recipe.id,
      title: recipe.title,
      image: recipe.image,
    });

    localStorage.setItem("my-cookbook", JSON.stringify(list));
    alert("Recipe saved!");
  } else {
    alert("This recipe is already in your cookbook.");
  }
}



