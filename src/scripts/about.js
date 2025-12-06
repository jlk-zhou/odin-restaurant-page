import aboutImgSrc from "../img/about.jpg"; 
import accessImgSrc from "../img/access.jpg"; 
import contactImgSrc from "../img/contact.jpg"; 
import { banner, creditLine } from "./banner.js"; 

function story() {
    const storyText = document.createElement("p"); 
    storyText.classList.add("story"); 
    storyText.textContent = `
        We started off as a small biistro serving the weirdest food.
        Back then, it was all experiments, mismatched plates, and a 
        whole lot of trial and error. But people loved the quirky 
        charm—and somehow, the odd dishes turned into crowd favorites. 
        Over time, the recipes got refined, the space grew, and the 
        little bistro with the strange menu became a local legend. 
        Funny how the most unexpected beginnings can turn into something 
        amazing. 
        `; 

    return storyText; 
}

function imgWithCredit(
    imgSrc, 
    forSection, 
    photographerName, 
    photographerLink
) {
    const imgDiv = document.createElement("div"); 
    imgDiv.classList.add(`${forSection}-img-container`); 
    const img = document.createElement("img"); 
    img.src = imgSrc; 
    imgDiv.appendChild(img); 
    imgDiv.appendChild(creditLine(
        photographerName,
        photographerLink 
    )); 

    return imgDiv; 
}

function access() {
    const accessDiv = document.createElement("div"); 
    accessDiv.classList.add("access"); 

    const accessHeader = document.createElement("h1"); 
    accessHeader.textContent = "Access"; 
    accessDiv.appendChild(accessHeader); 

    const accessImgDiv = imgWithCredit(
        accessImgSrc, 
        "access", 
        "Lil Artsy", 
        "https://www.pexels.com/@lilartsy/"
    )
    accessDiv.appendChild(accessImgDiv); 

    const accessText = document.createElement("p"); 
    accessText.classList.add("access-instructions"); 
    accessText.textContent = `
        We’re really easy to find. Just head down the main street, 
        look for the door with the big friendly sign, and you can’t 
        miss us—blah blah blah. Whether you’re walking, driving, 
        or just wandering around with no real plan, chances are 
        you’ll stumble right into us. We like it that way: simple, 
        straightforward, and welcoming from the moment you spot the entrance.
    `; 

    accessDiv.appendChild(accessText); 

    return accessDiv; 
}

function contactItem(type, means) {
    const typeElement = document.createElement("li"); 
    typeElement.classList.add(`${type}`); 
    typeElement.textContent = `${type}: ${means}`; 

    return typeElement; 
}

function contact() {
    const contactDiv = document.createElement("div"); 
    contactDiv.classList.add("contact"); 

    const contactHeading = document.createElement("h1"); 
    contactHeading.textContent = "Contact"; 
    contactDiv.appendChild(contactHeading); 

    const contactImgDiv = imgWithCredit(
        contactImgSrc, 
        "contact", 
        "Sevki Kann Arslan", 
        "https://www.pexels.com/@sevki-kaan-arslan-2157844887/", 
    ); 
    contactDiv.appendChild(contactImgDiv); 

    const contactInfo = document.createElement("ul"); 
    contactInfo.classList.add("contact-info"); 

    const tel = contactItem("Tel", "01-2345-6789"); 
    contactInfo.appendChild(tel); 

    const fax = contactItem("Fax", "09-8765-4321"); 
    contactInfo.appendChild(fax); 

    const email = contactItem("E-mail", "example@nowhere.com"); 
    contactInfo.appendChild(email); 

    contactDiv.appendChild(contactInfo); 

    return contactDiv; 
}

function renderAbout() {
    const contentDiv = document.querySelector("#content"); 
    contentDiv.textContent = ""; 

    const aboutDiv = document.createElement("div"); 
    aboutDiv.classList.add("about"); 

    const bannerDiv = banner(
        aboutImgSrc, 
        "Chef clapping hand with flour", 
        "Our Story", 
        "Malidate Van", 
        "https://www.pexels.com/@vanmalidate/"
    ); 
    aboutDiv.appendChild(bannerDiv); 

    const storyText = story(); 
    aboutDiv.appendChild(storyText); 

    const accessDiv = access(); 
    aboutDiv.appendChild(accessDiv); 

    const contactDiv = contact(); 
    aboutDiv.appendChild(contactDiv); 

    contentDiv.appendChild(aboutDiv); 
}

export { renderAbout }