import "./style.css"; 
import { renderHome } from "./scripts/home.js"; 
import { renderMenu } from "./scripts/menu.js"; 
import { renderAbout } from "./scripts/about.js"; 

function main() {
    const homeButton = document.querySelector(".home-button"); 
    const menuButton = document.querySelector(".menu-button"); 
    const aboutButton = document.querySelector(".about-button"); 

    homeButton.addEventListener("click", renderHome); 
    menuButton.addEventListener("click", renderMenu); 
    aboutButton.addEventListener("click", renderAbout); 

    renderHome();
}

main(); 