/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */

$(document).ready(function () {
    Logic();

    $(".container").niceScroll({
        cursorcolor: "#fff",
        cursorwidth: 4,
        scrollspeed: 60,
        cursorborderradius: 0,
        mousescrollstep: 40,
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        background: "none",
        cursorborder: "none",
        autohidemode: true,
        boxzoom: false,
        smoothscroll: true,
        zindex: 9999
    });

    // ===========================================================
    //click , mouseenter , mouseleave move event section
    //===========================================================

    $('#loading').on('click',function () {
       $('#loading').fadeOut(700);
    });


    // pop 01 팝업

    $('#pop_01_close, #pop_01_button').on('click',function () {
        $('#pop_01').fadeOut(700);
    });

    $('#pop_01_button, #pop_01_button').on('click',function () {
        $('#pop_01').fadeOut(700);
    });



    // 영상 팝업

    $('#video').on('click',function () {
        $('#pop_video01').fadeIn(700);
    });

    $('#tv').on('click',function () {
        $('#pop_video01').fadeOut(700);
        $('#pop_video02').fadeIn(700);
    });

    $('#video02_close').on('click',function () {
        $('#pop_video02').fadeOut(700);
    });



    // 상품소개 팝업

    $('#shoes').on('click',function () {
        $('#pop_02').fadeIn(700);
    });

    $('#pop_02_close').on('click',function () {
        $('#pop_02').fadeOut(700);
    });


    // 브랜드 소개 팝업
    $('#frame').on('click',function () {
        $('#pop_03').fadeIn(700);
    });

    $('#pop_03').on('click',function () {
        $('#pop_03').fadeOut(700);
    });



    // 스위치 01
    $('#section02 .switch01').on('click',function () {
        $('#light > div').fadeIn(700);
        $('#section02 .switch01').addClass('on');
    });


    // 스위치 02
    $('#section03 .switch02').on('click',function () {
        $('#lamp > div').fadeIn(700);
        $('#section03 .switch02').addClass('on');
    });



    // 이벤트 슬라이드
    $('#pop05_slides').slidesjs({
        width:715,
        height:630,
        play: {
            active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "slide", // 효과, slide/fade
            auto: false, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: false, // 버튼 활성화/비활성화
            effect: "slide"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: true,
            effect: "slide"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });


//==============================================================
});


$(function () {

    // 메뉴부분
    $('.naviJs > li > a, .topBtn').click(function () {
        var posX = $($(this).attr('href')).position().left;
        $('.container').stop().animate({'scrollLeft': posX}, 1200, 'easeInOutExpo');
        return false;
    });

    // 스크롤 이벤트
    $('.container').scroll(function () {
        var scrollLeft = $('.container').scrollLeft();
        $('.posNum').text(scrollLeft); // 스크롤값



        // =========================
        // scroll event section
        //==========================


        // 자전거 이동

        if(scrollLeft >= 0){  //스크롤 값
            $('#bike01').addClass('on');

        }else{
            $('#bike01').removeClass('on');
        }

        if(scrollLeft >= 1400){  //스크롤 값
            $('#bike02').addClass('on');

        }else{
            $('#bike02').removeClass('on');
        }

        if(scrollLeft >= 2500){  //스크롤 값
            $('#bike03').addClass('on');

        }else{
            $('#bike03').removeClass('on');
        }





        //===================================================================
        // 메뉴 활성화
        $('.container .main > div').each(function (i) {
            var fastNum = 100; // 메뉴를 빨리 활성화 시키는 값
            var firstX = $('.container .main > div:first').position().left;
            var posX = $(this).position().left;
            if (scrollLeft <= firstX - fastNum) {
                $('.container .main').each(function () {
                    $('li', this).removeClass('on').eq(0).addClass('on');
                })
            } else if (scrollLeft >= posX - fastNum) {
                $('.container .main').each(function () {
                    $('li', this).removeClass('on').eq(i).addClass('on');
                })
            }
        });
    });


});


//===================================================================
// 철문 폴딩






