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

function lastLetter(string) {
  // This sets a variable to the length of string which is 4.
  let stringLength = string.length;
  //    We take string and find the characater at string length (4) - 1 which is 3. a = 0, b = 1, c = 2, d = 3. Therefore is at spot 3 and the lhe last letter and returned.
  console.log(string.charAt(stringLength - 1));
}
lastLetter("abcd");
