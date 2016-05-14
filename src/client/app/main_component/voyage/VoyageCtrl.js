/**
 * Created by ballgobina on 28/3/2016.
 */

angular.module('seasafe')
    .controller('VoyageCtrl1',['$window','$location','$anchorScroll', '$http', function VoyageCtrl ($window, $location, $anchorScroll, $http) {
        var vm = this;
        vm.isHuman = true;
        vm.isParcel = true;
        vm.data = [];
        vm.noms = ['Pression atmosphérique',"Niveau d'oxygen",'Efficence Moteur','Niveau battery', 'RPM'];
        vm.fnAtmos = function() {
            $http({
                method: 'GET',
                url: 'server/webservice/pressure.php'
            }).then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                vm.data = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        };
        setInterval(function(){
            vm.fnAtmos();
        }, 2000);
        var $sidescroll	= (function() {

            // the row elements
            var $rows			= $('#ss-container > div.ss-row'),
            // we will cache the inviewport rows and the outside viewport rows
                $rowsViewport, $rowsOutViewport,
            // navigation menu links
                $links			= $('#ss-links > a'),
            // the window element
                $win			= $('#divVoyage'),
            // $win			= $('#divVoyage'),
            // we will store the window sizes here
                winSize			= {},
            // used in the scroll setTimeout function
                anim			= false,
            // page scroll speed
                scollPageSpeed	= 50 ,
            // page scroll easing
                scollPageEasing = 'easeInOutExpo',
            // perspective?
                hasPerspective	= true,

                perspective		= hasPerspective && Modernizr.csstransforms3d,
            // perspective		= true,
            // initialize function
                init			= function() {
                    $rows			= $('#ss-container > div.ss-row');
                    // get window sizes
                    getWinSize();

                    // initialize events
                    initEvents();
                    // define the inviewport selector
                    defineViewport();
                    // gets the elements that match the previous selector
                    setViewportRows();
                    // if perspective add css
                    if( perspective ) {
                        $rows.css({
                            '-webkit-perspective'			: 600,
                            '-webkit-perspective-origin'	: '50% 0%'
                        });
                    }
                    // show the pointers for the inviewport rows
                    $rowsViewport.find('a.ss-circle').addClass('ss-circle-deco');
                    // set positions for each row
                    placeRows();

                },
            // defines a selector that gathers the row elems that are initially visible.
            // the element is visible if its top is less than the window's height.
            // these elements will not be affected when scrolling the page.
                defineViewport	= function() {

                    $.extend( $.expr[':'], {

                        inviewport	: function ( el ) {

                            if ( $(el).offset().top < winSize.height ) {
                                return true;
                            }
                            return false;
                        }

                    });

                },
            // checks which rows are initially visible
                setViewportRows	= function() {

                    $rowsViewport 		= $rows.filter(':inviewport');
                    $rowsOutViewport	= $rows.not( $rowsViewport )

                },
            // get window sizes
                getWinSize		= function() {

                    winSize.width	= $win.width();
                    winSize.height	= $win.height();
                },
            // initialize some events
                initEvents		= function() {

                    // navigation menu links.
                    // scroll to the respective section.
                    $links.on( 'click.Scrolling', function( event ) {

                        // scroll to the element that has id = menu's href
                        $('html, body').stop().animate({
                            scrollTop: $( $(this).attr('href') ).offset().top
                        }, scollPageSpeed, scollPageEasing );

                        return false;

                    });

                    $(window).on({
                        // on window resize we need to redefine which rows are initially visible (this ones we will not animate).
                        'resize.Scrolling' : function( event ) {
                            // get the window sizes again
                            getWinSize();
                            // redefine which rows are initially visible (:inviewport)
                            setViewportRows();
                            // remove pointers for every row
                            $rows.find('a.ss-circle').removeClass('ss-circle-deco');
                            // show inviewport rows and respective pointers
                            $rowsViewport.each( function() {

                                $(this).find('div.ss-left')
                                    .css({ left   : '0%' })
                                    .end()
                                    .find('div.ss-right')
                                    .css({ right  : '0%' })
                                    .end()
                                    .find('a.ss-circle')
                                    .addClass('ss-circle-deco');

                            });

                        },
                        // when scrolling the page change the position of each row
                        'scroll.Scrolling' : function( event ) {
                            // set a timeout to avoid that the
                            // placeRows function gets called on every scroll trigger
                            if( anim ) return false;
                            anim = true;
                            setTimeout( function() {

                                placeRows();
                                anim = false;

                            }, 10 );

                        }
                    });
                    $( ".cube" ).on({
                        // on window resize we need to redefine which rows are initially visible (this ones we will not animate).
                        'resize.Scrolling' : function( event ) {
                            // get the window sizes again
                            getWinSize();
                            // redefine which rows are initially visible (:inviewport)
                            setViewportRows();
                            // remove pointers for every row
                            $rows.find('a.ss-circle').removeClass('ss-circle-deco');
                            // show inviewport rows and respective pointers
                            $rowsViewport.each( function() {

                                $(this).find('div.ss-left')
                                    .css({ left   : '0%' })
                                    .end()
                                    .find('div.ss-right')
                                    .css({ right  : '0%' })
                                    .end()
                                    .find('a.ss-circle')
                                    .addClass('ss-circle-deco');

                            });

                        },
                        // when scrolling the page change the position of each row
                        'scroll.Scrolling' : function( event ) {
                            // set a timeout to avoid that the
                            // placeRows function gets called on every scroll trigger
                            $('.menuScroll').animate({top:$(this).scrollTop()+30},10,"linear");
                            $('.side').animate({top:$(this).scrollTop()},0,"linear");
                            $('.back').animate({top:$(this).scrollTop()+($(window).height()/2)},0,"linear");
                            if( anim ) return false;
                            anim = true;
                            setTimeout( function() {

                                placeRows();
                                anim = false;

                            }, 10 );

                        }
                    });
                },
            // sets the position of the rows (left and right row elements).
            // Both of these elements will start with -50% for the left/right (not visible)
            // and this value should be 0% (final position) when the element is on the
            // center of the window.
                placeRows		= function() {

                    // how much we scrolled so far
                    var winscroll	= $win.scrollTop(),
                    // the y value for the center of the screen
                        winCenter	= winSize.height + winscroll;

                    // for every row that is not inviewport
                    $rowsOutViewport.each( function(i) {
//console.log($(this));
                        var $row	= $(this),
                        // the left side element
                            $rowL	= $row.find('div.ss-left'),
                        // the right side element
                            $rowR	= $row.find('div.ss-right');
                        // top value
                        if($window.innerHeight >= 1500 && $window.innerHeight <= 1700){
                            var rowT	= $row.offset().top - 580;//Arvind set transition start point
                        }
                        else if($window.innerHeight >= 1700 && $window.innerHeight <= 1999){
                            var rowT	= $row.offset().top - 1280;
                        }
                        else if($window.innerHeight >= 2000){
                            var rowT	= $row.offset().top - 2050;//Arvind set transition start point
                        }
                        else {
                            var rowT	= $row.offset().top - 580;//Arvind set transition start point
                        }

                        // hide the row if it is under the viewport
                        if( rowT > winSize.height + winscroll ) {

                            if( perspective ) {

                                $rowL.css({
                                    '-webkit-transform'	: 'translate3d(-50%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)',
                                    'opacity'			: 0
                                });
                                $rowR.css({
                                    '-webkit-transform'	: 'translate3d(50%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)',
                                    'opacity'			: 0
                                });

                            }
                            else {

                                $rowL.css({ left 		: '-25%' });
                                $rowR.css({ right 		: '-25%' });

                            }

                        }
                        // if not, the row should become visible (0% of left/right) as it gets closer to the center of the screen.
                        else {

                            // row's height
                            var rowH	= $row.height(),
                            // the value on each scrolling step will be proporcional to the distance from the center of the screen to its height
                                factor 	= ( ( ( rowT + rowH / 2 ) - winCenter ) / ( winSize.height / 2 + rowH / 2 ) ),
                            // value for the left / right of each side of the row.
                            // 0% is the limit
                                val		= Math.max( factor * 5, 0 );
                            if( val <= 0 ) {

                                // when 0% is reached show the pointer for that row
                                if( !$row.data('pointer') ) {
                                    $row.data( 'pointer', true );
                                    $row.find('.ss-circle').addClass('ss-circle-deco');
                                }
                            }
                            else {
                                // the pointer should not be shown
                                if( $row.data('pointer') ) {

                                    $row.data( 'pointer', false );
                                    $row.find('.ss-circle').removeClass('ss-circle-deco');

                                }

                            }

                            // set calculated values
                            if( perspective ) {

                                var	t		= Math.max( factor * 75, 0 ),
                                    r		= Math.max( factor * 90, 0 ),
                                    o		= Math.min( Math.abs( factor - 1 ), 1 );

                                $rowL.css({
                                    '-webkit-transform'	: 'translate3d(-' + t + '%, 0, 0) rotateY(-' + r + 'deg) translate3d(-' + t + '%, 0, 0)',
                                    'opacity'			: o
                                });
                                $rowR.css({
                                    '-webkit-transform'	: 'translate3d(' + t + '%, 0, 0) rotateY(' + r + 'deg) translate3d(' + t + '%, 0, 0)',
                                    'opacity'			: o
                                });

                            }
                            else {
                                $rowL.css({ left 	: - val + '%' });
                                $rowR.css({ right 	: - val + '%' });
                            }
                        }
                    });

                };

            return { init : init };

        })();


        this.arrayData =    { brief : [
            {b_img_class:"ss-circle-team", title_img:"Résumé",    descrip:"Une initiative de la Webcup Aeronautics and Space administration", title_descript:"WASA", class:"ss-medium"},
            {b_img_class:"ss-circle-1", title_img:"",           descrip:"Construit comme service commercial accessible à tous", title_descript:"", class:"ss-medium"},
            {b_img_class:"ss-circle-2", title_img:"",    descrip:"Reservation des voyages s'effectura très prochainement ", title_descript:"", class:"ss-large"}
        ],
            operation : [
                {b_img_class:"ss-circle-hub", title_img:"Comfort",   descrip:"Nous avons tout mis en oeuvre pour  vous: la chambre, loisirs et petite sortie en espace", title_descript:"", class:"ss-medium"},
                {b_img_class:"ss-circle-entry", title_img:"Sortie espace", descrip:"Des petites sorties dans l'espace possible avec nos pods", title_descript:"", class:"ss-medium"},
                {b_img_class:"ss-circle-voyage", title_img:"Vue panoramique",descrip:"Profitez infiniment durant votre séjour d'une vue impressionante sur notre planète.", title_descript:"", class:"ss-medium"}
            ],
        contribution : [
            {b_img_class:"ss-circle-4", title_img:"Sécurité",   descrip:"Des mesures pour garantir la sécurité du départ jusqu'au l'arriver.", title_descript:"", class:"ss-medium"},
            {b_img_class:"ss-circle-5", title_img:"", descrip:"Un pod de secours toujours disponible et paré au lancement au cas ou la logiciel detect une anomalie", title_descript:"", class:"ss-medium"}
        ]};

        this.arrayParcels =    { brief : [
            {b_img_class:"ss-circle-team", title_img:"Conception",    descrip:"L'idée c'est de pouvoir passer d'un île à un autre en toute securité et rapidement.", title_descript:"FastLap Limitée", class:"ss-medium"},
            {b_img_class:"ss-circle-1", title_img:"Vitesse",           descrip:"Construite avec un 200YB / s ( yottaoctet ) capacité de câble , il peut traiter simultanément un transfert de 1 millon personnes par seconde", title_descript:"", class:"ss-medium"},
            {b_img_class:"ss-circle-2", title_img:"îles",    descrip:"Ce moyen va rélier les sept îles d'ocean Indien notamment Maurice, Rodrigues, Reunion, Grands Comores, Mayotte, Seychelles et Madagascar", title_descript:"", class:"ss-large"},
            {b_img_class:"ss-circle-3", title_img:"Protocols", descrip:"Ce service est regularisé et mis fonctionnel par la collaboration de nos sept îles.", title_descript:"", class:"ss-medium"}
        ],
            operation : [
                {b_img_class:"ss-circle-hub", title_img:"Emplacement",   descrip:"Veuillez vous rendre dans un de nos centre d'opération situant sur votre île", title_descript:"", class:"ss-medium"},
                {b_img_class:"ss-circle-entry", title_img:"", descrip:"Marchez à travers le portail normalement", title_descript:"Entrée", class:"ss-medium"},
                {b_img_class:"ss-circle-voyage", title_img:"",descrip:"Notre système AI récuperas automatiquement les infos requis comme la destination, l'objectif du voyage et vas construire", title_descript:"Teleportation", class:"ss-medium"},
                {b_img_class:"ss-circle-bill", title_img:"",  descrip:"Avec les données récuperer par le AI, notre système débitera directement le montant requis de votre compte bancaire", title_descript:"Payment", class:"ss-medium"},
                {b_img_class:"ss-circle-exit", title_img:"",  descrip:"La téléportation prendras approx 2s et vous vous retrouverez à votre destination, Simple et Efficace", title_descript:"Sortie", class:"ss-medium"}
            ]};
        /*!
         * classie - class helper functions
         * from bonzo https://github.com/ded/bonzo
         *
         * classie.has( elem, 'my-class' ) -> true/false
         * classie.add( elem, 'my-new-class' )
         * classie.remove( elem, 'my-unwanted-class' )
         * classie.toggle( elem, 'my-class' )
         */

        /*jshint browser: true, strict: true, undef: true */
        /*global define: false */

        ( function( window ) {

// class helper functions from bonzo https://github.com/ded/bonzo

            function classReg( className ) {
                return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
            }

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
            var hasClass, addClass, removeClass;

            if ( 'classList' in document.documentElement ) {
                hasClass = function( elem, c ) {
                    return elem.classList.contains( c );
                };
                addClass = function( elem, c ) {
                    elem.classList.add( c );
                };
                removeClass = function( elem, c ) {
                    elem.classList.remove( c );
                };
            }
            else {
                hasClass = function( elem, c ) {
                    return classReg( c ).test( elem.className );
                };
                addClass = function( elem, c ) {
                    if ( !hasClass( elem, c ) ) {
                        elem.className = elem.className + ' ' + c;
                    }
                };
                removeClass = function( elem, c ) {
                    elem.className = elem.className.replace( classReg( c ), ' ' );
                };
            }

            function toggleClass( elem, c ) {
                var fn = hasClass( elem, c ) ? removeClass : addClass;
                fn( elem, c );
            }

            var classie = {
                // full names
                hasClass: hasClass,
                addClass: addClass,
                removeClass: removeClass,
                toggleClass: toggleClass,
                // short names
                has: hasClass,
                add: addClass,
                remove: removeClass,
                toggle: toggleClass
            };

// transport
            if ( typeof define === 'function' && define.amd ) {
                // AMD
                define( classie );
            } else {
                // browser global
                window.classie = classie;
            }

        })( window );

        /**
         * cbpSplitLayout.js v1.0.0
         * http://www.codrops.com
         *
         * Licensed under the MIT license.
         * http://www.opensource.org/licenses/mit-license.php
         *
         * Copyright 2013, Codrops
         * http://www.codrops.com
         */
        (function() {

            // http://stackoverflow.com/a/11381730/989439
            function mobilecheck() {
                var check = false;
                (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
                return check;
            }

            var splitlayout = document.getElementById( 'splitlayout' ),
                leftSide = splitlayout.querySelector( 'div.intro > div.side-left' ),
                rightSide = splitlayout.querySelector( 'div.intro > div.side-right' ),
                pageLeft = splitlayout.querySelector( 'div.page-left' ),
                pageRight = splitlayout.querySelector( 'div.page-right' ),
                eventtype = mobilecheck() ? 'touchstart' : 'click',
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                },
            transEndEventName = transEndEventNames['transition' ];

            function init() {
                if( mobilecheck() ) {
                    classie.add( splitlayout, 'mobile-layout' );
                }
                classie.add( splitlayout, 'reset-layout' );

                leftSide.querySelector( 'div.intro-content' ).addEventListener( eventtype, function( ev ) {
                    vm.isHuman = true;
                    vm.isParcel=false;
                    vm.fnHuman();
                    $('.intro-content').css({opacity:0});
                    reset();
                    classie.add( splitlayout, 'open-left' );
                } );

                rightSide.querySelector( 'div.intro-content' ).addEventListener( eventtype, function( ev ) {
                    vm.isParcel = true;
                    vm.isHuman = true;
                    vm.fnParcels();
                    reset();
                    classie.add( splitlayout, 'open-right' );
                } );

                // back to intro
                // after transition ends:
                var onEndTransFn = function() {
                        this.removeEventListener( transEndEventName, onEndTransFn );
                        classie.add( splitlayout, 'reset-layout' );
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                    },
                    backToIntro = function( ev ) {
                        ev.preventDefault();
                        ev.stopPropagation();
                        var dir = classie.has( ev.target, 'back-right' ) ? 'left' : 'right',
                            page = dir === 'right' ? pageRight : pageLeft;
                        classie.remove( splitlayout, 'open-' + dir );
                        classie.add( splitlayout, 'close-' + dir );
                        $('.intro-content').css({opacity:1});
                        page.addEventListener( transEndEventName, onEndTransFn );
                    };

                splitlayout.querySelector( 'a.back-left' ).addEventListener( eventtype, backToIntro );
                splitlayout.querySelector( 'a.back-right' ).addEventListener( eventtype, backToIntro );
            }

            function reset() {
                classie.remove( splitlayout, 'close-right' );
                classie.remove( splitlayout, 'close-left' );
                classie.remove( splitlayout, 'reset-layout' );
            }

            init();

        })();

        vm.fnHuman = function(){
            window.setTimeout ( function() { $sidescroll.init(); }, 0);
        };

        vm.fnParcels = function(){
            window.setTimeout ( function() { $sidescroll.init();}, 0);
        };
        vm.fnScroll = function(id){
            if(id == 1) {
                $('.cube').animate({scrollTop: '+='+$('#foncIntro').offset().top+'px'}, 3000);
            }
            else if(id == 2) {
                $('.cube').animate({scrollTop: '+='+$('#foncHuman').offset().top+'px'}, 5000);
            }
            else if(id == 3) {
                $('.cube').animate({scrollTop: '+='+$('#foncContrib').offset().top+'px'}, 6000);
            }
        }
    }]);