//header 스크롤 시 색상 변경
$(function () {
    var $header = $('header'); //헤더를 변수에 넣기
    var $page = $('.main2'); //색상이 변할 부분
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기

    $window.resize(function () { //반응형을 대비하여 리사이즈시 top값을 다시 계산
        pageOffsetTop = $page.offset().top;
    });

    $window.on('scroll', function () { //스크롤시
        var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
        $header.toggleClass('down', scrolled); //클래스 토글
    });
});

/* 발견되면 활성화시키는 라이브러리 시작 */
function ActiveOnVisible__init() {
    $(window).resize(ActiveOnVisible__initOffset);
    ActiveOnVisible__initOffset();

    $(window).scroll(ActiveOnVisible__checkAndActive);
    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__initOffset() {
    $('.active-on-visible').each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.offset().top;
        $node.attr('data-active-on-visible-offsetTop', offsetTop);

        if (!$node.attr('data-active-on-visible-diff-y')) {
            $node.attr('data-active-on-visible-diff-y', '0');
        }

        if (!$node.attr('data-active-on-visible-delay')) {
            $node.attr('data-active-on-visible-delay', '0');
        }
    });

    ActiveOnVisible__checkAndActive();
}

function ActiveOnVisible__checkAndActive() {
    $('.active-on-visible:not(.actived)').each(function (index, node) {
        var $node = $(node);

        var offsetTop = $node.attr('data-active-on-visible-offsetTop') * 1;
        var diffY = parseInt($node.attr('data-active-on-visible-diff-y'));
        var delay = parseInt($node.attr('data-active-on-visible-delay'));

        var callbackFuncName = $node.attr('data-active-on-visible-callback-func-name');

        if ($(window).scrollTop() + $(window).height() + diffY > offsetTop) {
            $node.addClass('actived');

            setTimeout(function () {
                $node.addClass('active');
                if (window[callbackFuncName]) {
                    window[callbackFuncName]($node);
                }
            }, delay);
        }
    });
}

$(function () {
    ActiveOnVisible__init();
})
/* 발견되면 활성화시키는 라이브러리 끝 */


function Circle__run() {
    $(".second.circle").each(function (index, node) {
        var perNum = $(node).attr('circleProgress');

        $(this).circleProgress({
            value: perNum / 100,
            startAngle: 300,
            thickness: 6,
            fill: {
                color: "#494846"
            },
            animation: {
                duration: 2200,
                easing: "swing"
            },
            lineCap: "butt",
            reverse: false

        }).on('circle-animation-progress', function (event, progress) {
            $(this).find('.circle-percent').html(Math.round(perNum * progress) + '<i>%</i>');
        });
    });
}