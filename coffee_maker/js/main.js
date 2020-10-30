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
    var slides = $('.slider-elem');
    for(var i  = 0; i < slides.length; i++){
        let x = sliderX - $(slides[i]).offset().left;
        let newTop = Math.pow(Math.abs(x),2)/1700 + sliderTop + 20;
        $(slides[i]).offset({ top: newTop});    
    }
},10);

setInterval(function(){ 
    var slides = $('.slider-child');
    var parents = $('.slider-elem');
    for(var i  = 0; i < slides.length; i++){
        let x = sliderX - $(slides[i]).offset().left;
        var offset = Math.abs(x)/15;
        $(slides[i]).css("width", 200 - offset);
        $(slides[i]).css("height", 200 - offset);
        let sliderLeft = $(parents[i]).offset().left;
        let newTop = Math.pow(Math.abs(x),2)/1700 + sliderTop + 20;
        $(slides[i]).offset({ top: newTop + offset/2, left: sliderLeft + offset/2});
    }
},50);

