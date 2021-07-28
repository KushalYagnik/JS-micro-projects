let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let radius = canvas.height / 2;

context.translate(radius, radius);

radius = radius * 0.90
setInterval(drawClock, 1000);

drawClock();

function drawFace(context, radius) {
    let grad;
    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.fillStyle = "White";
    context.fill();

    grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#358aac');
    grad.addColorStop(0.5, '#113');
    // grad.addColorStop(1, '#333');

    context.strokeStyle = grad;
    context.lineWidth = radius * 0.1;
    context.stroke();
    context.beginPath();
    context.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    context.fillStyle = '#358aac';
    context.fill();
}

function drawNumbers(context, radius) {
    let angle;
    let num;
    context.font = radius * 0.15 + "px cambria";
    context.textBaseline = "middle";
    context.textAlign = "center";
    for (num = 1; num < 13; num++) {
        angle = num * Math.PI / 6;
        context.rotate(angle);
        context.translate(0, (-radius) * 0.85);
        context.rotate(-angle);
        context.fillText(num.toString(), 0, 0);
        context.rotate(angle);
        context.translate(0, radius * 0.85);
        context.rotate(-angle);
    }

}

function drawHand(context, position, length, width) {
    length = length / 1.2;
    context.beginPath();
    context.lineWidth = width / 1.5;
    context.lineCap = "round";
    context.moveTo(0, 0);
    context.rotate(position);
    context.lineTo(0, -length);
    context.stroke();
    context.rotate(-position);
}

function drawTime(context, radius) {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(context, hour, radius * 0.5, radius * 0.07);

    minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(context, minute, radius * 0.8, radius * 0.07);

    second = (second * Math.PI / 30);
    drawHand(context, second, radius * 0.9, radius * 0.02);

}

function drawClock() {
    drawFace(context, radius);
    drawNumbers(context, radius);
    drawTime(context, radius);
}