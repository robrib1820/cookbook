import{g as i,l}from"./utils-BbzRrZhm.js";const n=i("user");n||(window.location.href="/login.html");l();r();function r(){const t=JSON.parse(localStorage.getItem("my-cookbook"))||[],e=document.getElementById("cookbook-list");if(e){if(t.length===0){e.innerHTML="<p>You have no saved recipes.</p>";return}e.innerHTML=t.map(o=>`
      <li class="cookbook-card">
        <a href="recipe.html?id=${o.id}">
          <img src="${o.image}" alt="${o.title}">
          <h3>${o.title}</h3>
        </a>
        <button class="remove-btn" data-id="${o.id}">Remove</button>
      </li>
    `).join(""),document.querySelectorAll(".remove-btn").forEach(o=>{o.addEventListener("click",c)})}}function c(t){const e=Number(t.target.dataset.id);let o=JSON.parse(localStorage.getItem("my-cookbook"))||[];o=o.filter(a=>a.id!==e),localStorage.setItem("my-cookbook",JSON.stringify(o)),r()}
