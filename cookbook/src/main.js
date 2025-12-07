import SpoonacularAPI from "./api/SpoonacularAPI.mjs";
import { loadHeaderFooter } from "./js/utils.js";

loadHeaderFooter();
const api = new SpoonacularAPI();

const btn = document.getElementById("search-btn");
if (btn) btn.addEventListener("click", search);

async function search() {
  const query = document.getElementById("search-input").value;
  const results = await api.searchRecipes(query);
  renderResults(results);
}

function renderResults(list) {
  const container = document.getElementById("results");
  const template = document.querySelector("#recipe-card-template");

  container.innerHTML = "";

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

