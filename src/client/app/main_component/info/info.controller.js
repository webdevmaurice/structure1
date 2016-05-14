(function(){
    angular.module('seasafe')
        .controller('infoController', [function(){
            var gvm = this;
            console.info('infoController');
            $('#yourdiv').liteAccordion();
        }]);
})();
