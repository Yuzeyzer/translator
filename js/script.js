$(document).ready(function(){
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