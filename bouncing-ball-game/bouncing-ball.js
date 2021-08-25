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


let brickRowCount = 4;
let brickColumnCount = 7;
let brickWidth = 80;
let brickHeight = 24;
let brickPadding = 12;
let brickOffsetTop = 30;
let brickOffsetLeft = 10;
let bricks = [];
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}


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

function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
            let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#6600cc";
            ctx.fill();
            ctx.closePath();
        }
    }
}

function collisionDetection() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            let b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                }
            }
        }
    }
}

function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightMove = true;
    }
    else if (e.keyCode == 37) {
        leftMove = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightMove = false;
    }
    else if (e.keyCode == 37) {
        leftMove = false;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawBricks();


    if (rightMove && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
    }
    else if (leftMove && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if ((x > paddleX) && (x < paddleX + paddleWidth)) {
            dy = -dy;
        }
        else {
            document.location.reload();
            alert("Uh-oh, you missed the spot! Try again...")
            // let choice = confirm(" Aww, that went a li'l 'over-the-board' ... Play again?") ? document.location.reload() : document.getElementById('body').innerHTML = 'Bye now!';
        }
    }
}

setInterval(draw, 10)