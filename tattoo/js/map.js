function initMap() {
    var uluru = {lat: 33.7608425, lng: -117.9568597};
    var map = new google.maps.Map(
        document.getElementById('js-map'), {zoom: 9.5, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
};
