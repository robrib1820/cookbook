import SpoonacularAPI from "../api/SpoonacularAPI.mjs";
import { getParam, loadHeaderFooter } from "./utils.js";

loadHeaderFooter();

const api = new SpoonacularAPI();
const id = getParam("id");

init();

async function init() {
  const recipe = await api.getRecipeDetails(id);

  document.getElementById("recipe-details").innerHTML = `
    <h1>${recipe.title}</h1>
    <img src="${recipe.image}">
    <p>${recipe.summary}</p>
  `;
}
