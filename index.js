//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/dag_udenfor2.PNG",
    "autoLoad": true,
    /*Hot Spot*/
    "hotSpots": [
        {
            "pitch": 14.1,
            "yaw": 1.5,
            "type": "info",
            "text": "Interview med Patrick"
        },
        {
            "pitch": -2.1,
            "yaw": -50,
            "type": "scene",
            "text": "Apollon front",
        }
    ]
});