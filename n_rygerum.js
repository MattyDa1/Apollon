//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/nat_rygerum.jpg",
    "autoLoad": true,
    "pitch": -9,
    "yaw": -180,
    /*Hot Spot*/
    "hotSpots": [//Ændre hotspot + fixe pop up ang modal ting
    {
        "pitch": -9,
        "yaw": 15,
        "type": "info",
        "text": "Nye Kunder"
    },
    {
        "pitch": -2.1,
        "yaw": 90,
        "type": "scene",
        "text": "Baren",
    }
]
});