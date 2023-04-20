//  https://pannellum.org/documentation/examples/tour/ https://pannellum.org/documentation/examples/custom-hot-spots/

pannellum.viewer('panorama', {
    "title": "Apollon udenfor",
    "type": "equirectangular",
    "panorama": "img/dag_udenfor1.PNG",
    "autoLoad": true,
    /*Hot Spot*/
    "hotSpots": [ //Ændre hotspot + fixe pop up ang modal ting
        {
            "pitch": -10,
            "yaw": 0,
            "type": "info",
            "text": "Bar ejeren"
        },
    ]
});