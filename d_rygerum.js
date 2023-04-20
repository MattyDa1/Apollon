//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/dag_rygerum.jpg",
    "autoLoad": true,
    "pitch": -9,
    "yaw": -125,
    /*Hot Spot*/
    "hotSpots": [
        {
            "pitch": -9,
            "yaw": 93,
            "type": "info",
            "text": "Nye Kunder"
        },
        {
            "pitch": -2.1,
            "yaw": 154,
            "type": "scene",
            "text": "Baren",
        }    
    ]
});