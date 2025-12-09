import SpoonacularAPI from "./api/SpoonacularAPI.mjs";
import { loadHeaderFooter } from "./public/js/utils.js";

loadHeaderFooter();

const api = new SpoonacularAPI();

// garantee that the button exists
const btn = document.getElementById("search-btn");
if (btn) {
  btn.addEventListener("click", search);
}

async function search() {
  const query = document.getElementById("search-input").value.trim();
  if (!query) return;

  const results = await api.searchRecipes(query);
  renderResults(results);
}

function renderResults(list) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  if (!list || list.length === 0) {
    container.innerHTML = "<p>No recipes found or API unavailable.</p>";
    return;
  }

  const template = document.querySelector("#recipe-card-template");

  list.forEach(recipe => {
    const clone = template.content.cloneNode(true);
    const link = clone.querySelector("a");
    const img = clone.querySelector("img");
    const title = clone.querySelector(".recipe-title");

    link.href += recipe.id;
    img.src = recipe.image;
    title.textContent = recipe.title;

    container.appendChild(clone);
  });
}



