

function initialize() {
    var styles = [
    {
        "featureType": "water",
        stylers: [
            {
                color: "#021019"
            }
        ]
    },
    {
        featureType: "landscape",
        stylers: [
            {
                color: "#08304b"
            }
        ]
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
            {
                color: "#0c4152"
            },
            {
                lightness: 5
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#000000"
            }
        ]
    },
    {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#0b434f"
            },
            {
                lightness: 25
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#000000"
            }
        ]
    },
    {
        featureType: "road.arterial",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#0b3d51"
            },
            {
                lightness: 16
            }
        ]
    },
    {
        featureType: "road.local",
        elementType: "geometry",
        stylers: [
            {
                color: "#000000"
            }
        ]
    },
    {
        elementType: "labels.text.fill",
        stylers: [
            {
                color: "#ffffff"
            }
        ]
    },
    {
        elementType: "labels.text.stroke",
        stylers: [
            {
                color: "#000000"
            },
            {
                lightness: 13
            }
        ]
    },
    {
        featureType: "transit",
        stylers: [
            {
                color: "#146474"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "geometry.fill",
        stylers: [
            {
                color: "#000000"
            }
        ]
    },
    {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
            {
                color: "#144b53"
            },
            {
                lightness: 14
            },
            {
                weight: 1.4
            }
        ]
    }
];
    
    
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
      center: new google.maps.LatLng(35.083334, -106.624782),
      styles: styles,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
    $("#internship").click(function(){
        $("#internshipPanel").slideToggle("slow");
    });
    
    $("#project").click(function(){
        $("#projectPanel").slideToggle("slow");
    });
    
    $("#current").click(function(){
        $("#currentPanel").slideToggle("slow");
    });
    

    
    
    
});

