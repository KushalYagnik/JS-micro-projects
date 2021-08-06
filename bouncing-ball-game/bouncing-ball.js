let canvas = document.getElementById("game-container")
let ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height - 30;

let dx = 2;
let dy = -2;
let ballRadius = 10;

let paddleHeight = 12;
let paddleWidth = 72;
let paddleX = (canvas.width - paddleWidth) / 2;
let rightMove = false;
let leftMove = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "whitesmoke";
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "orangered";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    if ((x + dx > canvas.width - ballRadius) || (x + dx < ballRadius)) {
        dx = -dx;
    }
    if ((y + dy > canvas.height - ballRadius) || (y + dy < ballRadius)) {
        dy = -dy;
    }
    x += dx;
    y += dy;
    drawPaddle();
}

setInterval(draw, 10)