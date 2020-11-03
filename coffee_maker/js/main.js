//slider
var sliderTop;
var sliderX;

function getSize(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

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
    displaySelection();
    $('.slider-elem').off();
    $('.slick-center').on('click', function(){
        $('.dropdown').toggleClass('js-resize-dropdown');
        $('.slick-center').children('div').toggleClass('js-cross');
        var size = getSize(ingredients[$('.slick-center').attr('id')]) * 200 + 200;
            $('.dropdown').height(size);
        if($('.dropdown').attr('class').includes('js-resize-dropdown') == true){
            showIcons(ingredients[$('.slick-center').attr('id')]);
            $('.label-container').css('margin-top',150);
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
            removeIcons(ingredients[$('.slick-center').attr('id')]);
            $('.label-container').css('margin-top','');
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
    $('.slider-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.label-container').attr('class','label-container js-move-label');
        $('.slider-elem').off();
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
                removeIcons(ingredients[$('.slick-center').attr('id')]);
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
    });
    $('.slider-container').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slider-elem').off();
        $('.slick-center').on('click', function(){
            if($('.slick-center').attr('id') != 'Done'){
                $('.dropdown').toggleClass('js-resize-dropdown');
                $('.slick-center').children('div').toggleClass('js-cross');
                var size = getSize(ingredients[$('.slick-center').attr('id')]) * 200 + 200;
                $('.dropdown').height(size);
                showIcons(ingredients[$('.slick-center').attr('id')]);
                if($('.dropdown').attr('class').includes('js-resize-dropdown') == true){
                    console.log();
                    $('.label-container').css('margin-top',150);
                    $('.slider-container').slick("slickSetOption", "accessibility", false);
                    //$('.slider-container').slick("slickSetOption", "draggable", false);
                    //$('.slider-container').slick("slickSetOption", "swipe", false);
                    $('.slider-container').slick("slickSetOption", "touchMove", false);
                    for(var j = 0; j < $('.slider-elem').length ; j++){
                        if($($('.slider-elem')[j]).attr('id') != $($('.slick-center')[0]).attr('id')){
                            $($('.slider-child')[j]).css('background-color','#5E7A81');
                        }     
                    }
                }else{
                    $('.dropdown').height(200);
                    removeIcons(ingredients[$('.slick-center').attr('id')]);
                    $('.label-container').css('margin-top','');
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
            } else {
                $('.drink').addClass("bounce").delay(1000).queue(function(next){
                    $('.drink').removeClass("bounce");
                    next();
                });
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
        //makeAnimation();
    });
    $('.label-container').attr('class', 'label-container');
    let id = $('.slick-center').attr('id');
    if ($('.slick-center').length > 1) {
      if ($($('.slick-center')[0]).attr('id') == "") {
        id = $($('.slick-center')[1]).attr('id');
      } else {
        id = $($('.slick-center')[0]).attr('id');
      }
    }
    $('.label-text').html(id);
    sliderTop = $('.slick-center').offset().top;
    sliderX = $('.slick-center').offset().left;
});

setInterval(function() {
  var slides = $('.slider-elem');
  for (var i = 0; i < slides.length; i++) {
    let x = sliderX - $(slides[i]).offset().left;
    let newTop = Math.pow(Math.abs(x), 2) / 1700 + sliderTop + 80;
    $(slides[i]).offset({
      top: newTop
    });
  }
}, 10);

function showIcons(obj){
    for(var i = 0; i < Object.values(obj).length; i++){
        var div = document.createElement("div");
        div.className = "ingredient"
        div.style.width = "200px";
        div.style.height = "200px";
        div.style.backgroundImage = "url(" + Object.values(obj)[i].url + ")";
        div.style.backgroundRepeat = "no-repeat"
        div.style.backgroundSize = "50%";
        div.style.backgroundPosition = "center";
        div.id = Object.values(obj)[i].name;
        $('.dropdown')[0].appendChild(div);
    }
    $('.ingredient').click(function(e){
        $('.slick-center').children('div').toggleClass('js-cross');
        handleIngredient($('.slick-center').attr('id'),$(e.target).attr('id'));
        $('.dropdown').height(200);
        removeIcons(ingredients[$('.slick-center').attr('id')]);
        $('.dropdown').toggleClass('js-resize-dropdown');
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
        $('.label-container').css('margin-top','');
        removeSelection();
        displaySelection($('.slick-center').attr('id'));
        makeAnimation();
    });
}

function removeIcons(obj){
    var node = document.getElementById('parent');
    node.innerHTML = "";
}
