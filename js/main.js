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

//포토샵 원형그래프
$(function () {
    var perNum1 = 80;
    $('.second.circle1').circleProgress({
        value: perNum1 / 100,
        startAngle: 300,
        size: 84,
        fill: {
            color: "#494949"
        },
        animation: {
            duration: 2200,
            easing: "swing"
        },
        lineCap: "butt",
        reverse: true

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(perNum1 * progress) + '<i>%</i>');
    });
});
//일러스트 원형그래프
$(function () {
    var perNum2 = 70;
    $('.second.circle2').circleProgress({
        value: perNum2 / 100,
        startAngle: 300,
        size: 84,
        fill: {
            color: "#494949"
        },
        animation: {
            duration: 2200,
            easing: "swing"
        },
        lineCap: "butt",
        reverse: true

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(perNum2 * progress) + '<i>%</i>');
    });
});
//html 원형그래프
$(function () {
    var perNum3 = 90;
    $('.second.circle3').circleProgress({
        value: perNum3 / 100,
        startAngle: 300,
        size: 84,
        fill: {
            color: "#494949"
        },
        animation: {
            duration: 2200,
            easing: "swing"
        },
        lineCap: "butt",
        reverse: true

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(perNum3 * progress) + '<i>%</i>');
    });
});
//css 원형그래프
$(function () {
    var perNum4 = 90;
    $('.second.circle4').circleProgress({
        value: perNum4 / 100,
        startAngle: 300,
        size: 84,
        fill: {
            color: "#494949"
        },
        animation: {
            duration: 2200,
            easing: "swing"
        },
        lineCap: "butt",
        reverse: true

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(perNum4 * progress) + '<i>%</i>');
    });
});
//js 원형그래프
$(function () {
    var perNum5 = 70;
    $('.second.circle5').circleProgress({
        value: perNum5 / 100,
        startAngle: 300,
        size: 84,
        fill: {
            color: "#494949"
        },
        animation: {
            duration: 2200,
            easing: "swing"
        },
        lineCap: "butt",
        reverse: true

    }).on('circle-animation-progress', function (event, progress) {
        $(this).find('strong').html(Math.round(perNum5 * progress) + '<i>%</i>');
    });
});
