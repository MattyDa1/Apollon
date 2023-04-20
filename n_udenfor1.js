//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/nat_udenfor1.PNG",
    "autoLoad": true,
    /*Hot Spot*/
    "hotSpots": [
        {
            "pitch": -10,
            "yaw": 0,
            "type": "info",
            "text": "Bygningen"
        },
        {
            "pitch": -25,
            "yaw": -13,
            "type": "scene",
            "text": "Baren",
        },
        {
            "pitch": -20,
            "yaw": 50,
            "type": "scene",
            "text": "Apollon Udenfor",
        }
    ]
});