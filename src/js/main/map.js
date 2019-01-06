// function initMap() {
//     var uluru = {lat: 59.853531, lng: 30.140566};
//     var map = new google.maps.Map(
//     document.getElementById('map'), {zoom: 14, center: uluru});
//     var marker = new google.maps.Marker({position: uluru, map: map});
// }

ymaps.ready(init);
function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 7
    });
}