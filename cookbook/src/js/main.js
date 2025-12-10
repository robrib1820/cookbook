import "../styles/main.css";
import SpoonacularAPI from "../api/SpoonacularAPI.mjs";
import { loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const api = new SpoonacularAPI();
const btn = document.getElementById("search-btn");

if (btn) {
  btn.addEventListener("click", search);
}

async function search() {
  const input = document.getElementById("search-input");
  const query = input.value.trim();
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

  const template = document.getElementById("recipe-card-template");

  list.forEach((recipe) => {
    const clone = template.content.cloneNode(true);
    const link = clone.querySelector("a");
    const img = clone.querySelector("img");
    const title = clone.querySelector(".recipe-title");

    link.href = `/src/pages/recipe.html?id=${recipe.id}`;
    img.src = recipe.image;
    img.alt = recipe.title;
    title.textContent = recipe.title;

    container.appendChild(clone);
    container.lastElementChild.classList.add("fade-in");
  });
}

window.addEventListener("scroll", () => {
  const header = document.getElementById("site-header");
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});





