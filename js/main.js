var background = document.getElementById('background');

var aboutModal = document.getElementById('aboutModal');
var skillsModal = document.getElementById('skillsModal');
var resumeModal = document.getElementById('resumeModal');
var contactModal = document.getElementById('contactModal');

window.onload = function() {
    document.getElementById('default-tab').click();
    drawMainLines();
    createProgressBars();
}

window.onclick = function(event) {
    var element = event.target;
    if (element.classList.contains("modal")) {
        closeModal(element.id, 'container');
        setTimeout(function () {
            fadeIn(document.getElementById('container'));
        }, 700);
    }
}

function drawMainLines() {
    var canvas1 = document.getElementById('upper-line');
    var c1 = canvas1.getContext('2d');

    var canvas2 = document.getElementById('lower-line');
    var c2 = canvas2.getContext('2d');

    var startX1 = 0;
    var startX2 = canvas2.width;
    var y = 10;
    var endX1 = canvas1.width;
    var endX2 = 0;
    var amount = 0;

    setInterval(function() {
        amount += 0.01; // change to alter duration
        if (amount > 1) amount = 1;
        c1.clearRect(0, 0, canvas1.width, canvas1.height);
        c1.strokeStyle = 'white';
        c1.moveTo(startX1, y);
        // lerp : a  + (b - a) * f
        c1.lineTo(startX1 + (endX1 - startX1) * amount, y);
        c1.stroke();

        c2.clearRect(0, 0, canvas2.width, canvas2.height);
        c2.strokeStyle = 'white';
        c2.moveTo(startX2, y);
        // lerp : a  + (b - a) * f
        c2.lineTo(startX2 + (endX2 - startX2) * amount, y);
        c2.stroke();
    }, 14);
}
