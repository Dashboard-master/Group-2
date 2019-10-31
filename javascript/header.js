let header = document.createElement("HEADER");
header.classList.add("header");

let header_wrapper = document.createElement("DIV");
let header_container = document.createElement("DIV");
let menu_button = document.createElement("BUTTON");
let daily_offers_button = document.createElement("BUTTON");
let home_button = document.createElement("IMG");
let reviews_button = document.createElement("BUTTON");
let contact_us_button = document.createElement("BUTTON");

header_container.classList.add("header_container");

menu_button.innerText = "MENU";
menu_button.classList.add("menu_button");

daily_offers_button.innerText = "DAILY OFFERS";
daily_offers_button.classList.add("daily_offers_button");

home_button.classList.add("home_button");
home_button.setAttribute("src", "media/thanksalatte_logo.png");
home_button.setAttribute("alt", "logo");

reviews_button.innerText = "REVIEWS";
reviews_button.classList.add("reviews_button");

contact_us_button.innerText = "CONTACT US";
contact_us_button.classList.add("contact_us_button");

header_container.appendChild(menu_button);
header_container.appendChild(daily_offers_button);
header_container.appendChild(home_button);
header_container.appendChild(reviews_button);
header_container.appendChild(contact_us_button);
header_wrapper.appendChild(header_container);
header.appendChild(header_container);
document.body.appendChild(header);
