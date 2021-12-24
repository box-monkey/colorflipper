// set up global variables
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn - will link the btn class from the index.html to this variable
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// event listener tied to btn variable, waiting for a click
// to enact the function beyond 'click'
btn.addEventListener("click", function () {
  // every time above button is clicked, logic below will  dictate
  // the page to change color
  // we will want to get random number between 0-3 from our array of colors[0]
  const randomNumber = getRandomNumber();
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// function to randomly generate 0-3
function getRandomNumber() {
  // randomly randomizing numbers and multiplying them by the number of 
  // items within our colors array, math.floor will round to nearest integer
  return Math.floor(Math.random() * colors.length);
}
