const API_KEY = import.meta.env.VITE_SPOON_API_KEY;
const BASE_URL = import.meta.env.VITE_API_URL;

export default class SpoonacularAPI {

  async searchRecipes(query) {
    //This one will retrieve an array of simple objects with the data
    const url = `${BASE_URL}/recipes/complexSearch?query=${query}&number=12&apiKey=${API_KEY}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("API searchRecipes error");
      const data = await res.json();
      return data.results;
    } catch (err) {
      console.error("searchRecipes failed:", err);
      return [];
    }
  }

  async getRecipeDetails(id) {
    //This one will return all of the details of a recipe, like ingredients, instructions etc..
    const url = `${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("API getRecipeDetails error");
      return await res.json();
    } catch (err) {
      console.error("getRecipeDetails failed:", err);
      return null;
    }
  }

  async getNutrition(id) {
    //This one will return MACRO information like calories, carbs, protein etc..
    const url = `${BASE_URL}/recipes/${id}/nutritionWidget.json?apiKey=${API_KEY}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("API getNutrition error");
      return await res.json();
    } catch (err) {
      console.error("getNutrition failed:", err);
      return null;
    }
  }
}



