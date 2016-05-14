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
                 .when('/carte', {
                 //templateUrl: baseUrl + 'voyage/voyage.html',
                 templateUrl: baseUrl + 'carte/carte.html',
                 controller: 'CarteController',
                 controllerAs: 'cvm'
                 })
                 .when('/info', {
                 templateUrl: baseUrl + 'info/info.html',
                 controller: 'infoController',
                 controllerAs: 'vm'
                 })
                .when('/trajet', {
                    templateUrl: baseUrl + 'trajet/trajet.html',
                    controller: 'trajetController',
                    controllerAs: 'vm'
                })
                 /*
                 .when('/about', {
                 templateUrl: baseUrl + 'about/about.html',
                 controller: 'aboutCtrl',
                 controllerAs: 'vm'
                 }*/
                .otherwise({redirectTo: '/acceuil'});
        }]);
})();