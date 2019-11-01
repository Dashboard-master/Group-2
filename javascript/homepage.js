function dailyMenu() {
    var todaysDate = new Date();
    var day = todaysDate.getDay();
    console.log(day);

    var imageSrc = "media/Image-placeholder.jpg"
    var imageAlt = "Placeholder"
    var todayText = "Today: "
    var price = "Price"

    if (day === 0) {
        console.log("sunday")
        imageSrc = "media/test_image.jpg"
        imageAlt = "Menu for sunday"
        todayText = "Today: Sunday"
        price = "45,-"
    } else if (day === 1) {
        console.log("monday")
        imageSrc = "media/test_image_2.jpg"
        imageAlt = "Menu for monday"
        todayText = "Today: Monday"
        price = "35,-"
    } else if (day === 2) {
        console.log("tuesday")
        imageSrc = "media/test_image_3.jpg"
        imageAlt = "Menu for tuesday"
        todayText = "Today: Tuesday"
        price = "39,-"
    } else if (day === 3) {
        console.log("wednesday")
        imageSrc = "media/test_image.jpg"
        imageAlt = "Menu for wednesday"
        todayText = "Today: Wednesday"
        price = "45,-"
    } else if (day === 4) {
        console.log("thursday")
        imageSrc = "media/test_image_3.jpg"
        imageAlt = "Menu for thursday"
        todayText = "Today: Thursday"
        price = "39,-"
    } else if (day === 5) {
        console.log("friday")
        imageSrc = "media/test_image.jpg"
        imageAlt = "Menu for friday"
        todayText = "Today: Friday"
        price = "45,-"
    } else if (day === 6) {
        console.log("saturday")
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



// <article class="offer current">
// 					<h2>Today:</h2>
// 					<img src="./media/test_image.jpg" alt="Image of todays offer">
// 					<h3>Lorem Ipsum</h3>
// 					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
// 					<p class="price">45,-</p>
// 				</article>