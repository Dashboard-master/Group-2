// Initialize and add the map
function initMap() {
  // The location of Uluru
  var torg = {lat: 63.429994, lng: 10.393383};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: torg});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: torg, map: map});
}
