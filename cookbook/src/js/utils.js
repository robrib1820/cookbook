export async function loadHeaderFooter() {
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

  const [headerHtml, footerHtml] = await Promise.all([
    fetch("/components/header.html").then(r => r.text()),
    fetch("/components/footer.html").then(r => r.text())
  ]);

  if (header) {
    header.innerHTML = headerHtml;
    updateAuthLinks();
  }

  if (footer) footer.innerHTML = footerHtml;
}

export function updateAuthLinks() {
  const user = getLocalStorage("user");
  const box = document.getElementById("auth-links");

  if (!box) return;

  if (user) {
    box.innerHTML = `
      <span>Welcome, ${user.username}</span>
      <a href="#" id="logout-btn">Logout</a>
    `;

    document.getElementById("logout-btn").addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.href = "/index.html";
    });

  } else {
    box.innerHTML = `<a href="/src/pages/login.html">Login</a>`;
  }
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function getParam(key) {
  return new URLSearchParams(location.search).get(key);
}




