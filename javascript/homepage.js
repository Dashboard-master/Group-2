function dailyMenu() {
    var todaysDate = new Date();
    var day = todaysDate.getDay();
    console.log(day);

    var imageSrc = "media/Image-placeholder.jpg"
    var imageAlt = "Placeholder"
    var todayText = "Today: "
    var price = "Price"

    if (day === 0) {
        imageSrc = "media/test_image.jpg"
        imageAlt = "Menu for sunday"
        todayText = "Today: Sunday"
        price = "45,-"
    } else if (day === 1) {
        imageSrc = "media/test_image_2.jpg"
        imageAlt = "Menu for monday"
        todayText = "Today: Monday"
        price = "35,-"
    } else if (day === 2) {
        imageSrc = "media/test_image_3.jpg"
        imageAlt = "Menu for tuesday"
        todayText = "Today: Tuesday"
        price = "39,-"
    } else if (day === 3) {
        imageSrc = "media/test_image.jpg"
        imageAlt = "Menu for wednesday"
        todayText = "Today: Wednesday"
        price = "45,-"
    } else if (day === 4) {
        imageSrc = "media/test_image_3.jpg"
        imageAlt = "Menu for thursday"
        todayText = "Today: Thursday"
        price = "39,-"
    } else if (day === 5) {
        imageSrc = "media/test_image.jpg"
        imageAlt = "Menu for friday"
        todayText = "Today: Friday"
        price = "45,-"
    } else if (day === 6) {
        imageSrc = "media/test_image_2.jpg"
        imageAlt = "Menu for saturday"
        todayText = "Today: Saturday"
        price = "35,-"
    } else {
        console.log("Error finding day")
    }

    document.getElementById("dailyMenu").src = imageSrc
    document.getElementById("dailyMenu").alt = imageAlt
    document.getElementById("todayText").textContent = todayText
    document.getElementById("price").textContent = price

}

dailyMenu()
