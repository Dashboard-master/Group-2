function dailyMenu() {
    // Getting the current date when the website is accessed.
    var todaysDate = new Date();
    var day = todaysDate.getDay();
    console.log(day);

    // An array containing a daily text for the header element, a price for the daily menu and an image 
    // and an alt attribute to that image to show in the "Daily menu" box on the homepage.
    days = [{
        todayText: "Sunday",
        price: "45,-",
        imageSrc: "media/.jpg",
        imageAlt: "Menu for Sunday"
    }, {
        todayText: "Monday",
        price: "35,-",
        imageSrc: "media/coffee_2.jpg",
        imageAlt: "Menu for Monday"
    }, {
        todayText: "Tuesday",
        price: "39,-",
        imageSrc: "media/coffee.jpg",
        imageAlt: "Menu for Tuesday"
    }, {
        todayText: "Wednesday",
        price: "45,-",
        imageSrc: "media/coffee_3.jpg",
        imageAlt: "Menu for Wednesday"
    }, {
        todayText: "Thursday",
        price: "39,-",
        imageSrc: "media/coffee_2.jpg",
        imageAlt: "Menu for Thursday"
    }, {
        todayText: "Friday",
        price: "45,-",
        imageSrc: "media/coffee.jpg",
        imageAlt: "Menu for Friday"
    }, {
        todayText: "Saturday",
        price: "35,-",
        imageSrc: "media/coffee_3.jpg",
        imageAlt: "Menu for Saturday"
    }]

    // This code gives the id's in homepage.html the correct values for the corresponding day.
    document.getElementById("dailyMenu").src = days[day].imageSrc
    document.getElementById("dailyMenu").alt = days[day].imageAlt
    document.getElementById("todayText").textContent = days[day].todayText
    document.getElementById("price").textContent = days[day].price
}

// The function to place the daily elements on the homepage is calles when the site is accessed.
dailyMenu()