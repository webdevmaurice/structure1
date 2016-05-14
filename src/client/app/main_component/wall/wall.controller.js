/**
 * Created by webcup2016 on 14/05/2016.
 */
(function(){
    angular.module('seasafe')
        .controller('WallController', ['$timeout','$mdMedia','$sce',function($timeout,$mdMedia, $sce){
            var wvm = this;

            /*wvm.posts = buildGridModel({
                icon : "avatar:svg-",
                title: "Svg-",
                background: ""
            });*/
            wvm.filtre = "";
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
                [
                    ['#a657c2','#9c45bb','#8d3da9','#7d3796','#6e3084','#5E2971','#4e225e','#3f1b4c','#2f1539','#200e26'],
                    ['#9421bd','#831da7','#721991','#61167b','#501266','#3F0E50','#2e0a3a','#1d0625','#0c030f','#000000']
                ],
                [
                    ['#d8ab8b','#d29e77','#cb9064','#c58251','#bd753f','#AA6939','#975d33','#84512c','#714626','#5e3a1f'],
                    ['#e17728','#d16a1e','#bb5f1a','#a55417','#8e4814','#783D11','#62320e','#4b260b','#351b08','#1f1004']
                ],
                [
                    ['#4bc2b6','#3eb6aa','#37a398','#319087','#2a7d75','#246A63','#1e5751','#17443f','#11312e','#0a1e1c'],
                    ['#1bbaa9','#18a495','#158e80','#12776c','#0e6158','#0B4B44','#083530','#041f1c','#010808','#000000']
                ],
                [
                    ['#d2d789','#cbd176','#c4ca63','#bcc450','#b3bb3f','#A1A839','#8f9533','#7c822c','#6a6f26','#585c1f'],
                    ['#d4df2a','#c5d01f','#b0b91c','#9ba319','#868d15','#717712','#5c610f','#474b0b','#323508','#1d1e05']
                ]
            ];
            var textsPosts = [
                "Hello from the other side",
                "WSS apelle la terre",
                "Alo? Il y'a quelqu'un?",
                "La terre est belle",
                "Just got up, and having a coffee",
                "Earth is so beautiful",
                "Oops :3",
                "I forgot my breathing mask. but first let me take a selfie",
                "Were those aliens? o.O",
                "Connection is slow here"
            ];

            var imgPosts = [
                "moon-from-earth.png",
                "astro1.jpg",
                "astro2.jpg",
                "astro3.jpg",
                "astro4.jpg",
                "ss1.jpg",
                "ss2.jpg",
                "ss3.jpg"
            ];

            var vidPosts = [
                "https://www.youtube.com/embed/WkYz43qALMU",
                "https://www.youtube.com/embed/CwFs9vxGN4o",
                "https://www.youtube.com/embed/sgzeM9cjBSg",
                "https://www.youtube.com/embed/_gJdhW71ypA",
                "https://www.youtube.com/embed/utCthS3vDxc",
                "https://www.youtube.com/embed/EeSQCWRR1xY",
                "https://www.youtube.com/embed/ZCpAHhnlMUY",
                "https://www.youtube.com/embed/v41xlQB_PY4"
            ];
            wvm.posts = buildGridModel(wvm.postTemplate);

            function buildGridModel(tileTmpl){
                var it, results = [];
                for (var j=0; j<25; j++) {
                    it = angular.merge({},tileTmpl);

                    it.icon  = it.icon + (j+1);
                    it.title = it.title + (j+1);
                    it.span  = { row : 1, col : 1 };
                    it.post.type = Math.floor((Math.random() * 3) + 1);
                    it.poster = Math.floor((Math.random() * 4));
                    var palette = palettes[it.poster];
                    it.quotient = Math.floor((Math.random() * 9));
                    it.fromColor = palette[0][it.quotient];
                    it.toColor = palette[1][it.quotient];
                    it.poster = [
                        "Hashim",
                        "Saif",
                        "Micheal",
                        "Arvind"
                    ][it.poster];
                    if (it.post.type==1) {
                        it.id = 'text' + j;
                        it.post.type = 'text';
                        it.post.data = textsPosts[Math.floor((Math.random() * 9))];
                    } else if (it.post.type==2) {
                        it.id = 'img' + j;
                        it.post.type = 'img';
                        it.post.data = 'client/assets/img/' + imgPosts[Math.floor((Math.random() * 6))];
                    } else if (it.post.type==3){
                        it.id = 'vid' + j;
                        it.post.type = 'vid';
                        it.post.data = $sce.trustAsResourceUrl(vidPosts[Math.floor((Math.random() * 8))]);
                    }
                    it.likes = Math.floor((Math.random() * 100) + 1);
                    it.comments = Math.floor((Math.random() * 100) + 1);
                    it.shares = Math.floor((Math.random() * 100) + 1);
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
