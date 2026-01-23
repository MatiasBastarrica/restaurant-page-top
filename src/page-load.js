import remyImage from "./remy.webp";

const content = document.querySelector("#content");

export function loadHomepage() {
  const title = document.createElement("h1");
  title.textContent = "La Ratatouille";

  const img = document.createElement("img");
  img.src = remyImage;
  img.classList.add("homepage-img");

  const p = document.createElement("p");
  p.textContent =
    "Here in La Ratatouille our cheff Remy will cook special dishes that can take you back to your childhood. Even the most severe of the critics can give testimony of the many emotions one can feel when eating in this cozy restaurant.";
  p.classList.add("description");

  content.appendChild(title);
  content.appendChild(img);
  content.appendChild(p);
}
