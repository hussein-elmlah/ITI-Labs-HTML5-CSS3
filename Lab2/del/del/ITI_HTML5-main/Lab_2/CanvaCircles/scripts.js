const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const clicker = document.getElementById("clicker");
const color = document.getElementById("color");

const width = 1300;
const height = 600;

clicker.onclick = function () {
    drawCircles();
}
console.log(clicker);

function drawCircles() {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.strokeStyle = color.value;
        ctx.arc(Math.random()*width, Math.random()*height, 30, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.moveTo(Math.random()*width, Math.random()*height);
    }
    
}