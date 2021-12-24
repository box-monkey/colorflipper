// hex color array 
// hex color starts with # 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// variable is getting the btn class for clickable button
const btn = document.getElementById("btn");
// this is getting the color id from span
const color = document.querySelector(".color")

// this listens to for when the span button is clicked
btn.addEventListener("click", function() {
// variable to hold hashtag
 let hexColor = '#'; 
 // loop to run and randomize 6 values to generate the randomized hex color
 for (let i = 0; i <6; i++) {
     // adding the hexcolor # to the hex variable that is holding the invoked
     // and randomized 6 characters for randomly selected numbers to create the hexcolor code
     hexColor += hex[getRandomNumberArray()];
 }
// these will minipulate the dom and override defaults with our new colors
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
});

// function to randomize/return length of hex array
function getRandomNumberArray() {
    return Math.floor(Math.random() * hex.length);
}