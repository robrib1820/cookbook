import { loadHeaderFooter, setLocalStorage } from "./utils.js";

loadHeaderFooter();

const form = document.getElementById("login-form");
const errorMsg = document.getElementById("login-error");

// My fake user :D
const USER = {
  username: "Robson",
  password: "123",
};

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === USER.username && password === USER.password) {
      setLocalStorage("user", { username });
      window.location.href = "../pages/cookbook.html";
    } else {
      errorMsg.textContent = "Invalid username or password. Please try again!";
    }
  });
}


