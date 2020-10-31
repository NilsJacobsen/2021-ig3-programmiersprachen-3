function handleIngredient(category, ingredient) {
  if (Object.keys(selected[category])[0] == ingredient) {} else {
    removeIngredient(category, Object.keys(selected[category])[0]);
    addIngredient(category, ingredient);
  }
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