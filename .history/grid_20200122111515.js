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
    
(function () {

    var dndHandler = {

    draggedElement: null, // Propriété pointant vers l'élément en cours de déplacement

    applyDragEvents: function (element) {

        element.draggable = true;

        var dndHandler = this; // Cette variable est nécessaire pour que l'événement « dragstart » ci-dessous accède facilement au namespace « dndHandler »

            element.addEventListener('dragstart', function (e) {
                dndHandler.draggedElement = e.target; // On sauvegarde l'élément en cours de déplacement
                e.dataTransfer.setData('text/plain', ''); // Nécessaire pour Firefox
            });
        },
applyDropEvents: function (dropper) {
    dropper.addEventListener('dragover', function (e) {
    e.preventDefault(); // On autorise le drop d'éléments
                this.className = 'dropper drop_hover'; // Et on applique le style adéquat à notre zone de drop quand un élément la survole
    });

    dropper.addEventListener('dragleave', function () {
                this.className = 'dropper'; // On revient au style de base lorsque l'élément quitte la zone de drop
    });

    var dndHandler = this; // Cette variable est nécessaire pour que l'événement « drop » ci-dessous accède facilement au namespace « dndHandler »

            dropper.addEventListener('drop', function (e) {

                var target = e.target,
                    draggedElement = dndHandler.draggedElement, // Récupération de l'élément concerné
                    clonedElement = draggedElement.cloneNode(true); // On créé immédiatement le clone de cet élément

                while (target.className.indexOf('dropper') == -1) { // Cette boucle permet de remonter jusqu'à la zone de drop parente
                    target = target.parentNode;
                }

                target.className = 'dropper'; // Application du style par défaut

                clonedElement = target.appendChild(clonedElement); // Ajout de l'élément cloné à la zone de drop actuelle
                dndHandler.applyDragEvents(clonedElement); // Nouvelle application des événements qui ont été perdus lors du cloneNode()

                draggedElement.parentNode.removeChild(draggedElement); // Suppression de l'élément d'origine
            });
        }
    };

    var elements = document.querySelectorAll('.draggable'),
        elementsLen = elements.length;

    for (var i = 0; i < elementsLen; i++) {
        dndHandler.applyDragEvents(elements[i]); // Application des paramètres nécessaires aux éléments déplaçables
    }

    var droppers = document.querySelectorAll('.dropper'),
        droppersLen = droppers.length;

    for (var i = 0; i < droppersLen; i++) {
        dndHandler.applyDropEvents(droppers[i]); // Application des événements nécessaires aux zones de drop
    }

})();








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