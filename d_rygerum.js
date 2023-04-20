//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/dag_rygerum.jpg",
    "autoLoad": true,
    "pitch": -9,
    "yaw": -125,
    /*Hot Spot*/
    "hotSpots": [//Ændre hotspot + fixe pop up ang modal ting
        {
            "pitch": -9,
            "yaw": 93,
            "type": "info",
            "text": "Nye Kunder"
        },
    ]
});