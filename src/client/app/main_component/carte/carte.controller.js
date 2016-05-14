/**
 * Created by webcup2016 on 14/05/2016.
 */
(function(){
    angular.module('seasafe')
        .controller('CarteController', [function(){
            var cvm = this;
            console.info('CarteController');

            function initialize() {
                var mapProp = {
                    center:new google.maps.LatLng(51.508742,-0.120850),
                    zoom:5,
                    mapTypeId:google.maps.MapTypeId.ROADMAP
                };
                var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
            }
            google.maps.event.addDomListener(window, 'load', initialize);
        }]);
})();



