function favoriteAnimal(animal) {
  console.log(animal + " is my favorite animal!");
}
favoriteAnimal("Pygmy Hippo");

function add7(number) {
  console.log(number + 7);
}
add7(3);

// Needed to change (number) to (x,y)
function multiply(x, y) {
  console.log(x * y);
}
multiply(3, 4);

// Had to change stefan into a string to make this work.
function capatalize(string) {
  let capitalString = string.charAt(0).toUpperCase() + string.slice(1);
  console.log(capitalString);
}
capatalize("stefan");
