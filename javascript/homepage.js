function dailyMenu() {
    var todaysDate = new Date();
    var day = todaysDate.getDay();
    console.log(day);

    days = [{
        todayText: "Sunday",
        price: "45,-",
        imagesrc: "media/test_image.jpg",
        imageAlt: "Menu for Sunday"
    }, {
        todayText: "Monday",
        price: "35,-",
        imagesrc: "media/test_image_2.jpg",
        imageAlt: "Menu for Monday"
    }, {
        todayText: "Tuesday",
        price: "39,-",
        imagesrc: "media/test_image_3.jpg",
        imageAlt: "Menu for Tuesday"
    }, {
        todayText: "Wednesday",
        price: "45,-",
        imagesrc: "media/test_image.jpg",
        imageAlt: "Menu for Wednesday"
    }, {
        todayText: "Thursday",
        price: "39,-",
        imagesrc: "media/test_image_3.jpg",
        imageAlt: "Menu for Thursday"
    }, {
        todayText: "Friday",
        price: "45,-",
        imagesrc: "media/test_image.jpg",
        imageAlt: "Menu for Friday"
    }, {
        todayText: "Saturday",
        price: "35,-",
        imagesrc: "media/test_image_2.jpg",
        imageAlt: "Menu for Saturday"
    }]

    // document.getElementById("dailyMenu").src = days[day].imageSrc
    document.getElementById("dailyMenu").alt = days[day].imageAlt
    document.getElementById("todayText").textContent = days[day].todayText
    document.getElementById("price").textContent = days[day].price
}

dailyMenu()