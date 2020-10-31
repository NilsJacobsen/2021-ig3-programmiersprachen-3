var AnimationList = [];
AnimationList.push('Size');

function handleIngredient(category, ingredient) {
  if (Object.keys(selected[category])[0] == ingredient) {} else {
    removeIngredient(category, Object.keys(selected[category])[0]);
    addIngredient(category, ingredient);
  }
  checkSelected(category,Object.keys(selected[category])[0],ingredient);
}

function addIngredient(category, ingredient) {

  var newObject = {
    [ingredient]: ingredients[category][ingredient]
  }
  Object.assign(selected[category], newObject);
}

function removeIngredient(category, ingredient) {
  delete selected[category][ingredient];
}

function checkSelected(category,removed,added){

}

function displaySelection(){
  console.log($('#sideColumn'));
  var myArray = getSelectedArray(selected);
  console.log(Object.keys(myArray[0])[0]);
  var filteredArray = myArray.filter(x => Object.keys(x)[0] != 'nomilk' && Object.keys(x)[0] != 'nosugar');
  console.log(filteredArray);
  for(var i = 0; i < filteredArray.length; i++){
    var div = document.createElement("div");
    div.style.width = "110px";
    div.style.height = "110px";
    div.style.marginBottom = "20px";
    div.style.backgroundColor = "#FDFFFF";
    div.style.borderRadius = "50%";
    div.style.backgroundRepeat = "no-repeat"
    div.style.backgroundSize = "50%";
    div.style.backgroundPosition = "center";
    div.style.backgroundImage = "url(" + Object.values(filteredArray[i])[0].urlDark + ")";
    div.className = "sideIngridient";
    document.getElementById('sideColumn').appendChild(div);
  }
}

function getSelectedArray(obj){
  var array = [];
  for(var i = 0; i < Object.keys(selected).length; i++){
    array.push(Object.values(obj)[i]);
  }
  return array;
}

function removeSelection(){
  var node = document.getElementById('sideColumn');
    node.innerHTML = "";
}

function makeAnimation(){
  var step = $('.slick-center').attr('id');
  if(AnimationList.find(x => x == step) != undefined){
    console.log("war schon");
  } else {
    console.log(step);
    if(step == 'Beans'){
      $('.filling-mask').attr('class','filling-mask js-filling-mask');
      $('.my-img').attr('class','my-img js-my-img');
      $('.filling').attr('class','filling js-filling');
    }else if(step == 'Milk'){
      console.log("bin da");
      $('.my-img').attr('class','my-img js2-my-img');
      $('.filling').attr('class','filling js2-filling');
    }
    AnimationList.push(step);
  }
}