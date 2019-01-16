if (document.getElementById('map') !== null) {
    ymaps.ready(init);
    function init(){ 

        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point", // тип геометрии - точка
                coordinates: [59.853460, 30.152206] // координаты точки
            }
        });

        var myMap = new ymaps.Map("map", {
            center: [59.853460, 30.152206],
            controls: [],
            zoom: 14
        });

        myMap.geoObjects.add(myGeoObject);
    }
}

