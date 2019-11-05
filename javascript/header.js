let header = document.createElement("HEADER");
header.classList.add("header");

//Creates the different header elements and appends them to the header
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
menu_button.setAttribute("onclick", "window.location.href='menu.html'");

daily_offers_button.innerText = "DAILY OFFERS";
daily_offers_button.classList.add("daily_offers_button");
daily_offers_button.setAttribute(
  "onclick",
  "window.location.href='daily_offer.html'"
);

home_button.classList.add("home_button");
home_button.setAttribute("src", "media/actual_logo.png");
home_button.setAttribute("alt", "logo");
home_button.classList.add("image");
home_button.setAttribute("onclick", "window.location.href='homepage.html'");

reviews_button.innerText = "REVIEWS";
reviews_button.classList.add("reviews_button");
reviews_button.setAttribute("onclick", "window.location.href='reviews.html'");

contact_us_button.innerText = "CONTACT US";
contact_us_button.classList.add("contact_us_button");
contact_us_button.setAttribute(
  "onclick",
  "window.location.href='contact_us.html'"
);

header_container.appendChild(menu_button);
header_container.appendChild(daily_offers_button);
header_container.appendChild(home_button);
header_container.appendChild(reviews_button);
header_container.appendChild(contact_us_button);
header_wrapper.appendChild(header_container);
header.appendChild(header_container);
document.body.appendChild(header);
