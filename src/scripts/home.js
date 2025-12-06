import restaurantImgSrc from "../img/restaurant.jpg"; 
import { banner } from "./banner.js"; 

function intro() {
    const introDiv = document.createElement("div"); 
    introDiv.classList.add("intro"); 

    const introText = document.createElement("p"); 
    introText.textContent = `
        This is the best restaurant in town serving the 
        greatest food. Every dish feels like it was crafted 
        with love, flavor, and just the right amount of 
        flair. The moment you walk in, the aroma alone 
        tells you you're in for something special. Whether 
        you're craving comfort classics or bold new flavors, 
        this place never disappoints. It’s the kind of spot 
        you recommend to friends with full confidence—and then 
        feel secretly proud when they come back raving about it. 
    `; 

    introDiv.appendChild(introText); 

    return introDiv; 
}

function renderHome() {
    const contentDiv = document.querySelector("#content"); 
    contentDiv.textContent = ""; 

    const homeDiv = document.createElement("div"); 
    homeDiv.classList.add("home"); 

    const bannerDiv = banner(
        restaurantImgSrc, 
        "Photo of a Restaurant", 
        "The Best Bistro. Period. ", 
        "Brett Sayles", 
        "https://www.pexels.com/@brett-sayles/"
    ); 
    const introDiv = intro(); 

    homeDiv.appendChild(bannerDiv); 
    homeDiv.appendChild(introDiv); 

    contentDiv.appendChild(homeDiv); 
}

export { renderHome }; 