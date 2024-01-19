const sliderInput = document.getElementById("sliderInput");
const sliderRange = document.getElementById("myRange");
const sliderval = document.getElementById("sliderval");
const progress = document.getElementById("myProgress");
const progval = document.getElementById("progval");

function validateNumberRange(input) {
  var value = parseInt(input.value);
  if (isNaN(value) || value < 0 || value > 8) {
    input.value = "";
  } else {
    sliderRange.value = value;
    sliderval.innerText = value;
  }
}

sliderRange.oninput = function () {
  sliderInput.value = this.value;
  sliderval.innerText = this.value;
};

// Automatic increase of progress bar value
setInterval(function () {
  if (progress.value < progress.max) {
    progress.value++;
    progval.innerText = `${Math.round((progress.value / progress.max) * 100)}%`;
  }
}, 500);
