import imgA from "./a.webp";
import imgB from "./b.webp";
import imgC from "./c.webp";
import imgD from "./d.webp";
import imgE from "./e.webp";
import imgF from "./f.webp";
import { createElement, appendElements, createFigure } from "./elements.js";

const content = document.querySelector("#content");
const divParent = createElement("div");

const h2 = createElement("h2");
h2.textContent = "Menu";

// Dish 1

const h3A = createElement("h3");
h3A.textContent = "Spinach and Goat Cheese Quiche";

const figureA = createFigure(
  imgA,
  "Spinach and Goat Cheese Quiche",
  "Credit: Food & Wine / Photo by Victor Protasio / Food Styling by Margaret Dickey / Prop Styling by Lydia Pursell",
);

const pA = createElement("p");
pA.textContent =
  "With an all-butter crust, a whole pound of sautéed spinach, and an entire log of crumbled goat cheese, this savory egg custard tart is an absolutely divine addition to any brunch spread.";

//   Dish 2

const h3B = createElement("h3");
h3B.textContent = "Coq au Vin Blanc";

const figureB = createFigure(
  imgB,
  "Coq au Vin Blanc",
  "Credit: Food & Wine / Photo by Jen Causey / Food Styling by Margaret Monroe Dickey / Prop Styling by Priscilla Montiel",
);

const pB = createElement("p");
pB.textContent =
  "Food blogger Anina Belle Giannini's version of the classic French chicken and vegetable stew leans on a dry white wine like Chardonnay instead of the traditional red. With browned chicken pieces, bacon lardons, and a rich, buttery sauce, it remains wonderfully indulgent.";

// Dish 3

const h3C = createElement("h3");
h3C.textContent = "Smoked Salmon Lyonnaise Salad";

const figureC = createFigure(
  imgC,
  "Smoked Salmon Lyonnaise Salad",
  "Credit: Greg Dupree / Food Styling by Chelsea Zimmer / Prop Styling by Julia Bayless",
);

const pC = createElement("p");
pC.textContent =
  "Peppery baby greens can be grown year-round, so there's no bad time to make this classic French bistro salad featuring boiled eggs, crispy bacon, smoked salmon, and homemade garlic croutons. Caramelized shallots and Dijon mustard in the punchy dressing bring acidity that deliciously cuts the richness of the bacon, eggs, and salmon.";

// Dish 4

const h3D = createElement("h3");
h3D.textContent = "Mille-Feuille";

const figureD = createFigure(
  imgD,
  "Mille-Feuille",
  "Credit: Food & Wine / Photo by Robby Lozano / Food Styling by Chelesa Zimmer / Prop Styling by Josh Hoggle",
);

const pD = createElement("p");
pD.textContent =
  "Also known as a Napoleon, this decadent stacked French dessert layers on the butter — first in the flaky puff pastry, then in the rich, vanilla-flecked pastry cream.";

// Dish 5

const h3E = createElement("h3");
h3E.textContent = "Beef Stew in Red Wine Sauce";

const figureE = createFigure(
  imgE,
  "Beef Stew in Red Wine Sauce",
  "Credit: Cara Cormack",
);

const pE = createElement("p");
pE.textContent =
  "This is the quintessential beef stew with red wine. Jacques Pépin's mother served it at her restaurant, Le Pélican, where she made it with tougher cuts of meat. Jacques likes the flatiron — a long, narrow cut that's extremely lean but becomes tender and stays moist.";

// Dish 6

const h3F = createElement("h3");
h3F.textContent = "Ratatouille";

const figureF = createFigure(
  imgF,
  "Ratatouille",
  "Credit: Photo by Kelsey Hansen / Food Styling by Greg Luna / Prop Styling by Stephanie Hunter",
);

const pF = createElement("p");
pF.textContent =
  "'True ratatouille is a simple dish: rich, tender, and transcendent when made well,' writes Parisian cookbook author Rebekah Pepplar. Made with peak-season tomatoes, zucchini, peppers, onions, and eggplant, this iconic vegetable stew distills the flavors of summer into a single bowl.";

const elements = [
  h2,
  h3A,
  figureA,
  pA,
  h3B,
  figureB,
  pB,
  h3C,
  figureC,
  pC,
  h3D,
  figureD,
  pD,
  h3E,
  figureE,
  pE,
  h3F,
  figureF,
  pF,
];

appendElements(elements, divParent);

export function loadMenu() {
  content.appendChild(divParent);
}

//   https://www.foodandwine.com/comfort-food/traditional-french-food
