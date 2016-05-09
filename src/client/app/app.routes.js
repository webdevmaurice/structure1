angular.module('teleportation')
    .config(['$routeProvider', function ($routeProvider) {
        var baseUrl = 'client/app/main_component/';
        /*$routeProvider
            .when('/page_acceuil',{
                templateUrl: baseUrl + 'page_acceuil/page_acceuil.html',
                controller: 'PageAccueilCtrl',
                controllerAs: 'vm'
            })
            .when('/my_account',{
                templateUrl: baseUrl + 'my_account/my_account.html',
                controller: 'MyAccountCtrl',
                controllerAs: 'vm'
            })
            .when('/voyage', {
                //templateUrl: baseUrl + 'voyage/voyage.html',
                templateUrl: baseUrl + 'voyage/voyages.html',
                controller: 'VoyageCtrl1',
                controllerAs: 'vm'
            })
            .when('/events', {
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
            })
            .otherwise({redirectTo: '/page_acceuil'});*/
    }]);