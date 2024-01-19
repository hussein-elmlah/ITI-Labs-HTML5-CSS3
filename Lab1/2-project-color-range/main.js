const redRangeInput = document.getElementById("redRange");
const greenRangeInput = document.getElementById("greenRange");
const blueRangeInput = document.getElementById("blueRange");

const redValueElement = document.getElementById("redValue");
const greenValueElement = document.getElementById("greenValue");
const blueValueElement = document.getElementById("blueValue");

const rgbTextElement = document.getElementById("rgbText");

function updateTextColor() {
    rgbTextElement.style.color = `rgb(${redRangeInput.value}, ${greenRangeInput.value}, ${blueRangeInput.value})`;
    // rgbTextElement.style.color = `rgb(${redValueElement.innerHTML}, ${greenValueElement.innerHTML}, ${blueValueElement.innerHTML})`;
}

redRangeInput.addEventListener('oninput',function () {
    redValueElement.innerHTML = this.value;
    updateTextColor();
})

redRangeInput.oninput = function () {
    redValueElement.innerHTML = this.value;
    updateTextColor();
};
greenRangeInput.oninput = function () {
    greenValueElement.innerHTML = this.value;
    updateTextColor();
};
blueRangeInput.oninput = function () {
    blueValueElement.innerHTML = this.value;
    updateTextColor();
};
