class InvalidValueException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidValueException";
    }
}

function validation(values) {
    if (values.x === undefined) {
        throw new InvalidValueException('You didn\'t choose X');
    }
    if (values.r === undefined) {
        throw new InvalidValueException('You didn\'t choose R');
    }
    if (values.y === "") {
        throw new InvalidValueException('You didn\'t choose Y');
    } else {
        var floaty = parseFloat(values.y);
        if (!/^(-?\d+(\.\d+)?)$/.test(values.y)) {
            throw new InvalidValueException('Y must be the number');
        }
        if (floaty <= -5 || floaty >= 3) {
            throw new InvalidValueException('Invalid Y');
        }
    }
}

function sendRequest(event) {
    let mainForm = document.getElementById('main');
    let formData = new FormData(mainForm);
    const values = Object.fromEntries(formData);

    try {
        validation(values);
    } catch (e) {
        alert(e.message);
        return;
    }

    event.preventDefault();
    $.ajax({
        url: "/weblab2/controller-servlet?" +  new URLSearchParams(formData).toString(),
        method: "GET",
    });
}

// function saveArticle(event) {
//     event.preventDefault();
//
//     let mainForm = document.getElementById('main');
//     let formData = new FormData(mainForm);
//     const values = Object.fromEntries(formData);
//
//     try {
//         validation(values);
//     } catch (e) {
//         alert(e.message);
//         return;
//     }
//
//     fetch('/fcgi-bin/Server.jar?' + new URLSearchParams(formData).toString(), {method: "GET"})
//         .then(response => {
//             return response.text();
//         })
//         .then(function (answer) {
//             var answ = JSON.parse(answer);
//
//             if (answ.code === "200") {
//
//                 const lastTries = document.getElementById('tries');
//
//                 /*if (lastTries.rows.length >= 8) {
//                     const allTr = lastTries.getElementsByTagName("tr");
//                     while (allTr.length - 1) {
//                         allTr[1].remove();
//                     }
//                 }*/
//                 const newRow = lastTries.insertRow(-1);
//                 const resCell = newRow.insertCell(0)
//                 const xCell = newRow.insertCell(1);
//                 const yCell = newRow.insertCell(2);
//                 const rCell = newRow.insertCell(3);
//                 const timeCell = newRow.insertCell(4);
//                 const scriptCell = newRow.insertCell(5);
//
//                 let textResult;
//                 if (answ.result === "true") {
//                     textResult = "YES ";
//                 } else {
//                     textResult = "NO ";
//                 }
//                 resCell.textContent = textResult;
//                 xCell.textContent = answ.x;
//                 yCell.textContent = answ.y;
//                 rCell.textContent = answ.r;
//                 timeCell.textContent = answ.time;
//                 scriptCell.textContent = answ.scriptTime;
//
//                 localStorage.setItem('savedLastTries', JSON.stringify(tableToJson(document.getElementById('tries'))));
//
//             } else if (answ.code === "400") {
//                 alert(answ.result)
//             }
//
//         })
// }

//window.addEventListener('load', onloadFunction());

function addPointToSavedTable(x, y, r, res) {
    localStorage.setItem('savedLastTries', JSON.stringify(tableToJson(document.getElementById('tries'))));

    let savedMas = JSON.parse(localStorage.getItem('savedLastTries'));
    var tempTable = document.createElement("table");
    if (savedMas) {
        var lastTries = document.getElementById('tries');
        for (var i = 0; i < savedMas.length; i++) {
            const newRow = tempTable.insertRow(-1);
            const resCell = newRow.insertCell(0);
            const xCell = newRow.insertCell(1);
            const yCell = newRow.insertCell(2);
            const rCell = newRow.insertCell(3);

            resCell.textContent = savedMas[i][0];
            xCell.textContent = savedMas[i][1];
            yCell.textContent = savedMas[i][2];
            rCell.textContent = savedMas[i][3];
        }
    }
    const newRow = tempTable.insertRow(-1);
    const resCell = newRow.insertCell(0);
    const xCell = newRow.insertCell(1);
    const yCell = newRow.insertCell(2);
    const rCell = newRow.insertCell(3);

    resCell.textContent = res;
    xCell.textContent = x;
    yCell.textContent = y;
    rCell.textContent = r;

    localStorage.setItem('savedLastTries', JSON.stringify(tableToJson(tempTable)));

}

function onloadFunction() {
     let savedMas = JSON.parse(localStorage.getItem('savedLastTries'));
    if (savedMas) {

        var lastTries = document.getElementById('tries');
        for (var i = 0; i < savedMas.length; i++) {
            const newRow = lastTries.insertRow(-1);
            const resCell = newRow.insertCell(0);
            const xCell = newRow.insertCell(1);
            const yCell = newRow.insertCell(2);
            const rCell = newRow.insertCell(3);

            resCell.textContent = savedMas[i][0];
            xCell.textContent = savedMas[i][1];
            yCell.textContent = savedMas[i][2];
            rCell.textContent = savedMas[i][3];
        }
        return null;
    }

}

function tableToJson(table) {
    var data = [];
    for (var i = 1; i < table.rows.length; i++) {
        var tableRow = table.rows[i];
        var rowData = [];
        for (var j = 0; j < tableRow.cells.length; j++) {
            rowData.push(tableRow.cells[j].innerHTML);
        }
        data.push(rowData);
    }
    return data;
}
