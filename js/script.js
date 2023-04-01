$(document).ready(function(){

    $('#good').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText:['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        navSpeed:1400,
        smartSpeed:700,
        mouseDrag:true,
        slideBy:1,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })

    $('#ok').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        autoplay:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    $('#solid').owlCarousel({
        loop:true,
        margin:30,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })

    
});

$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
    if (scroll >= 100)
    {
        sticky.addClass('fixed');
    }
    else
    {
         sticky.removeClass('fixed');
    }
  });
