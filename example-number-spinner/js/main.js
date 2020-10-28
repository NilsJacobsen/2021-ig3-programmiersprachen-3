

$('.number-spinner').mousedown(function(e) {

  // 1. Beim Drücken der Maustaste -> Koordinaten merken
  let clickedElement = this;
  let clickX = e.clientX;
  let clickY = e.clientY;
  let clickValue = parseFloat($(clickedElement).text());
  let factor = 1;


  // 2. Ab dann ständig schauen, wo die Maus ist.
  $(window).mousemove(function(e) {
    let actY = e.clientY;
    let actX = e.clientX;

    if((actY - clickY) >= 50){
      factor = 10;
    }else if((actY - clickY) <= -50){
      factor = 0.1;
    }else{
      factor = 1;
    }

    let distX = (actX - clickX) * factor;
    let actValue = parseFloat($(clickedElement).text());
    
    let newValue = (actValue + distX);
    
    // 3. Zahl der Number Spinners entsprechend verändern.
    $(clickedElement).text(newValue);
  });

  // 4. Beim Loslassen der Maustaste (egal wo) -> EventListener mousemove eliminieren!
  $(window).mouseup(function(e) {
    $(window).off('mousemove');
  });

});





