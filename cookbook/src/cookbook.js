import { loadHeaderFooter, getLocalStorage } from "./utils.js";

loadHeaderFooter();

const user = getLocalStorage("user");
if (!user) window.location.href = "/login.html";

loadCookbook();

function loadCookbook() {
  const list = JSON.parse(localStorage.getItem("my-cookbook")) || [];
  const container = document.getElementById("cookbook-list");

  if (list.length === 0) {
    container.innerHTML = "<p>You have no saved recipes.</p>";
    return;
  }

  container.innerHTML = list
    .map(
      item => `
      <li class="cookbook-card">
        <a href="/recipe.html?id=${item.id}">
          <img src="${item.image}">
          <h3>${item.title}</h3>
        </a>
        <button class="remove-btn" data-id="${item.id}">Remove</button>
      </li>
    `
    )
    .join("");

  document.querySelectorAll(".remove-btn").forEach(btn =>
    btn.addEventListener("click", event => {
      const id = Number(event.target.dataset.id);

      let list = JSON.parse(localStorage.getItem("my-cookbook")) || [];
      list = list.filter(item => item.id !== id);

      localStorage.setItem("my-cookbook", JSON.stringify(list));
      loadCookbook();
    })
  );
}

