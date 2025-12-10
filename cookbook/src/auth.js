import { loadHeaderFooter, setLocalStorage } from "./utils.js";

loadHeaderFooter();

const USER = { username: "admin", password: "123" };

document.getElementById("login-form").addEventListener("submit", e => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === USER.username && password === USER.password) {
    setLocalStorage("user", { username });
    window.location.href = "/index.html";
  } else {
    document.getElementById("login-error").textContent =
      "Invalid username or password.";
  }
});

