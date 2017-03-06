function openModal(modal, container) {
    var modalElement = document.getElementById(modal);
    var containerElement = document.getElementById(container);
    fadeOut(containerElement);
    setTimeout(function () {
        modalElement.classList.remove('fade-out-modal');
        modalElement.getElementsByTagName('div')[0].classList.remove('fade-out-content');
        modalElement.classList.add('fade-in-modal');
        modalElement.getElementsByTagName('div')[0].classList.add('fade-in-content');
        modalElement.style.display = 'block';
    }, 700);
}

function closeModal(modal, container) {
    var modalElement = document.getElementById(modal);
    var containerElement = document.getElementById(container);
    modalElement.classList.remove('fade-in-modal');
    modalElement.getElementsByTagName('div')[0].classList.remove('fade-in-content');
    modalElement.classList.add('fade-out-modal');
    modalElement.getElementsByTagName('div')[0].classList.add('fade-out-content');
    setTimeout(function () {
        fadeIn(containerElement);
    }, 700);
}

function openSubModal(child, parent) {
    var childElement = document.getElementById(child);
    var parentElement = document.getElementById(parent);
    parentElement.classList.remove('fade-in-modal');
    parentElement.getElementsByTagName('div')[0].classList.remove('fade-in-content');
    parentElement.classList.add('fade-out-modal');
    parentElement.getElementsByTagName('div')[0].classList.add('fade-out-content');
    setTimeout(function () {
        childElement.classList.remove('fade-out-modal');
        childElement.getElementsByTagName('div')[0].classList.remove('fade-out-content');
        childElement.classList.add('fade-in-modal');
        childElement.getElementsByTagName('div')[0].classList.add('fade-in-content');
        childElement.style.display = 'block';
    }, 700);
}

function closeSubModal(child, parent) {
    var childElement = document.getElementById(child);
    var parentElement = document.getElementById(parent);
    childElement.classList.remove('fade-in-modal');
    childElement.getElementsByTagName('div')[0].classList.remove('fade-in-content');
    childElement.classList.add('fade-out-modal');
    childElement.getElementsByTagName('div')[0].classList.add('fade-out-content');
    setTimeout(function () {
        parentElement.classList.remove('fade-out-modal');
        parentElement.getElementsByTagName('div')[0].classList.remove('fade-out-content');
        parentElement.classList.add('fade-in-modal');
        parentElement.getElementsByTagName('div')[0].classList.add('fade-in-content');
    }, 700);
}


function fadeIn(inElement) {
    inElement.classList.remove('fade-out');
    inElement.classList.add('fade-in');
    background.classList.remove('blur-out');
    background.classList.add('blur-in');
}

function fadeOut(outElement) {
    outElement.classList.remove('fade-in');
    outElement.classList.add('fade-out');
    background.classList.remove('blur-in');
    background.classList.add('blur-out');
}