import "./styles/login.css";
import { loadHeaderFooter, setLocalStorage } from "./utils.js";

loadHeaderFooter();

const form = document.getElementById("login-form");
const errorMsg = document.getElementById("login-error");

// usuário fake
const USER = {
  username: "admin",
  password: "123",
};

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === USER.username && password === USER.password) {
      setLocalStorage("user", { username });
      window.location.href = "/index.html";
    } else {
      errorMsg.textContent = "Invalid username or password.";
    }
  });
}


