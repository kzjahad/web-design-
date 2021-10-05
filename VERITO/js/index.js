jQuery(document).ready(function($) {

    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: 2000,
        responsive: {
            360: { items: 1 },
            680: { items: 2 },
            1000: { items: 3 },
            1320: { items: 4 }
        }
    });
});
$('.feature-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1320:{
            items:4
        }
    }
})
