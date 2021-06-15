
// Card Slider

$(document).ready(function(){
    $(".card-slider")
    .not(".slick-initialized")
    .slick({
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 2000,
        autoplay: true,
        autoplaySpeed:2000,
        arrows: true,
        prevArrow:".slider-btn-left",
        nextArrow:".slider-btn-right",
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

