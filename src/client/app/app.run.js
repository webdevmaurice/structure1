/**
 * Created by ballgobina on 13/5/2016.
 */
(function(){
    angular.module('seasafe')
        .run(function($rootScope){
            $rootScope.$on('$routeChangeStart', function(){
                $rootScope.isRouteLoading = true;
            });

            $rootScope.$on('$routeChangeSuccess', function(){
                $rootScope.isRouteLoading = false;
            });
        });
})();