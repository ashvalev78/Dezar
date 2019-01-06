// function initMap() {
//     var uluru = {lat: 59.853531, lng: 30.140566};
//     var map = new google.maps.Map(
//     document.getElementById('map'), {zoom: 14, center: uluru});
//     var marker = new google.maps.Marker({position: uluru, map: map});
// }

ymaps.ready(init);
function init(){ 

    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [59.853531, 30.140566] // координаты точки
        }
    });

    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        center: [59.853531, 30.140566],
        controls: [],
        zoom: 16
    });

    myMap.geoObjects.add(myGeoObject);
}

