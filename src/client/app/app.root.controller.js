/**
 * Created by ballgobina on 13/5/2016.
 */
(function(){
    angular.module('seasafe')
        .controller('RootController', ['$mdSidenav', '$location', function($mdSidenav, $location){
            console.info('RootController');
            var rvm = this;
            rvm.getClass = function(path) {
                return ($location.path().substr(0, path.length) === path) ? 'menu-active' : '';
            };
        }]);
})();