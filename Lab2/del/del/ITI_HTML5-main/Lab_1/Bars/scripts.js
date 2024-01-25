const textbox = document.getElementById("slidertextbox");
const slider = document.getElementById("myRange");
const sliderval = document.getElementById("sliderval");
function validateNumberRange(input) {
    var value = parseInt(input.value);
    if (isNaN(value) || value < 1 || value > 8) {
      input.value = "";
    }
    else {
        fixSlider(value)
    }
}
function fixSlider(val) {
    slider.value = val;
    sliderval.innerText = val;
}
slider.oninput = function() {
    textbox.value = this.value;
    sliderval.innerText = this.value;
    console.log(textbox);
}