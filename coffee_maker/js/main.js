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
    $('.slick-center').on('click', function(){
        $('.dropdown').toggleClass('js-resize-dropdown');
        if($('.dropdown').attr('class').includes('js-resize-dropdown') == true){
            $('.slider-container').slick("slickSetOption", "accessibility", false);
            $('.slider-container').slick("slickSetOption", "draggable", false);
            $('.slider-container').slick("slickSetOption", "swipe", false);
            $('.slider-container').slick("slickSetOption", "touchMove", false);
            for(var j = 0; j < $('.slider-elem').length ; j++){
                if($($('.slider-elem')[j]).attr('id') != $($('.slick-center')[0]).attr('id') && $($('.slider-elem')[j]).attr('id') != 'Done'){
                    $($('.slider-child')[j]).css('background-color','#5E7A81');
                }     
            }
        }else{
            $('.slider-container').slick("slickSetOption", "accessibility", true);
            $('.slider-container').slick("slickSetOption", "draggable", true);
            $('.slider-container').slick("slickSetOption", "swipe", true);
            $('.slider-container').slick("slickSetOption", "touchMove", true);
            for(var j = 0; j < $('.slider-elem').length ; j++){
                if($($('.slider-elem')[j]).attr('id') != 'Done'){
                    $($('.slider-child')[j]).css('background-color','#364751');
                }
            }
        }
    });
    $('.slider-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.label-container').attr('class','label-container js-move-label');
        $('.slick-center').on('click', function(){
            $('.dropdown').toggleClass('js-resize-dropdown');
            if($('.dropdown').attr('class').includes('js-resize-dropdown') == true){
                $('.slider-container').slick("slickSetOption", "accessibility", false);
                $('.slider-container').slick("slickSetOption", "draggable", false);
                $('.slider-container').slick("slickSetOption", "swipe", false);
                $('.slider-container').slick("slickSetOption", "touchMove", false);
                for(var j = 0; j < $('.slider-elem').length ; j++){
                    if($($('.slider-elem')[j]).attr('id') != $($('.slick-center')[0]).attr('id') && $($('.slider-elem')[j]).attr('id') != 'Done'){
                        $($('.slider-child')[j]).css('background-color','#5E7A81');
                    }     
                }
            }else{
                $('.slider-container').slick("slickSetOption", "accessibility", true);
                $('.slider-container').slick("slickSetOption", "draggable", true);
                $('.slider-container').slick("slickSetOption", "swipe", true);
                $('.slider-container').slick("slickSetOption", "touchMove", true);
                for(var j = 0; j < $('.slider-elem').length ; j++){
                    if($($('.slider-elem')[j]).attr('id') != 'Done'){
                        $($('.slider-child')[j]).css('background-color','#364751');
                    }
                }
            }
        });
    });
    $('.slider-container').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-center').on('click', function(){
            $('.dropdown').toggleClass('js-resize-dropdown');
            if($('.dropdown').attr('class').includes('js-resize-dropdown') == true){
                $('.slider-container').slick("slickSetOption", "accessibility", false);
                $('.slider-container').slick("slickSetOption", "draggable", false);
                $('.slider-container').slick("slickSetOption", "swipe", false);
                $('.slider-container').slick("slickSetOption", "touchMove", false);
                for(var j = 0; j < $('.slider-elem').length ; j++){
                    if($($('.slider-elem')[j]).attr('id') != $($('.slick-center')[0]).attr('id')){
                        $($('.slider-child')[j]).css('background-color','#5E7A81');
                    }     
                }
            }else{
                $('.slider-container').slick("slickSetOption", "accessibility", true);
                $('.slider-container').slick("slickSetOption", "draggable", true);
                $('.slider-container').slick("slickSetOption", "swipe", true);
                $('.slider-container').slick("slickSetOption", "touchMove", true);
                for(var j = 0; j < $('.slider-elem').length ; j++){
                    if($($('.slider-elem')[j]).attr('id') != 'Done'){
                        $($('.slider-child')[j]).css('background-color','#364751');
                    }else{
                        $($('.slider-child')[j]).css('background-color','#FDFFFF');
                    }
                }
            }
        });
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
        let newTop = Math.pow(Math.abs(x),2)/1700 + sliderTop + 80;
        $(slides[i]).offset({ top: newTop});    
    }
},10);

setInterval(function(){ 
    var slides = $('.slider-child');
    var parents = $('.slider-elem');
    for(var i  = 0; i < slides.length; i++){
        
    }
},50);


