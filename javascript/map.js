// Initialize and add the map
function initMap() {
  // The location of Torg
  let torg = {lat: 63.429994, lng: 10.393383};
  // The map, centered at Torg
  let map = new google.maps.Map(
      document.getElementById("map"), {zoom: 14.5, center: torg});
  // The marker, positioned at Torg
  let marker = new google.maps.Marker({position: torg, map: map});
}
