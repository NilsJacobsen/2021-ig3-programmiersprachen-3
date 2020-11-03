var AnimationList = [];
AnimationList.push('Size');
var scalingobj = {
  'cups': 55,
  'cupm': 55,
  'cupl': 55,
  'beans1': 50,
  'beans2': 70,
  'beans3': 70,
  'hot': 45,
  'cold': 45,
  'soy': 80,
  'oat': 80,
  'cow': 80,
  'almond': 80,
  'nomilk': 80,
  'sugar1': 50,
  'sugar2': 50,
  'sugar3': 80
}

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
  var myArray = getSelectedArray(selected);
  var filteredArray = myArray.filter(x => Object.keys(x)[0] != 'nomilk' && Object.keys(x)[0] != 'nosugar');
  for(var i = 0; i < filteredArray.length; i++){
    console.log();
    var div = document.createElement("div");
    div.style.width = "110px";
    div.style.height = "110px";
    div.style.marginBottom = "20px";
    div.style.backgroundColor = "#FDFFFF";
    div.style.borderRadius = "50%";
    div.style.backgroundRepeat = "no-repeat"
    div.style.backgroundSize = scalingobj[Object.values(filteredArray[i])[0].name] + "%";
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
  } else {
    if(step == 'Beans'){
      $('.filling-mask').attr('class','filling-mask js-filling-mask');
      $('.my-img').attr('class','my-img js-my-img');
      $('.filling').attr('class','filling js-filling');
    }else if(step == 'Milk'){
      $('.my-img').attr('class','my-img js2-my-img');
      $('.filling').attr('class','filling js2-filling');
    }
    AnimationList.push(step);
  }
}