function selectGeometricForms() {
    const btn = document.getElementById("button-go");
    const btnReset = document.getElementById("button-reset");
}

function setBlockColor() {
    const cases = document.querySelectorAll(".container-one div");
    cases.forEach(
        c =>
            c.style.background = getRandomColor())
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
    
draggableElement.addEventListener('dragstart', function (e) {
    e.dataTransfer.setData('text/plain', '');
});   

document.querySelector('#dropper').addEventListener('dragover', function (e) {
    e.preventDefault(); // Annule l'interdiction de drop
});

document.querySelector('#dropper').addEventListener('drop', function(e) {})



function hourglass(id, cpt, lim, prev, next, callback) {
    (function f() {
        var el = document.getElementById(id);
        el.innerHTML = prev + cpt + next;
        if (cpt > lim) {
            cpt--;
            setTimeout(f, 999);
        } else if (callback) {
            callback();
        }
    })();
}

window.onload = function () {
    hourglass('time', 59, 0, 'The game ends in ', ' seconds', function () {
        alert("Game over !");
    });
};

for (let i = 0; i <= 24; i++) {
    var containerOne = document.querySelector(".container-one");
    var newDiv = document.createElement("div");
    newDiv.className = ("case" + i + " caseTableau1")
    containerOne.appendChild(newDiv);
    console.log(containerOne);
}

for (let i = 0; i <= 24; i++) {
    var containerTwo = document.querySelector(".container-two");
    var newDiv2 = document.createElement("div");
    newDiv2.className = ("case2" + i + " caseTableau2")
    containerTwo.appendChild(newDiv2);
    console.log(containerTwo);
}

setBlockColor()