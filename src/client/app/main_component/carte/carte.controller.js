/**
 * Created by webcup2016 on 14/05/2016.
 */
(function(){
    angular.module('seasafe')
        .controller('CarteController', [function(){
            var cvm = this;
            console.info('CarteController');

            $('#closeCarte').click(function(){
                $('#overlayCarte').fadeOut();
                $('.imagess').hide();
                $('.imagess').children().hide();
            });
function openOverlay(div){
    $('#overlayCarte').show();
    $(div).show();
    $(div).animate({
        width: "70%",
    }, 1500);
}
            var mauritius = new google.maps.LatLng(-20.3484, 57.5522);
            var australia = new google.maps.LatLng(-25.2744, 133.7751);
            var asia = new google.maps.LatLng(34.0479, 100.6197);
            var europe = new google.maps.LatLng(54.5260, 15.2551);
            var northAmerica = new google.maps.LatLng(54.5260, -105.2551);
            var southAmerica = new google.maps.LatLng(8.7832, -55.4915);
            var africa = new google.maps.LatLng(-8.7832, 34.5085);


            function initialize() {

                var mapProp = {
                    center:africa,
                    zoom:1,
                    mapTypeId:google.maps.MapTypeId.HYBRID
                };
                var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

                //polyline
                var myTrip=[mauritius,australia,asia,europe,northAmerica,southAmerica,africa];
                var flightPath=new google.maps.Polyline({
                    path:myTrip,
                    strokeColor:"#0000FF",
                    strokeOpacity:0.8,
                    strokeWeight:2
                });

                //flightPath.setMap(map);

                //mauritius
                var markermauritius=new google.maps.Marker({position:mauritius,});
                markermauritius.setMap(map);
                var infoMauritius = new google.maps.InfoWindow({content:"Mauritius"});
                google.maps.event.addListener(markermauritius, 'click', function() {
                    //infoMauritius.open(map,markermauritius);
                    openOverlay('#imgsMau');
                    $('#imgsMau *').show();
                });

                //australia
                var markeraustralia=new google.maps.Marker({position:australia,});
                markeraustralia.setMap(map);
                var infoAustralia = new google.maps.InfoWindow({content:"Australia"});
                //infoAustralia.open(map,markeraustralia);
                google.maps.event.addListener(markeraustralia, 'click', function() {
                    //infoAustralia.close();
                    openOverlay('#imgsAus');
                        $('#imgsAus *').show();
                });
                //asia
                var markerasia=new google.maps.Marker({position:asia,zIndex : -100});
                markerasia.setMap(map);
                var infoAsia = new google.maps.InfoWindow({content:"Asia"});
                //infoAsia.open(map,markerasia);
                google.maps.event.addListener(markerasia, 'click', function() {
                    openOverlay('#imgsAsia')
                    $('#imgsAsia *').show();
                });

                //europe
                var markereurope=new google.maps.Marker({position:europe,zIndex : -100});
                markereurope.setMap(map);
                var infoEurope = new google.maps.InfoWindow({content:"europe"});
                //infoEurope.open(map,markereurope);
                google.maps.event.addListener(markereurope, 'click', function() {
                    openOverlay('#imgsEurope')
                    $('#imgsEurope *').show();
                });

                //northAmerica
                var markernorthAmerica=new google.maps.Marker({position:northAmerica,});
                markernorthAmerica.setMap(map);
                var infoNorthAmerica = new google.maps.InfoWindow({content:"northAmerica"});
                //infoNorthAmerica.open(map,markernorthAmerica);
                google.maps.event.addListener(markernorthAmerica, 'click', function() {
                    openOverlay('#imgsNA')
                    $('#imgsNA *').show();
                });

                //southAmerica
                var markersouthAmerica=new google.maps.Marker({position:southAmerica,});
                markersouthAmerica.setMap(map);
                var infoSouthAmerica = new google.maps.InfoWindow({content:"SouthAmerica"});
                //infoSouthAmerica.open(map,markersouthAmerica);
                google.maps.event.addListener(markersouthAmerica, 'click', function() {
                    openOverlay('#imgsSA')
                    $('#imgsSA *').show();
                });

                //africa
                var markerafrica=new google.maps.Marker({position:africa,});
                markerafrica.setMap(map);
                var infoAfrica = new google.maps.InfoWindow({content:"africa"});
                //infoAfrica.open(map,markerafrica);
                google.maps.event.addListener(markerafrica, 'click', function() {
                    openOverlay('#imgsAfr')
                    $('#imgsAfr *').show();
                });

                var styles = [
                    {
                        featureType: "all",
                        elementType: "labels",
                        stylers: [
                            { visibility: "off" }
                        ]
                    },{
                        featureType: "road",
                        elementType: "geometry",
                        stylers: [
                            { lightness: 100 },
                            { visibility: "off" }
                        ]
                    }
                ]
                map.setOptions({styles: styles, minZoom: 2});
            }




            google.maps.event.addDomListener(window, 'load', initialize);
        }]);
})();



