function dailyMenu() {
    var todaysDate = new Date();
    var day = todaysDate.getDay();
    console.log(day);

    var imageSrc = "media/Image-placeholder.jpg"
    var imageAlt = "Placeholder"

    if (day === 0) {
        console.log("sunday")
        var ImageSrc = "media/SøndagTest.jpg"
        var ImageAlt = "Menu for sunday"
    } else if (day === 1) {
        console.log("monday")
        var ImageSrc = "media/MandagTest.jpg"
        var ImageAlt = "Menu for monday"
    } else if (day === 2) {
        console.log("tuesday")
        var ImageSrc = "media/TirsdagTest.jpg"
        var ImageAlt = "Menu for tuesday"
    } else if (day === 3) {
        console.log("wednesday")
        var ImageSrc = "media/OnsdagTest.jpg"
        var ImageAlt = "Menu for wednesday"
    } else if (day === 4) {
        console.log("thursday")
        var ImageSrc = "media/TorsdagTest.jpg"
        var ImageAlt = "Menu for thursday"
    } else if (day === 5) {
        console.log("friday")
        var ImageSrc = "media/FredagTest.jpg"
        var ImageAlt = "Menu for friday"
    } else if (day === 6) {
        console.log("saturday")
        var ImageSrc = "media/LørdagTest.jpg"
        var ImageAlt = "Menu for saturday"
    } else {
        console.log("Error finding day")
    }

    document.getElementById("dailyImage").src = imageSrc
    document.getElementById("dailyImage").alt = imageAlt

}

dailyMenu()