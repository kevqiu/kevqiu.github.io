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
var expertise = ["Fundamentals", "Intermediate", "Proficient", "Advanced", "Mastered"];

var skillsDict = {
    "Programming": programmingSkills,
    "Web-Dev": webdevSkills,
    "Hardware": hardwareSkills,
    "Dev-Tools": toolsSkills
};

function createProgressBars() {
    for (key in skillsDict) {
        var tab = document.getElementById(key);
        var table = document.createElement("table");
        table.classList.add("skills-table");
        var values = skillsDict[key];
        for (skill in values) {
            if(!skill.includes("HEADER"))
            {
                var tr = document.createElement("tr");
                var td = document.createElement("td");
                td.classList.add("stat");

                var label = document.createElement("h4");
                label.innerText = skill;

                var progBarContainer = document.createElement("div");
                progBarContainer.classList.add("progressbar-container");

                var progBar = document.createElement("div");
            	progBar.classList.add("progressbar");
                progBar.style.width = (values[skill] * 20) + "%";
                progBar.style.borderTopLeftRadius = "3px";
                progBar.style.borderBottomLeftRadius = "3px";
                if(values[skill] == 4) {
                    progBar.style.borderTopRightRadius = "3px";
                    progBar.style.borderBottomRightRadius = "3px";
                }

        	    var verticalBars = document.createElement("table");
                verticalBars.classList.add("vertical-lines");
            	for(var j = 0; j < 5; j++) { // add 5 dividing lines
                  	var bar = document.createElement("td")
                    if(j != 4) bar.classList.add("line");
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
            }
            else { // else for headers
                var tr = document.createElement("tr");
                var td = document.createElement("td");

                var label = document.createElement("h3");
                label.innerText = values[skill];

                var line = document.createElement("hr");
                line.classList.add("dev-tools-header-line");

                td.appendChild(label);
                td.appendChild(line);
                tr.appendChild(td);
                table.appendChild(tr);
            }
        }
        tab.appendChild(table);
    }
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

