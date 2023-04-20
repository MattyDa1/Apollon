//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/dag_bar.jpg",
    "autoLoad": true,
    "pitch": 0,
    "yaw": -90,
    /*Hot Spot*/
    "hotSpots": [
    {
        "pitch": 10,
        "yaw": -90,
        "type": "info",
        "text": "Bar ejeren"
    },
    {
        "pitch": -3,
        "yaw": -25,
        "type": "info",
        "text": "Stamkunden"
    },
    {
        "pitch": -2.1,
        "yaw": -168,
        "type": "scene",
        "text": "Rygerummet",
    },
    {
        "pitch": 0.5,
        "yaw": 134,
        "type": "scene",
        "text": "Apollon front",
    }
    ]
});