window.addEventListener('load', drawArea([], 1));

function drawArea(points, R) {
    R = R*100
    const canvas = document.getElementById("area");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.scale(1, -1);

    ctx.fillStyle = "rgb(255,146,51)";
    ctx.strokeStyle = "black";
    ctx.beginPath();

    // Top left triangle
    ctx.moveTo(0, 0);
    ctx.lineTo(0, R);
    ctx.lineTo(-R, 0);

    // Top right rectangle
    ctx.moveTo(0, 0);
    ctx.lineTo(0, R);
    ctx.lineTo(R/2, R);
    ctx.lineTo(R/2, 0);

    // Bottom left circle
    ctx.arc(0, 0, R / 2, Math.PI, 3*Math.PI/2, false);
    ctx.closePath();
    ctx.fill();

    // Axis
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(-canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, 0);
    ctx.moveTo(0, -canvas.height / 2);
    ctx.lineTo(0, canvas.height / 2);
    ctx.stroke();

    ctx.fillStyle = "white";

    points.forEach((point) => {
        const {x, y} = point;

        ctx.beginPath();
        ctx.arc(x * SCALE_FACTOR, y * SCALE_FACTOR, 5, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.scale(1, -1);
    ctx.fillStyle = "black";
    ctx.font = "12px monospace";
    ctx.fillText("R", R, -6);
    ctx.fillText("R/2", R / 2, -6);
    ctx.fillText("-R/2", -R / 2, -6);
    ctx.fillText("-R", -R, -6);

    ctx.fillText("R", 6, -R);
    ctx.fillText("R/2", 6, -R / 2);
    ctx.fillText("-R/2", 6, R / 2);
    ctx.fillText("-R", 6, R);

    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    return null;
}