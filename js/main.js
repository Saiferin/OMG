$(function () {

   
    // Большой слайдер
    
    $('.big-slider').slick({
        dots: true,
        infinite: false,
       
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',

    });

    // Большой слайдер
    
    $('.car-slider').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-arrow-alt-circle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-arrow-alt-circle-right"></i></button>',
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        },   
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
     $(window).scroll(function() {
            $('.header__title').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });
            $('.header__smalltitle').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.header__smalltitle').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });



            $('.header__titleshadow').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });
            $('.header__titlemain').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.service__titleshadow').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });
            $('.service__titlemain').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });
       

            $('.service__block').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });

            $('.answer__titleshadow').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });
            $('.answer__titlemain').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.answer__text-block').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });

            $('.answer__pic').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.answer__pic1').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.answer__menu').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.btn').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

             $('.news__titleshadow').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });

            $('.news__titlemain').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.btn__news').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });

            $('.team__titleshadow').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.team__titlemain').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });

            $('.client__titleshadow').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInRight");
                }
            });

            $('.client__titlemain').each(function(){
                var imagePos = $(this).offset().top;

                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow+550) {
                    $(this).addClass("fadeInLeft");
                }
            });





    });

    
    
});