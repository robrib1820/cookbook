import { loadHeaderFooter, setLocalStorage, getLocalStorage } from "./utils.js";

loadHeaderFooter();

const form = document.getElementById("login-form");
const errorMsg = document.getElementById("login-error");

// My fake user to login
const USER = {
  username: "admin",
  password: "123"
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === USER.username && password === USER.password) {
    // to save the session
    setLocalStorage("user", { username });

    window.location.href = "/index.html"; // go back to home page
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
