import remyImage from "./remy.webp";
import { createElement, appendElements } from "./elements.js";

const content = document.querySelector("#content");
const divParent = createElement("div");

const title = createElement("h1");
title.textContent = "La Ratatouille";

const img = createElement("img");
img.src = remyImage;
img.classList.add("homepage-img");

const p = createElement("p");
p.textContent =
  "Here in La Ratatouille our cheff Remy will cook special dishes that can take you back to your childhood. Even the most severe of the critics can give testimony of the many emotions one can feel when eating in this cozy restaurant.";
p.classList.add("description");

const elements = [title, img, p];

appendElements(elements, divParent);

export function loadHome() {
  content.appendChild(divParent);
}
