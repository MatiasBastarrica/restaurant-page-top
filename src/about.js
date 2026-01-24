import remyImg from "./remyAbout.png";
import { createElement, appendElements } from "./elements.js";

const content = document.querySelector("#content");
const divParent = createElement("div");
divParent.classList.add("about-wrapper", "flow-vertical");

const h2 = createElement("h2");
h2.textContent = "About Us";

const p1 = createElement("p");
p1.textContent = `We specialized on French cuisine.
Our chef Remy is capable of transporting people throught past memories just by tasting food.
We believe that anyone can cook no matter their origin.
We want our customers to feel like home.`;

const h3 = createElement("h3");
h3.textContent = "Meet our chef Remy";

const img = createElement("img");
img.src = remyImg;

const p2 = createElement("p");
p2.textContent = `Remy grew up on the outskirts of Paris. He spent many hours studying chef Gustau.
When he cooks he follows  his heart and wants people to experience the flavors of his dishes in a way they've never feel before.`;

const elements = [h2, p1, h3, img, p2];

appendElements(elements, divParent);

export function loadAbout() {
  content.appendChild(divParent);
}
