import SpoonacularAPI from "../api/SpoonacularAPI.mjs";
import { getParam, loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const api = new SpoonacularAPI();
const id = getParam("id");
let currentRecipe = null;

init();

async function init() {
  if (!id) return;

  currentRecipe = await api.getRecipeDetails(id);
  renderDetails(currentRecipe);

  renderIngredients(currentRecipe.extendedIngredients);

  renderInstructions(currentRecipe.analyzedInstructions);

  const nutrition = await api.getNutrition(id);
  renderNutrition(nutrition);

  const similar = await getSimilarRecipes(id);
  renderSimilar(similar);

  const saveBtn = document.getElementById("save-btn");
  if (saveBtn) {
    saveBtn.addEventListener("click", () => saveRecipe(currentRecipe));
  }
}

//This is to render the basic details on the page, title, image, and summary with other infos like ingredients, instructions of how to make the recipe and some nutrition as well.
function renderDetails(recipe) {
  const container = document.getElementById("recipe-details");

  container.innerHTML = `
    <h1>${recipe.title}</h1>
    <img src="${recipe.image}" alt="${recipe.title}">
    <p>${recipe.summary}</p>
  `;
}

function renderIngredients(ingredients) {
  const list = document.getElementById("ingredients-list");
  list.innerHTML = ingredients
    .map((item) => `<li>${item.original}</li>`)
    .join("");
}

function renderInstructions(instructions) {
  const list = document.getElementById("instructions-list");

  if (!instructions || instructions.length === 0) {
    list.innerHTML = "<p>No instructions available.</p>";
    return;
  }

  list.innerHTML = instructions[0].steps
    .map((step) => `<li>${step.step}</li>`)
    .join("");
}

function renderNutrition(nutrition) {
  const box = document.getElementById("nutrition-box");

  box.innerHTML = `
    <p><strong>Calories:</strong> ${nutrition.calories}</p>
    <p><strong>Carbs:</strong> ${nutrition.carbs}</p>
    <p><strong>Protein:</strong> ${nutrition.protein}</p>
    <p><strong>Fat:</strong> ${nutrition.fat}</p>
  `;
}

// This is a new endpoint to call similar recipes info
async function getSimilarRecipes(id) {
  const url = `${import.meta.env.VITE_API_URL}/recipes/${id}/similar?number=4&apiKey=${import.meta.env.VITE_SPOON_API_KEY}`;
  const res = await fetch(url);
  return res.json();
}

//To display the similar recipes info
function renderSimilar(list) {
  const container = document.getElementById("similar-recipes");
  container.innerHTML = list
    .map(
      (item) => `
    <li class="recipe-card">
      <a href="/cookbook/src/pages/recipe.html?id=${item.id}">
        <h3>${item.title}</h3>
        <p>${item.readyInMinutes} min</p>
      </a>
    </li>
  `
    )
    .join("");
}
//To save on my localStorage
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

