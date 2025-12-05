import restaurantImgSrc from "../img/restaurant.jpg"; 

function banner() {
    // Create the banner div container
    const bannerDiv = document.createElement("div"); 
    bannerDiv.classList.add("banner"); 

    // Create and append image
    const restaurantImg = document.createElement("img"); 
    restaurantImg.classList.add("restaurant"); 
    restaurantImg.src = restaurantImgSrc; 
    restaurantImg.setAttribute("alt", "Picture of a Restaurant"); 
    bannerDiv.appendChild(restaurantImg); 

    // Create and append text elements
    const headlineDiv = headline(); 
    bannerDiv.appendChild(headlineDiv); 

    return bannerDiv; 
}

function headline() {
    // Create the headline text element
    const headlineDiv = document.createElement("div"); 
    headlineDiv.classList.add("headline"); 

    // Create and append the actual texts
    const headlineText = document.createElement("p"); 
    headlineText.textContent = "The Best Restaurant In Town. "; 
    headlineDiv.appendChild(headlineText); 

    // Create and append credit
    const credit = document.createElement("p"); 
    credit.classList.add("credit"); 

    const photographerNode = document.createTextNode("Photographer: "); 
    credit.appendChild(photographerNode); 

    const photographerLink = document.createElement("a"); 
    photographerLink.setAttribute("href", "https://www.pexels.com/@brett-sayles/"); 
    photographerLink.textContent = "Brett Sayles"; 
    credit.appendChild(photographerLink); 

    headlineDiv.appendChild(credit); 

    return headlineDiv; 
}

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
    const bannerDiv = banner(); 
    const introDiv = intro(); 

    contentDiv.appendChild(bannerDiv); 
    contentDiv.appendChild(introDiv); 
}

export { renderHome }; 