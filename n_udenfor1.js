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
            "text": "Bar ejeren"
        },
    ]
});