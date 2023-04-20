//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/nat_bar.jpg",
    "autoLoad": true,
    "pitch": 0,
    "yaw": -100,
    /*Hot Spot*/
    "hotSpots": [
    {
        "pitch": 8,
        "yaw": -100,
        "type": "info",
        "text": "Bar ejeren"
    },
    {
        "pitch": -3,
        "yaw": -43,
        "type": "info",
        "text": "Stamkunden"
    },
    {
        "pitch": -2.1,
        "yaw": -174,
        "type": "scene",
        "text": "Rygerummet",
    },
    {
        "pitch": -2.1,
        "yaw": 129,
        "type": "scene",
        "text": "Apollon front",
    }
    ]
});