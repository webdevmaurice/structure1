/**
 * Created by webcup2016 on 14/05/2016.
 */
(function(){
    angular.module('seasafe')
        .controller('WallController', ['$timeout','$mdMedia',function($timeout,$mdMedia){
            var wvm = this;
            console.info('WallController');

            /*wvm.posts = buildGridModel({
                icon : "avatar:svg-",
                title: "Svg-",
                background: ""
            });*/

            wvm.postTemplate = {
                poster: "Saif Sohomow",
                timestamp: new Date(),
                avatar: {
                    type:"img",
                    src: 'https://cdn1.iconfinder.com/data/icons/people-career/100/013_-_astronaut-128.png'
                },
                post : {
                    type: "img",
                    data: "http://lunaf.com/img/space/moon-from-earth.png"
                },
                likes: 15,
                comments: 51,
                shares: 10,
                quotient: 5.2
            };

            var palettes = [
                ['#ff8080', '#ff6666', '#ff4d4d', '#ff3333', '#ff1a1a', 'red', '#e60000', '#cc0000', '#b30000', '#990000'],
                ['#664200','#805300','#996300','#b37300','#cc8400','#e69500','#ffae1a','#ffb733','#ffc04d','#ffc966'],
                ['#00ff00', '#00e600', '#00cc00', '#00b300', '#009900', 'green', '#006600', '#004d00', '#003300', '#001a00'],
                ['#ff00ff', '#e600e6', '#cc00cc', '#b300b3', '#990099', 'purple', '#660066', '#4d004d', '#330033','#1a001a']
            ];
            wvm.posts = buildGridModel(wvm.postTemplate);

            function buildGridModel(tileTmpl){
                var it, results = [];
                for (var j=0; j<50; j++) {
                    it = angular.merge({},tileTmpl);

                    it.icon  = it.icon + (j+1);
                    it.title = it.title + (j+1);
                    it.span  = { row : 1, col : 1 };
                    it.post.type = Math.floor((Math.random() * 3) + 1);
                    it.poster = Math.floor((Math.random() * 3));
                    var palette = palettes[it.poster];
                    it.color = palette[Math.floor((Math.random() * 9))];
                    it.poster = [
                        "Hashim",
                        "Saif",
                        "Micheal",
                        "Arvind"
                    ][it.poster];
                    if (it.post.type==1) {
                        it.id = 'text' + j;
                        it.post.type = 'text';
                        it.post.data = 'Hello from the other side';
                    } else {
                        it.id = 'img' + j;
                        it.post.type = 'img';
                        it.post.data = 'client/assets/img/moon-from-earth.png';
                    }
                    it.likes = Math.floor((Math.random() * 100) + 1);
                    it.comments = Math.floor((Math.random() * 100) + 1);
                    it.shares = Math.floor((Math.random() * 100) + 1);
                    it.quotient = Math.floor((Math.random() * 9) + 1);

                    /*switch(j+1) {
                        case 1:
                            it.background = "red";
                            it.span.row = it.span.col = 2;
                            break;
                        case 2: it.background = "green";         break;
                        case 3: it.background = "darkBlue";      break;
                        case 4:
                            it.background = "blue";
                            it.span.col = 2;
                            break;
                        case 5:
                            it.background = "yellow";
                            it.span.row = it.span.col = 2;
                            break;
                        case 6: it.background = "pink";          break;
                        case 7: it.background = "darkBlue";      break;
                        case 8: it.background = "purple";        break;
                        case 9: it.background = "deepBlue";      break;
                        case 10: it.background = "lightPurple";  break;
                        case 11: it.background = "yellow";       break;
                    }*/
                    results.push(it);
                }
                return results;
            };
            wvm.getRowspan = function(image,size){

                switch (size) {
                    case 'xs':
                        return (image.post.type == 'text') ? 32 : 64;
                    case 'sm':
                        return (image.post.type == 'text') ? 16 : 32;
                    case 'md':
                        return (image.post.type == 'text') ? 10 : 28;
                    case 'lg':
                        return (image.post.type == 'text') ? 10 : 21;
                    case 'xl':
                        return (image.post.type == 'text') ? 8 : 13;
                }
            };

            wvm.getColspan = function(image,size){

                switch (size) {
                    case 'xs':
                        return 64;
                    case 'sm':
                        return 32;
                    case 'md':
                        return 21;
                    case 'lg':
                        return 21;
                    case 'xl':
                        return 12;
                }
            };
        }]);
})();
