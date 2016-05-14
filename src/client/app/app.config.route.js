(function(){
    angular.module('seasafe')
        .config(['$routeProvider', function ($routeProvider) {
            var baseUrl = 'client/app/main_component/';
            $routeProvider
                .when('/acceuil',{
                    templateUrl: baseUrl + 'accueil/accueil.html',
                    controller: 'AccueilController',
                    controllerAs: 'avm'
                })
                .when('/wall', {
                 //templateUrl: baseUrl + 'voyage/voyage.html',
                 templateUrl: baseUrl + 'wall/wall.html',
                 controller: 'WallController',
                 controllerAs: 'wvm'
                 })
                 /*.when('/events', {
                 //templateUrl: baseUrl + 'voyage/voyage.html',
                 templateUrl: baseUrl + 'event/event.html',
                 controller: 'EventCtrl',
                 controllerAs: 'vm'
                 })
                 .when('/map', {
                 templateUrl: baseUrl + 'map/map.html',
                 controller: 'MapCtrl',
                 controllerAs: 'vm'
                 })
                 .when('/about', {
                 templateUrl: baseUrl + 'about/about.html',
                 controller: 'aboutCtrl',
                 controllerAs: 'vm'
                 }*/
                .otherwise({redirectTo: '/acceuil'});
        }]);
})();