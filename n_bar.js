//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/nat_bar.jpg",
    "autoLoad": true,
    "pitch": 0,
    "yaw": -100,
    /*Hot Spot*/
    "hotSpots": [//Ændre hotspot + fixe pop up ang modal ting
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
]
});