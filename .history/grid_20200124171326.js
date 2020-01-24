const sounds = [
    "./assets/aaahh-content.mp3",
    "./assets/accordeon.mp3",
    "./assets/ahhh.mp3",
    "./assets/alouette-des-bois.mp3",
    "./assets/chui-envoute.mp3",
    "./assets/clave.mp3",
    "./assets/contrebasse.mp3",
    "./assets/cythar.mp3",
    "./assets/embouteillage-inextricable.mp3",
    "./assets/emergency.mp3",
    "./assets/grelots-africains.mp3",
    "./assets/klaxon-bus.mp3",
    "./assets/klaxon-camion.mp3",
    "./assets/loop.mp3",
    "./assets/loop2.mp3",
    "./assets/loup-meute.mp3",
    "./assets/ocarina.mp3",
    "./assets/piano.mp3",
    "./assets/rythme-hiphop.mp3",
    "./assets/rythme-techno.mp3",
    "./assets/rythme.mp3",
    "./assets/samba-whisle.mp3",
    "./assets/saxo.mp3",
    "./assets/trumpet.mp3",
    "./assets/vache.mp3",
    "./assets/vibraphone.mp3",
    "./assets/"

]

function startTheGame() {
    const btn = document.getElementById("button-go");
    btn.onclick = startEverything;
    console.log(setBlockColor());
}

function startEverything() {
    setBlockColor();
    timer(0);
}

document.getElementById("button-reset").onclick = () =>
    window.location.reload();
startTheGame();

function setBlockColor() {
    const cases = document.querySelectorAll(".container-one div");
    cases.forEach(c => (c.style.background = getRandomColor()));
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

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

function timer() {
    hourglass("time", 45, -1, "", "", function () {
        alert("GAME OVER ! not fast enough");
    });
};

for (let i = 0; i <= 24; i++) {
    var containerOne = document.querySelector(".container-one");
    var newDiv = document.createElement("div");
    newDiv.className = "draggable" + " case" + i + " caseTableau1";
    containerOne.appendChild(newDiv);
}
console.log(containerOne);

for (let i = 0; i <= 24; i++) {
    var containerTwo = document.querySelector(".container-two");
    var newDiv2 = document.createElement("div");
    newDiv2.className = "dropper" + " case" + i + " caseTableau2";
    containerTwo.appendChild(newDiv2);
}

console.log(containerTwo);





(function () {
    var dndHandler = {
        draggedElement: null,

        applyDragEvents: function (element) {
            element.draggable = true;

            var dndHandler = this;

            element.addEventListener("dragstart", function (e) {
                dndHandler.draggedElement = e.target;
                e.dataTransfer.setData("text/plain", "");
            });
        },
        applyDropEvents: function (dropper) {
            dropper.addEventListener("dragover", function (e) {
                e.preventDefault();
                this.className = "dropper drop_hover";
            });

            dropper.addEventListener("dragleave", function () {

                this.className = "dropper";
            });

            var dndHandler = this;

            dropper.addEventListener("drop", function (e) {

                const randomIndex = Math.round(Math.random() * sounds.length)
                const randomSoundUrl = sounds[randomIndex];
                const audioObj = new Audio(randomSoundUrl);
                audioObj.play();
                var target = e.target,
                    draggedElement = dndHandler.draggedElement,
                    clonedElement = draggedElement.cloneNode(true);

                while (target.className.indexOf("dropper") == -1) {
                    target = target.parentNode;
                }

                target.className = "dropper";

                clonedElement = target.appendChild(clonedElement);
                dndHandler.applyDragEvents(clonedElement);

                draggedElement.parentNode.removeChild(draggedElement);
                //score++;
                //console.log("score", score);
            });
        }
    };

    var elements = document.querySelectorAll(".draggable"),
        elementsLen = elements.length;

    for (var i = 0; i < elementsLen; i++) {
        dndHandler.applyDragEvents(elements[i]);
    }

    var droppers = document.querySelectorAll(".dropper"),
        droppersLen = droppers.length;

    for (var i = 0; i < droppersLen; i++) {
        dndHandler.applyDropEvents(droppers[i]);
    }
})();