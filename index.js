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
}

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

