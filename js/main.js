var container = document.getElementById('container');
var background = document.getElementById('background');

var aboutModal = document.getElementById('aboutModal');
var skillsModal = document.getElementById('skillsModal');
var resumeModal = document.getElementById('resumeModal');
var contactModal = document.getElementById('contactModal');


window.onload = function() {
    document.getElementById('default-tab').click();
    drawMainLines();
}

window.onclick = function(event) {
    if (event.target == aboutModal || event.target == skillsModal || event.target == resumeModal || event.target == contactModal) {
        hideModal(event.target);
        setTimeout(function () {
            fadeIn(container);
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

function openModal(modal) {
    fadeOut(container);
    var modalElement = document.getElementById(modal);
    setTimeout(function () {
        modalElement.classList.remove('fade-out-modal');
        modalElement.getElementsByTagName('div')[0].classList.remove('fade-out-content');
        modalElement.classList.add('fade-in-modal');
        modalElement.getElementsByTagName('div')[0].classList.add('fade-in-content');
        modalElement.style.display = 'block';
    }, 700);
}

function closeModal(modal) {
    var modalElement = document.getElementById(modal);
    modalElement.classList.remove('fade-in-modal');
    modalElement.getElementsByTagName('div')[0].classList.remove('fade-in-content');
    modalElement.classList.add('fade-out-modal');
    modalElement.getElementsByTagName('div')[0].classList.add('fade-out-content');
    setTimeout(function () {
        fadeIn(container);
    }, 700);
}

function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class='tabcontent' and hide them
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class='tablinks' and remove the class 'active'
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    // Show the current tab, and add an 'active' class to the link that opened the tab
    document.getElementById(tab).style.display = 'block';
    evt.currentTarget.className += ' active';
}

function fadeIn(element) {
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
    background.classList.remove('blur-out');
    background.classList.add('blur-in');
}

function fadeOut(element) {
    element.classList.remove('fade-in');
    element.classList.add('fade-out');
    background.classList.remove('blur-in');
    background.classList.add('blur-out');
}
