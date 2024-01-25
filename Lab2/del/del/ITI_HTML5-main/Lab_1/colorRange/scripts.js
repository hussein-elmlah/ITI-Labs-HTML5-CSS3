const redSlider = document.getElementById("redRange");
const greenSlider = document.getElementById("greenRange");
const blueSlider = document.getElementById("blueRange");

const redVal = document.getElementById("redVal");
const greenVal = document.getElementById("greenVal");
const blueVal = document.getElementById("blueVal");

const texttbc = document.getElementById("tbc");

redSlider.oninput = function() {
    redVal.innerHTML = this.value;
    texttbc.style.color = `rgb(${redVal.innerHTML}, ${greenVal.innerHTML}, ${blueVal.innerHTML})`
}
greenSlider.oninput = function() {
    greenVal.innerHTML = this.value;
    texttbc.style.color = `rgb(${redVal.innerHTML}, ${greenVal.innerHTML}, ${blueVal.innerHTML})`
}
blueSlider.oninput = function() {
    blueVal.innerHTML = this.value;
    texttbc.style.color = `rgb(${redVal.innerHTML}, ${greenVal.innerHTML}, ${blueVal.innerHTML})`
}