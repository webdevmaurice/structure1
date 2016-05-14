angular.module('seasafe')
    .controller('aboutController',['$http',function aboutController ($http) {
        console.log("aboutController");
        var vm = this;
        vm.pageClass = "page-acceuil";

        $("#accueil").vegas({
            slides: [
                { src: 'client/app/main_component/accueil/img/space3.jpg',transition:'zoomOut'},
                { src: 'client/app/main_component/accueil/img/space4.jpg',transition:'zoomOut'},
                { src: 'client/app/main_component/accueil/img/space7.jpg',transition:'zoomOut'}
            ],
            delay: 8000,
            timer: false,
            shuffle: false,
            transitionDuration: 25000
        });


        $(".fastlap").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "bounceIn",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 2000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });

    }]);