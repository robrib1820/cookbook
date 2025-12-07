const API_KEY = import.meta.env.VITE_SPOON_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export default class SpoonacularAPI {
  async searchRecipes(query) {
    const url = `${BASE_URL}/recipes/complexSearch?query=${query}&number=12&apiKey=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  }

  async getRecipeDetails(id) {
    const url = `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`;
    const res = await fetch(url);
    return res.json();
  }

  async getNutrition(id) {
    const url = `${BASE_URL}/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`;
    const res = await fetch(url);
    return res.json();
  }
}


