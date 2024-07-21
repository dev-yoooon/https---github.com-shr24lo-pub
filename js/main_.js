$(function () {


    // ---------------------------헤더 스크롤시 배경색----------------------------------//
    $(window).scroll(function () {

        // headerBg();

    });

    // headerBg();


    function headerBg() {
        let scrollTop = $(document).scrollTop();
        let boxTop = $(".s_sub_containter").offset().top - 100;


        if (scrollTop <= boxTop) {
            $("header").css({
                // "background": "unset",
                // "borderBottom": "1px solid rgba(255,255,255,0.35)",
                // "boxShadow": "none"
            });
        } else {
            $("header").css({
                // "background": "#f9f2e0",
                // "borderBottom": "none",
                // "boxShadow": "0 0 5px rgba(0,0,0,0.15)"
            });

        }

    };

    // ------------------------헤더 스크롤시 배경색 종료-------------------------------//


    // --------------------------------a tag 기능 차단 -----------------------------------//
    // $(".main_mnu>li>a ").click(function (e) {
    //     e.preventDefault();
    // })
    $(".mo_main_mnu>li>a ").click(function (e) {
        //e.preventDefault();
    })
    // ----------------------------a tag 기능 차단 종료----------------------------------//


    // ----------------------------Top Button-------------------------------------------//
    $('#top_btn, #top_btn_m').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    // -------------------------Top Button---------------------------------------------//


    // ----------------------------헤더 메뉴 드롭/다운----------------------------------//
    $(".nav").mouseover(function (e) {
        $(".sub_mnu").stop().slideDown();
        $(".sub_mnu_bg").stop().slideDown();
    })
    $("header").mouseleave(function () {
        $(".sub_mnu").stop().slideUp();
        $(".sub_mnu_bg").stop().slideUp();
    })

    // -------------------------헤더 메뉴 드롭/다운 종료-------------------------------//


    // ------------------------------모바일 메뉴 클릭 ---------------------------------//
    // $("#mo_btn").click(function () {
    //
    //     if ($("#mo_btn").data("mnu") == 0) {
    //         $(".mo_mnu_box").stop().slideDown();
    //         $("header").css({
    //             // "background": "#fff",
    //             // "borderBottom": "none"
    //         });
    //         $("#mo_btn i").attr('class', 'xi-close');
    //         $(this).data("mnu", 1);
    //     } else {
    //         $(".mo_mnu_box").stop().slideUp();
    //         $("header").css({
    //             // "background": "unset",
    //             // "borderBottom": "1px solid rgba(255,255,255,0.35)"
    //         });
    //         $("#mo_btn i").attr('class', 'xi-bars');
    //         $(this).data("mnu", 0);
    //     }
    // })
    // $(".mo_main_mnu li").click(function () {
    //     $(this).children(".mo_sub_mnu").stop().slideToggle();
    //     $(this).children("a").toggleClass("active");
    // })

    $(document).ready(function()
    {
      var accordion_tab = $('.mo_main_mnu > li > a'), accordion_content = $('.mo_sub_mnu');

      accordion_tab.on('click', function(e)
      {
        // Disable tab links
        // e.preventDefault();

        // Remove the active class
        accordion_tab.removeClass('active');

        accordion_content.slideUp('normal');

        if($(this).next().is(':hidden') == true)
        {
          $(this).addClass('active');
          $(this).next().slideDown('normal');
        }
        else
        {
        }
      });
    });

    // mobile gnb
    $(document).ready(function(){
        $('#mo_btn').click(function(){
            $('.mo_mnu_box').addClass('is-active');
            $('header').addClass('is-active');
        });
        $('.mobile-close').click(function(){
            $('.mo_mnu_box').removeClass('is-active');
            $('header').removeClass('is-active');
        });
    });

    // ---------------------------모바일 메뉴 클릭 종료-------------------------------//


    // -------------------------------메인페이지 슬라이드-------------------------------//
//     $('.slide').slick({
//           autoplay: true,
//           autoplaySpeed: 2000,
//           prevArrow: $('#arrow_prev'),
//           nextArrow: $('#arrow_next'),
//           fade: true,
//           speed: 2000,
//           dots:true,
//     });
//     $('.slide').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
//           txtUp(1);
//     });

    txtUp();

    function txtUp(dlt) {
        gsap.fromTo(".slide_txt", {
            x: -500,
            // y: 200
        }, {
            delay: dlt,
            duration: 2,
            x: 0,
            y: 0
        });
    }

    $('.therapist_slide').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow: $('#therapist_prev_arrow'),
        nextArrow: $('#therapist_next_arrow'),
        // speed: 500,
        // dots:true,
    })

    $('.photo_wrap').slick({
        // autoplay: true,
        // autoplaySpeed: 2000,
        prevArrow: $('#interior_prev_arrow'),
        nextArrow: $('#interior_next_arrow'),
        // speed: 500,
        // dots:true,
        infinite: true,
        // speed: 300,
        slidesToShow: 1,
        // centerMode: true,
        variableWidth: true
    })

    // ---------------------------메인페이지 슬라이드 종료-----------------------------//


    // ------------------------------스크롤 트리거--------------------------------//
    gsap.from(".s_tit_box ", {
        scrollTrigger: {
            trigger: ".s_tit_box ",
            scrub: 1,
            start: "0px 85%",
            end: "top 65%",
            toggleActions: "restart pause reverse pause",
        },
        opacity: 0,
        y: -100,
        duration: 2
    });

    gsap.from(".layer1", {
        scrollTrigger: {
            trigger: ".layer1",
            scrub: 1,
            start: "-50px 85%",
            end: "top 65%",
            toggleActions: "restart pause reverse pause",
        },
        opacity: 0,
        x: -300,
        duration: 3
    });
    gsap.from(".layer2", {
        scrollTrigger: {
            trigger: ".layer2",
            scrub: 1,
            start: "-50px 85%",
            end: "top 65%",
            toggleActions: "restart pause reverse pause",
        },
        opacity: 0,
        x: 200,
        duration: 3
    });
    gsap.from(".layer3", {
        scrollTrigger: {
            trigger: ".layer3",
            scrub: 1,
            start: "-500px 98%",
            end: "top 65%",
            toggleActions: "restart pause reverse pause",
        },
        opacity: 0,
        x: 200,
        y: 200,
        duration: 3
    });

    gsap.from(".exp_inner", {
        scrollTrigger: {
            trigger: ".exp_inner",
            scrub: 1,
            start: "-50px 85%",
            end: "top 65%",
            toggleActions: "restart pause reverse pause",
        },
        opacity: 0,
        x: 300,
        duration: 3
    });

    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".card",
            scrub: 1,
            start: "-50px 85%",
            end: "top 65%",
            toggleActions: "restart pause reverse pause",
        },
        opacity: 0,
        y: 300,
        duration: 3
    });


    gsap.from(".p_mnu", {
        opacity: 0,
        y: 100,
        duration: 1
    });

    // ---------------------------스크롤 트리거 종료-----------------------------//


    // ------------------------------시설안내 영역 -------------------------------//
    $('.facility_list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('#arrow_prev'),
        nextArrow: $('#arrow_next'),
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // ---------------------------시설안내 영역 종료-----------------------------//


    // ------------------- 센터소개 - 이미지 탭메뉴-----------------------------//


    $('.slide_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('#arrows_prev1'),
        nextArrow: $('#arrows_next1'),
        // asNavFor: '.slide_tab',
        dots: false,
    });

    $('.slide_tab').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: $('#arrows_prev2'),
        nextArrow: $('#arrows_next2'),
        asNavFor: '.slide_main',
        dots: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 560, //width 480 이상부터
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: false,
            }
        }] //반응형, breakpoint: 반응형 구간, settings: 반응형 구간에 따른 설정 변경
    });
    // ----------------- 센터소개 - 이미지 탭메뉴//----------------------------//

    // 2406 add modal
    $('.btn-modal').on('click', function(e){
        e.preventDefault();

        $(this).modalOpen();
    });
    $('.btn-modal-close').on('click', function(e){
        e.preventDefault();
        $(this).modalClose();
    })

    if($('[data-scr]').length){
        $('[data-scr]').each(function(i, el){
            const $this = $(this);
    
            gsap.to($this, {
                scrollTrigger:{
                    trigger:$this,
                    start: "0% 70%",//시작 지점
                    end: "100% 100%",//끝 지점
                    // scrub: 1,//부드러운 스크러빙
                    // markers: true,//개발가이드선
                }, y: 0, x: 0, alpha: 1,duration: .55
            })
        })
    }

})

$.fn.extend({
    modalOpen: function(){
        return this.each(function(){
            const $this = $(this);
            const $modal = $($this.data('modal'));

            $modal.addClass('show');
        })
    },
    modalClose: function(){
        return this.each(function(){
            const $this = $(this);
            const $modal = $this.closest('.modal');
            console.log($modal);
            $modal.removeClass('show');
        })
    }
})