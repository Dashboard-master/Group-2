    // Initialize and add the map
function initMap() {
      // The location of Torg
    let torg = {lat: 63.429994, lng: 10.393383};
      // The map, centered at Torg
    let map = new google.maps.Map(document.getElementById("map"), {zoom: 14.5, center: torg});
      // The marker, positioned at Torg
    let marker = new google.maps.Marker({position: torg, map: map});
      // Adding an evenlistener so that when you click the marker a new tab opens up where you can get directions from where you are
    google.maps.event.addListener(marker, "click", function(){
        window.open("https://www.google.no/maps/dir//63.429994,10.393383/@63.429994,10.3911943,17z/data=!4m10!1m7!3m6!1s0x0:0x0!2zNjPCsDI1JzQ4LjAiTiAxMMKwMjMnMzYuMiJF!3b1!8m2!3d63.429994!4d10.393383!4m1!3e2")
    });
}
