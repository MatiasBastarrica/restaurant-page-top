import "./styles.css";
import { loadHome } from "./home.js";
import { loadAbout } from "./about.js";
import { loadMenu } from "./menu.js";

console.log("Welcome, Odinite!");
loadHome();

const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const content = document.querySelector("#content");
    const childDiv = content.firstChild;

    content.removeChild(childDiv);
    if (e.target.classList.contains("home-tab")) {
      loadHome();
    } else if (e.target.classList.contains("menu-tab")) {
      loadMenu();
    } else if (e.target.classList.contains("about-tab")) {
      loadAbout();
    }
  });
});
