/**
 * Created by ballgobina on 13/5/2016.
 */
(function(){
    angular.module('seasafe')
        .controller('RootController', ['$mdSidenav', '$location', function($mdSidenav, $location){
            console.info('RootController');
            var RC = this;
            RC.toggleSidenav = function(){
                $mdSidenav('left').toggle();
            }

            RC.navigateTo = function(view) {
                $location.path(view);
            }
        }]);
})();