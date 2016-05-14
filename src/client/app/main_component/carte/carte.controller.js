/**
 * Created by webcup2016 on 14/05/2016.
 */
(function(){
    angular.module('seasafe')
        .controller('CarteController', [function(){
            var cvm = this;
            console.info('CarteController');

            var mauritius = new google.maps.LatLng(-20.3484, 57.5522);
            var australia = new google.maps.LatLng(-25.2744, 133.7751);
            var asia = new google.maps.LatLng(34.0479, 100.6197);
            var europe = new google.maps.LatLng(54.5260, 15.2551);
            var northAmerica = new google.maps.LatLng(54.5260, -105.2551);
            var southAmerica = new google.maps.LatLng(8.7832, -55.4915);
            var africa = new google.maps.LatLng(-8.7832, 34.5085);


            function initialize() {

                var mapProp = {
                    center:new google.maps.LatLng(51.508742,-0.120850),
                    zoom:3,
                    mapTypeId:google.maps.MapTypeId.ROADMAP
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
                    infoMauritius.open(map,markermauritius);
                });

                //australia
                var markeraustralia=new google.maps.Marker({position:australia,});
                markeraustralia.setMap(map);
                var infoAustralia = new google.maps.InfoWindow({content:"Australia"});
                infoAustralia.open(map,markeraustralia);
                google.maps.event.addListener(markermauritius, 'click', function() {
                    infoAustralia.close();
                });
                //asia
                var markerasia=new google.maps.Marker({position:asia,zIndex : -100});
                markerasia.setMap(map);
                var infoAsia = new google.maps.InfoWindow({content:"Asia"});
                infoAsia.open(map,markerasia);

                //europe
                var markereurope=new google.maps.Marker({position:europe,zIndex : -100});
                markereurope.setMap(map);
                var infoEurope = new google.maps.InfoWindow({content:"europe"});
                infoEurope.open(map,markereurope);

                //northAmerica
                var markernorthAmerica=new google.maps.Marker({position:northAmerica,});
                markernorthAmerica.setMap(map);
                var infoNorthAmerica = new google.maps.InfoWindow({content:"northAmerica"});
                infoNorthAmerica.open(map,markernorthAmerica);

                //southAmerica
                var markersouthAmerica=new google.maps.Marker({position:southAmerica,});
                markersouthAmerica.setMap(map);
                var infoSouthAmerica = new google.maps.InfoWindow({content:"SouthAmerica"});
                infoSouthAmerica.open(map,markersouthAmerica);

                //africa
                var markerafrica=new google.maps.Marker({position:africa,});
                markerafrica.setMap(map);
                var infoAfrica = new google.maps.InfoWindow({content:"africa"});
                infoAfrica.open(map,markerafrica);
            }




            google.maps.event.addDomListener(window, 'load', initialize);
        }]);
})();



