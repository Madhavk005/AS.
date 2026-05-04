$(function () {
    "use strict";

    /***************************
    anchor scroll
    ***************************/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        var target = $($.attr(this, 'href'));
        var offset = 0;
        if ($(window).width() < 1200) {
            offset = 90;
        }
        $('html, body').scrollTop(target.offset().top - offset);
    });

    /***************************
    append
    ***************************/
    $(document).ready(function () {
        $(".mil-arrow").clone().appendTo(".mil-arrow-place");
        $(".mil-dodecahedron").clone().appendTo(".mil-animation");
        $(".mil-lines").clone().appendTo(".mil-lines-place");
        $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
        
        // Hide preloader explicitly since we removed gsap timeline
        $('.mil-preloader').addClass("mil-hidden");
    });

    /***************************
    accordion
    ***************************/
    $('.mil-accordion-menu').on('click', function() {
        var group = $(this).closest('.mil-accordion-group');
        var content = group.find('.mil-accordion-content');
        var symbol = group.find('.mil-symbol');
        var minusElement = group.find('.mil-minus');
        var plusElement = group.find('.mil-plus');

        content.toggle();
        
        if (group.hasClass('mil-active')) {
            group.removeClass('mil-active');
            minusElement.css('opacity', 0);
            plusElement.css('opacity', 1);
            symbol.css('background', 'transparent');
        } else {
            group.addClass('mil-active');
            minusElement.css('opacity', 1);
            plusElement.css('opacity', 0);
            symbol.css('background', 'rgba(255, 152, 0, 1)');
        }
    });

    // initialize accordion state
    $('.mil-accordion-group').each(function() {
        var group = $(this);
        var content = group.find('.mil-accordion-content');
        var minusElement = group.find('.mil-minus');
        var plusElement = group.find('.mil-plus');
        
        content.hide();
        minusElement.css('opacity', 0);
        plusElement.css('opacity', 1);
    });

    /***************************
    back to top
    ***************************/
    var btt = $(".mil-back-to-top .mil-link");
    btt.css({ opacity: 0, pointerEvents: 'none', transition: '0.3s' });
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 300) {
            btt.css({ opacity: 1, pointerEvents: 'all', transform: 'translateX(0)' });
        } else {
            btt.css({ opacity: 0, pointerEvents: 'none' });
        }
    });

    /***************************
     menu
    ***************************/
    $('.mil-menu-btn').on("click", function () {
        $('.mil-menu-btn').toggleClass('mil-active');
        $('.mil-menu').toggleClass('mil-active');
        $('.mil-menu-frame').toggleClass('mil-active');
    });

    /***************************
    main menu
    ***************************/
    $('.mil-has-children a').on('click', function () {
        $('.mil-has-children ul').removeClass('mil-active');
        $('.mil-has-children a').removeClass('mil-active');
        $(this).toggleClass('mil-active');
        $(this).next().toggleClass('mil-active');
    });

    /***************************
    fancybox
    ***************************/
    if ($.fn.fancybox) {
        $('[data-fancybox="gallery"]').fancybox({
            buttons: [
                "slideShow",
                "zoom",
                "fullScreen",
                "close"
            ],
            loop: false,
            protect: true
        });
        $.fancybox.defaults.hash = false;
    }

    /***************************
    sliders (no autoplay/parallax)
    ***************************/
    if (typeof Swiper !== 'undefined') {
        var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>']
        var mySwiper = new Swiper('.mil-reviews-slider', {
            pagination: {
                el: '.mil-revi-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menu[index] || '') + '</span>';
                },
            },
            speed: 0,
            effect: 'slide',
            navigation: {
                nextEl: '.mil-revi-next',
                prevEl: '.mil-revi-prev',
            },
        });

        var swiper1 = new Swiper('.mil-infinite-show', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 0,
            loop: false,
            freeMode: false,
            breakpoints: {
                992: {
                    slidesPerView: 4,
                },
            },
        });

        var swiper2 = new Swiper('.mil-portfolio-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 0,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });

        var swiper3 = new Swiper('.mil-1-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 0,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });

        var swiper4 = new Swiper('.mil-2-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 0,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
            },
        });
    }

});
