window.addEventListener('load', drawArea(0));


function onClickFunction() {
    const canvas = document.getElementById("area");
    const rect = canvas.getBoundingClientRect();
    const xDom = event.clientX - rect.left - canvas.width / 2;
    const yDom = canvas.height / 2 - (event.clientY - rect.top);

    try {
        let mainForm = document.getElementById('main');
        let formData = new FormData(mainForm);
        const values = Object.fromEntries(formData);
        const r = parseFloat(values.r);
        const x = xDom * ((4 * r) / canvas.width);
        const y = yDom * ((4 * r) / canvas.height);

        values.x = x;
        values.y = y;

        try {
            validation(values);
        } catch (e) {
            alert(e.message);
            return;
        }

        // mainForm["x"].value = Math.round(x/r);

        const otherX = document.getElementById("otherX");
        otherX.value = x.toString();
        otherX.disabled = false;
        otherX.click();

        mainForm["y"].value = (y/r).toFixed(4);
        mainForm["r"].value = r;

        mainForm.submit();
    } catch (e) {
        alert(e.message);
    }
}


function drawArea(R) {
    let koef = 125
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
    ctx.lineTo(0, koef);
    ctx.lineTo(-koef, 0);

    // Top right rectangle
    ctx.moveTo(0, 0);
    ctx.lineTo(0, koef);
    ctx.lineTo(koef/2, koef);
    ctx.lineTo(koef/2, 0);

    // Bottom left circle
    ctx.arc(0, 0, koef / 2, Math.PI, 3*Math.PI/2, false);
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

    // points.forEach((point) => {
    //     const {x, y} = point;
    //
    //     ctx.beginPath();
    //     ctx.arc(x * SCALE_FACTOR, y * SCALE_FACTOR, 5, 0, Math.PI * 2);
    //     ctx.fill();
    // });

    ctx.scale(1, -1);
    ctx.fillStyle = "black";
    ctx.font = "12px monospace";
    if (R===0){
        ctx.fillText("R", koef, -6);
        ctx.fillText("R/2", koef / 2, -6);
        ctx.fillText("-R/2", -koef / 2, -6);
        ctx.fillText("-R", -koef, -6);

        ctx.fillText("R", 6, -koef);
        ctx.fillText("R/2", 6, -koef / 2);
        ctx.fillText("-R/2", 6, koef / 2);
        ctx.fillText("-R", 6, koef);
    }
    else{
        ctx.fillText((R).toString(), koef, -6);
        ctx.fillText((R/2).toString(), koef / 2, -6);
        ctx.fillText((-R/2).toString(), -koef / 2, -6);
        ctx.fillText((-R).toString(), -koef, -6);

        ctx.fillText((R).toString(), 6, -koef);
        ctx.fillText((R/2).toString(), 6, -koef / 2);
        ctx.fillText((-R/2).toString(), 6, koef / 2);
        ctx.fillText((-R).toString(), 6, koef);
    }

    ctx.translate(-canvas.width / 2, -canvas.height / 2);
    return null;
}