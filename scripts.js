// First, we find our button and our title in the HTML
const myButton = document.getElementById("amazingButton");
const myTitle = document.getElementById("myTitle");

// Next, we tell the button what to do when clicked
myButton.addEventListener("click", function() {
  myTitle.style.color = "blue";
  myTitle.innerHTML = "Ta-da! The amazing trick worked!";
});
