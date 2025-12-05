function banner(imgSrc, altText, headText, photographerName, creditLink) {
    // Create the banner div container
    const bannerDiv = document.createElement("div"); 
    bannerDiv.classList.add("banner"); 

    // Create and append image
    const img = document.createElement("img"); 
    img.src = imgSrc; 
    img.setAttribute("alt", altText); 
    bannerDiv.appendChild(img); 

    // Create and append text elements
    const headlineDiv = headline(headText, photographerName, creditLink); 
    bannerDiv.appendChild(headlineDiv); 

    return bannerDiv; 
}

function headline(headText, photographerName, creditLink) {
    // Create the headline text element
    const headlineDiv = document.createElement("div"); 
    headlineDiv.classList.add("headline"); 

    // Create and append the actual texts
    const headlineText = document.createElement("p"); 
    headlineText.textContent = headText; 
    // headlineText.textContent = "The Best Restaurant In Town. "; 
    headlineDiv.appendChild(headlineText); 

    // Create and append credit
    const credit = document.createElement("p"); 
    credit.classList.add("credit"); 

    const photographerNode = document.createTextNode("Photo by "); 
    credit.appendChild(photographerNode); 

    const photographerLink = document.createElement("a"); 
    photographerLink.setAttribute("href", creditLink);
    photographerLink.textContent = photographerName; 
    // photographerLink.setAttribute("href", "https://www.pexels.com/@brett-sayles/"); 
    // photographerLink.textContent = "Brett Sayles"; 
    credit.appendChild(photographerLink); 

    headlineDiv.appendChild(credit); 

    return headlineDiv; 
}

export { banner };  