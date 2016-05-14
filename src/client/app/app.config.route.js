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
                 .when('/about', {
                 templateUrl: baseUrl + 'about/about.html',
                 controller: 'aboutController',
                 controllerAs: 'vm'
                 })
                .when('/info', {
                    templateUrl: baseUrl + 'voyage/voyages.html',
                    controller: 'VoyageCtrl1',
                    controllerAs: 'vm'
                })
                .when('/abbord', {
                    templateUrl: baseUrl + 'abbord/abbord.html',
                    controller: 'AbbordController',
                    controllerAs: 'vm'
                })
                .otherwise({redirectTo: '/acceuil'});
        }]);
})();