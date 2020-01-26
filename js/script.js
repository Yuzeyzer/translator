$(document).ready(function(){
    $('.mobile__btn').on('click', function(){
        $(this).toggleClass('mobile__btn_active');
        $('.nav-list').toggleClass('nav-list-active')
    })
    $('.list-items').on('click', function(){
        $('.nav-list').removeClass('nav-list-active');
        $('.mobile__btn').removeClass('mobile__btn_active');
    })
    $(".hero__carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
    });
    $(".clients").owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        responsive: {
            1024: {
                items:4
            },
            746: {
                items:3
            },
            576: {
                items:2
            },
            0: {
                items:1
            }
        }
    });
});