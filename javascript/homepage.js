function dailyMenu() {
    var todaysDate = new Date();
    var day = todaysDate.getDay();
    console.log(day);

    var imageSrc = "media/Image-placeholder.jpg"
    var imageAlt = "Placeholder"

    if (day === 0) {
        console.log("sunday")
        imageSrc = "media/SøndagTest.jpg"
        imageAlt = "Menu for sunday"
    } else if (day === 1) {
        console.log("monday")
        imageSrc = "media/MandagTest.jpg"
        imageAlt = "Menu for monday"
    } else if (day === 2) {
        console.log("tuesday")
        imageSrc = "media/TirsdagTest.jpg"
        imageAlt = "Menu for tuesday"
    } else if (day === 3) {
        console.log("wednesday")
        imageSrc = "media/OnsdagTest.jpg"
        imageAlt = "Menu for wednesday"
    } else if (day === 4) {
        console.log("thursday")
        imageSrc = "media/TorsdagTest.jpg"
        imageAlt = "Menu for thursday"
    } else if (day === 5) {
        console.log("friday")
        imageSrc = "media/FredagTest.jpg"
        imageAlt = "Menu for friday"
    } else if (day === 6) {
        console.log("saturday")
        imageSrc = "media/LørdagTest.jpg"
        imageAlt = "Menu for saturday"
    } else {
        console.log("Error finding day")
    }

    document.getElementById("dailyMenu").src = imageSrc
    document.getElementById("dailyMenu").alt = imageAlt

}

dailyMenu()