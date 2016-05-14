/**
 * Created by ballgobina on 13/5/2016.
 */
(function(){
    angular.module('seasafe')
        .run(function($rootScope){
            console.log("app.run.js");
            $rootScope.$on('$routeChangeStart', function(){
                $rootScope.isRouteLoading = true;
                console.log("$routeChangeStart");
            });

            $rootScope.$on('$routeChangeSuccess', function(){
                $rootScope.isRouteLoading = false;
                console.log("$routeChangeSuccess");
            });
        });
})();