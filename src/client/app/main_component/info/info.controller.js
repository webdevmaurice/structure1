(function(){
    angular.module('seasafe')
        .controller('infoController', ['$http',function($http){
            var gvm = this;
            gvm.data = [];
            gvm.noms = ['Pression atmosphérique',"Niveau d'oxygen",'Efficence Moteur','Niveau battery', 'RPM'];
            console.info('infoController');
            $('#yourdiv').liteAccordion();
            $(function() {

                var Page = (function() {

                    var $navArrows = $( '#nav-arrows' ).hide(),
                        $shadow = $( '#shadow' ).hide(),
                        slicebox = $( '#sb-slider' ).slicebox( {
                            onReady : function() {

                                $navArrows.show();
                                $shadow.show();

                            },
                            orientation : 'r',
                            cuboidsRandom : true
                        } ),

                        init = function() {

                            initEvents();

                        },
                        initEvents = function() {

                            // add navigation events
                            $navArrows.children( ':first' ).on( 'click', function() {

                                slicebox.next();
                                return false;

                            } );

                            $navArrows.children( ':last' ).on( 'click', function() {

                                slicebox.previous();
                                return false;

                            } );

                        };

                    return { init : init };

                })();

                Page.init();

            });

            vm.fnAtmos = function() {
                console.log('PRESSURE');
                $http({
                    method: 'GET',
                    url: 'server/webservice/pressure.php'
                }).then(function successCallback(response) {
                    // this callback will be called asynchronously
                    // when the response is available
                    console.log(response);
                    gvm.data = response.data;
                }, function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log(response);
                });
            }

            setInterval(function(){
                vm.fnAtmos();
            }, 2000)
        }]);
})();
