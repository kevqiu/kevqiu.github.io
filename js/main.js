var programmingSkills = {
    "C#": 4,
    "Android (Java)": 3,
    "Java": 2,
    "C": 2,
    "C++": 1,
    "SQL": 1,
    "Python": 1,
};
var webdevSkills = {
    "HTML": 3,
    "CSS": 3,
    "AngularJS": 3,
    "JavaScript": 2,
    "ReactJS": 1,
    "NodeJS": 1
};
var hardwareSkills = {
    "Arduino": 4,
    "Verilog": 3,
    "Assembly (ARM, x86)": 2
};
var toolsSkills = {
    "HEADER-1": "IDEs & Text Editors",
    "Visual Studio": 4,
    "Eclipse": 3,
    "Android Studio": 3,
    "Atom": 3,
    "Notepad++": 3,
    "HEADER-2": "Programming Tools",
    "Git": 3,
    "Postman": 2,
    "Powershell": 1,
    "HEADER-3": "Documentation",
    "LaTeX": 3,
    "MATLAB": 2,
    "Microsoft Office": 3,
    "HEADER-4": "Hardware",
    "Quartus II": 3
};
var expertise = ["Beginner", "Comfortable", "Proficient", "Mastered"];

var skillsDict = {
    "Programming": programmingSkills,
    "Web-Dev": webdevSkills,
    "Hardware": hardwareSkills,
    "Tools": toolsSkills
};

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
    if (element.classList.contains("parent-modal")) {
        closeModal(element.id, 'container');
        setTimeout(function () {
            fadeIn(document.getElementById('container'));
        }, 700);
    }
    else if(element.classList.contains("resume-modal")) {
        console.log("TODO sub modal inside modal");
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

function createProgressBars() {
    for (key in skillsDict) {
        var tab = document.getElementById(key);
        var table = document.createElement("table");
        table.classList.add("skills-table");
        var values = skillsDict[key];
        var tr = document.createElement("tr");
        var i = 0;
        for (skill in values) {
            if(!skill.includes("HEADER"))
            {
                var td = document.createElement("td");
                td.classList.add("stat");

                var label = document.createElement("h4");
                label.innerText = skill;

                var progBarContainer = document.createElement("div");
                progBarContainer.classList.add("progressbar-container");

                var progBar = document.createElement("div");
            	progBar.classList.add("progressbar");
                progBar.style.width = (values[skill] * 25) + "%";
                progBar.style.borderTopLeftRadius = "3px";
                progBar.style.borderBottomLeftRadius = "3px";
                if(values[skill] == 4) {
                    progBar.style.borderTopRightRadius = "3px";
                    progBar.style.borderBottomRightRadius = "3px";
                }

        	    var verticalBars = document.createElement("table");
                verticalBars.classList.add("vertical-lines");
            	for(var j = 0; j < 4; j++) {
                  	var bar = document.createElement("td")
                    if(j != 3) bar.classList.add("line");
                  	verticalBars.appendChild(bar);
                }

                var tooltip = document.createElement("span");
                tooltip.classList.add("tooltip");
                tooltip.innerText = expertise[parseInt(values[skill])-1];

                progBarContainer.appendChild(progBar);
                progBarContainer.appendChild(verticalBars);
                progBarContainer.appendChild(tooltip);
                td.appendChild(label);
                td.appendChild(progBarContainer);
                tr.appendChild(td);
                table.appendChild(tr);

                if(++i == 2) { // make new row if count gets to 2
                    i = 0;
                    tr = document.createElement("tr");
                }
            }
            else {
                tr = document.createElement("tr");
                var td = document.createElement("td");
                td.colSpan = 2;

                var label = document.createElement("h3");
                label.innerText = values[skill];

                var line = document.createElement("hr");
                line.style.width = "50px";

                td.appendChild(label);
                td.appendChild(line);
                tr.appendChild(td);
                table.appendChild(tr);

                i = 0;
                tr = document.createElement("tr");
            }
        }
        tab.appendChild(table);
    }
}

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
