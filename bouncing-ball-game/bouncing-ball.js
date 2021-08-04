let canvas = document.getElementById("game-container")
let ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;


function draw() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "whitesmoke";
    ctx.fill();
    ctx.closePath();
}

setInterval(draw, 10)