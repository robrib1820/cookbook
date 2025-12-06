export async function loadHeaderFooter() {
  const header = document.querySelector("#main-header");
  const footer = document.querySelector("#main-footer");

  const [headerHtml, footerHtml] = await Promise.all([
    fetch("/components/header.html").then(res => res.text()),
    fetch("/components/footer.html").then(res => res.text())
  ]);

  if (header) header.innerHTML = headerHtml;
  if (footer) footer.innerHTML = footerHtml;
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function getParam(param) {
  const query = window.location.search;
  const params = new URLSearchParams(query);
  return params.get(param);
}
