// Variables to store HTML Elements
var redInput = document.getElementById("redIn");
var greenInput = document.getElementById("greenIn");
let blueInput = document.getElementById("blueIn");
let rgbStringOutEl = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
let widthBox = document.getElementById("preWidth");
let heightBox = document.getElementById("preHeight");

// Event Listener
redInput.addEventListener("input", rgbPreview);
greenInput.addEventListener("input", rgbPreview);
blueInput.addEventListener("input", rgbPreview);
widthBox.addEventListener("input", changeWidth);
heightBox.addEventListener("input", changeHeight);
// Event Function
function rgbPreview() {
  console.log("test");
  // Input: get red green blue values
  let rVal = +redInput.value;
  let gVal = +greenInput.value;
  let bVal = +blueInput.value;

  // Validate Colours (Constrain colours between 0 - 255)
  // Check rVal
  if (rVal < 0) {
    rVal = 0;
    redInput.value = 0;
  } else if (rVal > 255) {
    rVal = 255;
    redInput.value = 255;
  }

  // Check gVal
  if (gVal < 0) {
    gVal = 0;
    greenInput.value = 0;
  } else if (rVal > 255) {
    gVal = 255;
    greenInput.value = 255;
  }

  // Check bVal
  if (bVal < 0) {
    bVal = 0;
    blueInput.value = 0;
  } else if (bVal > 255) {
    bVal = 255;
    blueInput.value = 255;
  }

  // Process: build rgb string rgb(__, __, __)
  let rgbString = "rgb(" + rVal + ", " + gVal + ", " + bVal + ")";

  // Output: display rgb string and update the colour preview
  console.log(rgbString);
  rgbStringOutEl.innerHTML = rgbString;
  displayEl.style.background = rgbString;
}

function changeWidth() {
  document.getElementById("display").style.width = `${widthBox.value}px`;
  if (widthBox.value < 50) {
    widthBox.value = 50;
  } else if (widthBox.value > 255) {
    widthBox.value = 255;
  }
}

function changeHeight() {
  document.getElementById("display").style.height = `${heightBox.value}px`;
  if (heightBox.value < 50) {
    heightBox.value = 50;
  } else if (heightBox.value > 255) {
    heightBox.value = 255;
  }
}
