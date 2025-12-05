import restaurantImgSrc from "../img/restaurant.jpg"; 
import { banner } from "./banner.js"; 

function intro() {
    const introDiv = document.createElement("div"); 
    introDiv.classList.add("intro"); 

    const introText = document.createElement("p"); 
    introText.textContent = `
        This is the best restaurant in town serving 
        greatest food blah blah blah...
    `; 

    introDiv.appendChild(introText); 

    return introDiv; 
}

function renderHome() {
    const contentDiv = document.querySelector("#content"); 
    const bannerDiv = banner(
        restaurantImgSrc, 
        "Photo of a Restaurant", 
        "The Best Bistro. Period. ", 
        "Brett Sayles", 
        "https://www.pexels.com/@brett-sayles/"
    ); 
    const introDiv = intro(); 

    contentDiv.appendChild(bannerDiv); 
    contentDiv.appendChild(introDiv); 
}

export { renderHome }; 