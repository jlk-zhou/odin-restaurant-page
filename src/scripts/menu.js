import menuImgSrc from "../img/menu.jpg"; 
import { banner } from "./banner.js"; 

function menu() {
    const menuContent = document.createElement("ul"); 
    menuContent.classList.add("menu"); 

    const menuItems = [
        {"name": "lamb, steamed", "price": "12"}, 
        {"name": "bear palm, steamed", "price": "20"}, 
        {"name": "venison tail, steamed", "price": "15"}, 
        {"name": "flower duck, roasted", "price": "18"}, 
        {"name": "chicken tender, roasted", "price": "10"}, 
        {"name": "young goose, roasted", "price": "22"}, 
    ]; 

    menuItems.forEach(item => {
        menuContent.appendChild(menuItem(item.name, item.price)); 
    })

    return menuContent; 
}

function menuItem(name, price) {
    const menuItem = document.createElement("li"); 
    menuItem.classList.add("menu-item"); 

    const itemName = document.createElement("p"); 
    itemName.classList.add("item-name"); 
    itemName.textContent = name; 
    menuItem.appendChild(itemName); 

    const itemPrice = document.createElement("p"); 
    itemPrice.classList.add("item-price"); 
    itemPrice.textContent = price; 
    menuItem.appendChild(itemPrice); 

    return menuItem; 
}

function renderMenu() {
    const contentDiv = document.querySelector("#content"); 

    const menuDiv = document.createElement("div"); 
    menuDiv.classList.add("menu-section")

    const bannerDiv = banner(
        menuImgSrc, 
        "People ordering food", 
        "Our Menu", 
        "Kyle Lui", 
        "https://www.pexels.com/@kyle-lui-231290/", 
    ); 
    menuDiv.appendChild(bannerDiv); 

    const menuContent = menu(); 
    menuDiv.appendChild(menuContent); 

    contentDiv.appendChild(menuDiv); 
}

export { renderMenu }