export async function loadHeaderFooter() {
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

  const [headerHtml, footerHtml] = await Promise.all([
    fetch("/header.html").then(res => res.text()),
    fetch("/footer.html").then(res => res.text()),
  ]);

  if (header) {
    header.innerHTML = headerHtml;
    updateAuthLinks();
  }

  if (footer) footer.innerHTML = footerHtml;
}

export function updateAuthLinks() {
  const user = getLocalStorage("user");
  const container = document.getElementById("auth-links");

  if (!container) return;

  if (user) {
    container.innerHTML = `
      <span>Welcome, ${user.username}</span>
      <a href="#" id="logout-btn">Logout</a>
    `;

    document.getElementById("logout-btn").addEventListener("click", () => {
      localStorage.removeItem("user");
      window.location.reload();
    });
  } else {
    container.innerHTML = `<a href="/login.html">Login</a>`;
  }
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function getParam(param) {
  return new URLSearchParams(window.location.search).get(param);
}


