//slider
var sliderTop;
var sliderX;


$(document).ready(function(){
    $('.slider-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        dots: false,
        arrows: false,
        speed: 150
    });
    $('.slider').on('mousedown', function(){
        console.log("bin da");
    });
    $('.slider-container').on('afterChange', function(event, slick, currentSlide, nextSlide){
        console.log(event.currentTarget);
    });
    sliderTop = $('.slick-center').offset().top;
    sliderX = $('.slick-center').offset().left;
});

setInterval(function(){ 
    var slides = $('.slider-elem')
    for(var i  = 0; i < slides.length; i++){
        let x = sliderX - $(slides[i]).offset().left;
        let newTop = Math.pow(Math.abs(x),2)/1500 + sliderTop;
        $(slides[i]).offset({ top: newTop});
    }
},20);

