angular.module('seasafe')
.controller('navCtrl',['$scope', function navCtrl($scope){
    var nav = this;
    nav.menuIsOpen = true;
    nav.menuIcon = 'close';
    nav.toggleMenu = function() {
        nav.menuIcon = {menu:'close', close: 'menu'}[nav.menuIcon];
    };
}]);