var programmingSkills = {
    "C#": 4,
    "Android": 3,
    "Java": 3,
    "C": 3,
    "SQL": 2,
    "C++": 1,
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

var tools = [
    "HEADER-IDEs & Text Editors",
    "Visual Studio",
    "Eclipse",
    "Android Studio",
    "Atom",
    "Notepad++",
    "HEADER-Programming Tools",
    "Git",
    "Postman",
    "SQL Developer",
    "Powershell",
    "HEADER-Documentation",
    "LaTeX",
    "MATLAB",
    "Microsoft Office",
    "HEADER-Hardware",
    "Quartus II"
];

var expertise = ["Fundamentals", "Intermediate", "Proficient", "Advanced", "Mastered"];

var skillsDict = {
    "Programming": programmingSkills,
    "Web-Dev": webdevSkills,
    "Hardware": hardwareSkills,
};

function createProgressBars() {
    for (key in skillsDict) {
        var tab = document.getElementById(key);
        var table = document.createElement("table");
        table.classList.add("skills-table");
        var values = skillsDict[key];
        for (skill in values) {
            if(!skill.includes("HEADER")) {
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

function createToolsLists() {
    var tab = document.getElementById("Dev-Tools");
    var table = document.createElement("table");
    table.classList.add("skills-table");
    var tr = document.createElement("tr");
    var list = document.createElement("ul");
    list.classList.add("tools-list");
    for (var i = 0; i < tools.length; i++) {
        if(!tools[i].includes("HEADER-")) {
            var item = document.createElement("ul");
            item.innerText = tools[i];
            item.classList.add("tools-list-item");
            list.appendChild(item);
        }
        else {
            if(list.firstChild) {
                tr.appendChild(list);
            }

            tr = document.createElement("tr");

            var label = document.createElement("h3");
            label.innerText = tools[i].replace("HEADER-", "");
            var line = document.createElement("hr");
            line.classList.add("dev-tools-header-line");

            tr.appendChild(label);
            tr.appendChild(line);
            table.appendChild(tr);

            list = document.createElement("ul"); // make new list
            list.classList.add("tools-list");
        }
    }
    tr.appendChild(list); // append final list to the row
    tab.appendChild(table);
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

