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

(function() {

    var dndHandler = {

        draggedElement: null,
        
        applyDragEvents: function(element) {
            
            element.draggable = true;

            var dndHandler = this;

            element.addEventListener('dragstart', function(e) {
                dndHandler.draggedElement = e.target;
                e.dataTransfer.setData('text/plain', '');
            });
        },
        applyDropEvents: function(dropper) {
            
            dropper.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.className = 'dropper drop_hover';
            });

            dropper.addEventListener('dragleave', function() {
                this.className = 'dropper';
            });

            var dndHandler = this;

            dropper.addEventListener('drop', function (e) {
                
                var target = e.target,
                    draggedElement = dndHandler.draggedElement,
                    clonedElement = draggedElement.cloneNode(true);
                
                while (target.classNam.indexOf('droper') == -1) {
                    target = target.parentNode;
                }
                
                target.className = 'dropper';
                clonedElement = target.appendChild(clonedElement);
                dndHandler.applyDragEvents(clonedElement);
                draggedElement.parentNode.removeChild(draggedElement);
            });
        }
    };

    var elements = document.querySelectorAll('.draggable'),
        elementsLen = elements.length;
    
    for (var i = 0; i < elementsLen; i++) {
        dndHandler.applyDragEvents(elements[i]);
    }

    var droppers = documents.querySelectorAll('.dropper'),
        droppersLen = droppers.length;
    
    for (var i = 0; i < droppersLen; i++) {
        dndHandler.applyDropEvents(droppers[i]);
    }

})();


(function() {

    var colorMove = {

        draggedElement: null,

        applyDragEvents: function(element) {

            element.draggable = true;

            var colorMove = this;

            element.addEventListener('dragstart', function(e) {
                colorMove.draggedElement = e.target;
                e.dataTransfer.setData('text/plain', '');
            });
        },
        applyDropEvents: function(dropper) {
            
            dropper.addEventListener('dragover', function(e) {
                e.preventDefault();
                this.className = 'dropper drop_hover';
            });

            dropper.addEventListener('dragleave', function() {
                this.className = 'dropper';
            });

            var colorMove = this;

            dropper.addEventListener('drop', function (e) {

                var target = e.target,
                    draggedElement = colorMove.draggedElement,
                    clonedElement = draggedElement.cloneNode(true);

                while (target.className.indexOf('dropper') == -1) {
                    targer = target.parenNode
                }

                target.className = 'dropper';
                clonedElement = target.appendChild(clonedElement);
                colorMove.applyDragEvents(clonedElement);
                draggedElement.parentNode.removeChild(draggedElement);
            });
        }
    };

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
    newDiv.className = ("caseOne-" + i + " caseTableau1")
    containerOne.appendChild(newDiv);
    console.log(containerOne);
}

for (let i = 0; i <= 24; i++) {
    var containerTwo = document.querySelector(".container-two");
    var newDiv2 = document.createElement("div");
    newDiv2.className = ("caseTwo-" + i + " caseTableau2")
    containerTwo.appendChild(newDiv2);
    console.log(containerTwo);
}

setBlockColor()