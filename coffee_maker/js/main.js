//slider
var sliderTop;
var sliderX;

$(document).ready(function(){
    $('.slider-container').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        dots: false,
        arrows: false,
        speed: 150
    });
    $('.slider').on('click', function(){
        $('.dropdown').toggleClass('js-resize-dropdown');
    });
    $('.slider-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.label-container').attr('class','label-container js-move-label');
    });
    $('.slider-container').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.label-container').attr('class','label-container');

        let id = $('.slick-center').attr('id');
        if($('.slick-center').length > 1){
            if($($('.slick-center')[0]).attr('id') == ""){
                id = $($('.slick-center')[1]).attr('id');
            }else{
                id = $($('.slick-center')[0]).attr('id');
            }
        }
        $('.label-text').html(id);
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
        
    }
},50);

