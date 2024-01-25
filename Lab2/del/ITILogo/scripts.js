const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


//FIRST I DOT////////////
ctx.beginPath();
ctx.arc(50, 85, 15, 0, 2 * Math.PI);
ctx.fillStyle = "#bd1c1c";
ctx.fill();
/////////////////////////
ctx.beginPath();
ctx.arc(50, 125, 15, 0, 2 * Math.PI);
ctx.fill();
/////////////////////////
ctx.beginPath();
ctx.arc(50, 305, 15, 0, 2 * Math.PI);
ctx.fill();
/////////////////////////
ctx.beginPath();
ctx.rect(35, 125, 30, 180);
ctx.fill();

/////////////////////////
ctx.beginPath();
ctx.rect(35, 125, 200, 30);
ctx.rect(120, 125, 30, 220);
ctx.fill();
/////////////////////////
ctx.beginPath();
ctx.rect(205, 180, 30, 180);
ctx.fill();
/////////////////////////
ctx.beginPath();
ctx.arc(220, 180, 15, 0, 2 * Math.PI);
ctx.fill();
/////////////////////////
ctx.beginPath();
ctx.arc(220, 360, 15, 0, 2 * Math.PI);
ctx.fill();
/////////////////////////
ctx.beginPath();
ctx.arc(220, 140, 15, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();