var container = document.getElementById('container');
var background = document.getElementById('background');

var aboutModal = document.getElementById('aboutModal');
var aboutButton = document.getElementById('aboutBtn');
var aboutClose = document.getElementById('aboutClose');

var skillsModal = document.getElementById('skillsModal');
var skillsButton = document.getElementById('skillsBtn');
var skillsClose = document.getElementById('skillsClose');

var resumeModal = document.getElementById('resumeModal');
var resumeButton = document.getElementById('resumeBtn');
var resumeClose = document.getElementById('resumeClose');

var contactModal = document.getElementById('contactModal');
var contactButton = document.getElementById('contactBtn');
var contactClose = document.getElementById('contactClose');

aboutButton.onclick = function() {
    fadeOut(container);
    setTimeout(function () {
        showModal(aboutModal);
        aboutModal.style.display = "block";
    }, 700);
}

skillsButton.onclick = function() {
    fadeOut(container);
    setTimeout(function () {
        showModal(skillsModal);
        skillsModal.style.display = "block";
    }, 700);
}

resumeButton.onclick = function() {
    fadeOut(container);
    setTimeout(function () {
        showModal(resumeModal);
        resumeModal.style.display = "block";
    }, 700);
}

contactButton.onclick = function() {
    fadeOut(container);
    setTimeout(function () {
        showModal(contactModal);
        contactModal.style.display = "block";
    }, 700);
}

aboutClose.onclick = function() {
    hideModal(aboutModal);
    setTimeout(function () {
        fadeIn(container);
    }, 700);
}

skillsClose.onclick = function() {
    hideModal(skillsModal);
    setTimeout(function () {
        fadeIn(container);
    }, 700);
}

resumeClose.onclick = function() {
    hideModal(resumeModal);
    setTimeout(function () {
        fadeIn(container);
    }, 700);
}

contactClose.onclick = function() {
    hideModal(contactModal);
    setTimeout(function () {
        fadeIn(container);
    }, 700);
}

window.onclick = function(event) {
    if (event.target == aboutModal || event.target == skillsModal || event.target == resumeModal || event.target == contactModal) {
        hideModal(event.target);
        setTimeout(function () {
            fadeIn(container);
        }, 700);
    }
}

window.onload = function() {
    var canvas1 = $("#upper-line")[0];
    var c1 = canvas1.getContext("2d");

    var canvas2 = $("#lower-line")[0];
    var c2 = canvas2.getContext("2d");

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
        c1.strokeStyle = "white";
        c1.moveTo(startX1, y);
        // lerp : a  + (b - a) * f
        c1.lineTo(startX1 + (endX1 - startX1) * amount, y);
        c1.stroke();

        c2.clearRect(0, 0, canvas2.width, canvas2.height);
        c2.strokeStyle = "white";
        c2.moveTo(startX2, y);
        // lerp : a  + (b - a) * f
        c2.lineTo(startX2 + (endX2 - startX2) * amount, y);
        c2.stroke();
    }, 14);
}

function fadeOut(element) {
    element.classList.remove("fade-in");
    element.classList.add("fade-out");
    background.classList.remove("blur-in");
    background.classList.add("blur-out");
}

function fadeIn(element) {
    element.classList.remove("fade-out");
    element.classList.add("fade-in");
    background.classList.remove("blur-out");
    background.classList.add("blur-in");
}

function showModal(modal) {
    modal.classList.remove("fade-out-modal");
    modal.getElementsByTagName('div')[0].classList.remove("fade-out-content");
    modal.classList.add("fade-in-modal");
    modal.getElementsByTagName('div')[0].classList.add("fade-in-content");
}

function hideModal(modal) {
    modal.classList.remove("fade-in-modal");
    modal.getElementsByTagName('div')[0].classList.remove("fade-in-content");
    modal.classList.add("fade-out-modal");
    modal.getElementsByTagName('div')[0].classList.add("fade-out-content");
}