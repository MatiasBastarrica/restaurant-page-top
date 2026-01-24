import remyImg from "./remyAbout.png";

const content = document.querySelector("#content");
const divWrapper = document.createElement("div");

const h2 = document.createElement("h2");
h2.textContent = "About Us";

const p1 = document.createElement("p");
p1.textContent = `We specialized on French cuisine.
Our chef Remy is capable of transporting people throught past memories just by tasting food.
We believe that anyone can cook no matter their origin.
We want our customers to feel like home.`;

const h3 = document.createElement("h3");
h3.textContent = "Meet our chef Remy";

const img = document.createElement("img");
img.src = remyImg;

const p2 = document.createElement("p");
p2.textContent = `Remy grew up on the outskirts of Paris. He spent many hours studying chef Gustau.
When he cooks he follows  his heart and wants people to experience the flavors of his dishes in a way they've never feel before.`;

const elements = [h2, p1, h3, img, p2];

export function loadAbout() {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    divWrapper.appendChild(element);
  }

  content.appendChild(divWrapper);
}
