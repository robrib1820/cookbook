import{l as a,g as s}from"./utils-GR-B7Xcb.js";import{S as c}from"./SpoonacularAPI-DruwqnGe.js";a();const r=new c,o=s("id");let i=null;l();async function l(){if(!o)return;i=await r.getRecipeDetails(o),d(i),m(i.extendedIngredients),p(i.analyzedInstructions);const e=await r.getNutrition(o);g(e);const t=await u(o);f(t);const n=document.getElementById("save-btn");n&&n.addEventListener("click",()=>y(i))}function d(e){const t=document.getElementById("recipe-details");t.innerHTML=`
    <h1>${e.title}</h1>
    <img src="${e.image}" alt="${e.title}">
    <p>${e.summary}</p>
  `}function m(e){const t=document.getElementById("ingredients-list");t.innerHTML=e.map(n=>`<li>${n.original}</li>`).join("")}function p(e){const t=document.getElementById("instructions-list");if(!e||e.length===0){t.innerHTML="<p>No instructions available.</p>";return}t.innerHTML=e[0].steps.map(n=>`<li>${n.step}</li>`).join("")}function g(e){const t=document.getElementById("nutrition-box");t.innerHTML=`
    <p><strong>Calories:</strong> ${e.calories}</p>
    <p><strong>Carbs:</strong> ${e.carbs}</p>
    <p><strong>Protein:</strong> ${e.protein}</p>
    <p><strong>Fat:</strong> ${e.fat}</p>
  `}async function u(e){const t=`https://api.spoonacular.com/recipes/${e}/similar?number=4&apiKey=ec2d394aa71c41e2a37c0a1e3fff2744`;return(await fetch(t)).json()}function f(e){const t=document.getElementById("similar-recipes");t.innerHTML=e.map(n=>`
    <li class="recipe-card">
      <a href="/cookbook/recipe.html?id=${n.id}">
        <h3>${n.title}</h3>
        <p>${n.readyInMinutes} min</p>
      </a>
    </li>
  `).join("")}function y(e){let t=JSON.parse(localStorage.getItem("my-cookbook"))||[];t.some(n=>n.id===e.id)?alert("This recipe is already in your cookbook."):(t.push({id:e.id,title:e.title,image:e.image}),localStorage.setItem("my-cookbook",JSON.stringify(t)),alert("Recipe saved!"))}
