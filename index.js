const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

let finalTeamArray = [];

function startingPrompt() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamname',
            message: 'Please enter the team name.',
        }
    ])
        .then(data => {
            const teamName = data.teamname;
            finalTeamArray.push(teamName);
            addManager();
        })
};

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return "Please enter the manager's name";
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's employee id number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email address?",
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the team manager's office number?",
        },
    ])
        .then(data => {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const office = data.office;
            const teamMember = new Manager(name, id, email, office);
            finalTeamArray.push(teamMember);
            addTeamMembers();
        });
};

function addTeamMembers() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addMemberData',
            message: 'Would you like to add more team members?',
            choices: ['Yes, an engineer', 'Yes, an intern', 'No'],
        },
    ])
        .then(data => {
            switch (data.addMemberData) {
                case 'Yes, an engineer':
                    addEngineer();
                    break;
                case 'Yes, an intern':
                    addIntern();
                    break;
                case 'No':
                    compileTeam();
                    break;
            }
        });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's employee id number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's Github username?",
        },
    ])
        .then(data => {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const github = data.github;
            const teamMember = new Engineer(name, id, email, github);
            finalTeamArray.push(teamMember);
            addTeamMembers();
        });
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's employee id number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "Where does the intern attend school?",
        },
    ])
        .then(data => {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;
            const teamMember = new Intern(name, id, email, school);
            finalTeamArray.push(teamMember);
            addTeamMembers()
        });
};

function generateHtml(finalTeamArray) {
    return `./dist/${finalTeamArray[0].toLowerCase().split(' ').join('-')}.html`
};

function compileTeam() {
    console.log('You have successfully created your team site');
    const htmlArray = [];
    const htmlBeginning = `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link href="./style.css" rel="stylesheet">
            <title>${teamName}</title>
        </head>

        <body>
            <div class="header">
                <h1>${finalTeamArray[0]}</h1>
            </div>
            <div class="card-container">
    `;

    htmlArray.push(htmlBeginning);

    for (let i = 1; i < finalTeamArray.length; i++) {
        let object = `
        <div class="member-card">
            <div class="card-top">
                <h2>${finalTeamArray[i].name}</h2>
                <h2>${finalTeamArray[i].title}</h2>
            </div>
            <div class="card-bottom">
                <p>ID: ${finalTeamArray[i].id}</p>
                <p>Email: <a href="mailto:${finalTeamArray[i].email}">${finalTeamArray[i].email}</a></p>
        `;

        if (finalTeamArray[i].office) {
            object += `
            <p>Office Number: ${finalTeamArray[i].office}</p>
            `
        }

        if (finalTeamArray[i].github) {
            object += `
            <p>GitHub: <a href="https://github.com/${finalTeamArray[i].github}" target="_blank">${finalTeamArray[i].github}</a></p>
            `
        }

        if (finalTeamArray[i].school) {
            object += `
            <p>School: ${finalTeamArray[i].school}</p>
            `
        }

        object += `
            </div>
            </div>
        `;

        htmlArray.push(object)
    }

    const htmlEnd = `
    </div>
    <footer>
    &copy;2022
    </footer>
    </body>
    </html>
    `;

    htmlArray.push(htmlEnd);

    fs.writeFile(generateHtml(finalTeamArray), htmlArray.join(""), function (err) {
        if (err) {
            throw err;
        }
    })
};

startingPrompt();
