(function() {

    var $main = $('#pt-main'),
        $pages = $('#pt-main').children('div.pt-page'),
        animcursor = 1,
        pagesCount = $pages.length,
        current = 0,
        isAnimating = false,
        endCurrPage = false,
        endNextPage = false,
        animEndEventNames = {
        'WebkitAnimation' : 'webkitAnimationEnd',
        'OAnimation' : 'oAnimationEnd',
        'msAnimation' : 'MSAnimationEnd',
        'animation' : 'animationend'
    },
    // animation end event name
        animEndEventName = animEndEventNames[ Modernizr.prefixed('animation')],
    // support css animations
        support = Modernizr.cssanimations,
        animations = {
        max : 67
    };

    function init() {

        $pages.each(function() {
            var $page = $(this);
            $page.data('originalClassList', $page.attr('class'));
        });

        $pages.eq(current).addClass('pt-page-current');

        
        $('#dl-menu a').click(function(){
            nextPage($(this).data('animation'));
            console.log(arguments);
        });
    }

    function nextPage(options) {
        var animation = (options.animation) ? options.animation : options;

        if (isAnimating) {
            return false;
        }

        isAnimating = true;

        var $currPage = $pages.eq(current);

        if ( typeof options.showPage != 'undefined') {
            if (options.showPage < pagesCount - 1) {
                current = options.showPage;
            } else {
                current = 0;
            }
        } else {
            if (current < pagesCount - 1) {++current;
            } else {
                current = 0;
            }
        }

        var $nextPage = $pages.eq(current).addClass('pt-page-current'),
            outClass = '',
            inClass = '';

        switch( animation ) {

        case 1:
            outClass = 'pt-page-rotateCubeLeftOut';
            inClass = 'pt-page-rotateCubeLeftIn';
            break;
        case 2:
            outClass = 'pt-page-rotateCubeRightOut';
            inClass = 'pt-page-rotateCubeRightIn';
            break;
        case 3:
            outClass = 'pt-page-rotateCubeTopOut';
            inClass = 'pt-page-rotateCubeTopIn';
            break;
        case 4:
            outClass = 'pt-page-rotateCubeBottomOut';
            inClass = 'pt-page-rotateCubeBottomIn';
            break;

        }

        $currPage.addClass(outClass).on(animEndEventName, function() {
            $currPage.off(animEndEventName);
            endCurrPage = true;
            if (endNextPage) {
                onEndAnimation($currPage, $nextPage);
            }
        });

        $nextPage.addClass(inClass).on(animEndEventName, function() {
            $nextPage.off(animEndEventName);
            endNextPage = true;
            if (endCurrPage) {
                onEndAnimation($currPage, $nextPage);
            }
        });

        if (!support) {
            onEndAnimation($currPage, $nextPage);
        }

    }

    function onEndAnimation($outpage, $inpage) {
        endCurrPage = false;
        endNextPage = false;
        resetPage($outpage, $inpage);
        isAnimating = false;
    }

    function resetPage($outpage, $inpage) {
        $outpage.attr('class', $outpage.data('originalClassList'));
        $inpage.attr('class', $inpage.data('originalClassList') + ' pt-page-current');
    }

    init();

    return {
        init : init,
        nextPage : nextPage
    };

})();
