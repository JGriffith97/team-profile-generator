const inquirer = require("inquirer");
const fs = require('fs')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// --------------------------------------------------------------------------------


const initialQs = [
  {
    type: 'input',
    name: 'managerName',
    message: "Please enter the team manager's name.",
  },
  {
    type: 'input',
    name: 'managerId',
    message: "Please enter the manager's employee ID number.",
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "Please enter the manager's email address.",
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "Please enter the manager's office number.",
  },
  {
    type: 'list',
    name: 'addTeamMemberQ',
    message: "Add another team member? Or submit finished team?",
    choices: ['New Intern', 'New Engineer', 'Finish Team']
  },
]

const addNewInternQs = [
  {
    type: 'input',
    name: 'internName',
    message: "Please enter the intern's name.",
  },
  {
    type: 'input',
    name: 'internId',
    message: "Please enter the intern's employee ID number.",
  },
  {
    type: 'input',
    name: 'internEmail',
    message: "Please enter the intern's email address.",
  },
  {
    type: 'input',
    name: 'school',
    message: "Please enter the intern's school.",
  },
]

const addNewEngineerQs = [
  {
    type: 'input',
    name: 'engineerName',
    message: "Please enter the intern's name.",
  },
  {
    type: 'input',
    name: 'engineerId',
    message: "Please enter the intern's employee ID number.",
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "Please enter the intern's email address.",
  },
  {
    type: 'input',
    name: 'github',
    message: "Please enter the intern's school.",
  },
]

const menuQs = [
  {
    type: 'list',
    name: 'addTeamOrSubmit',
    message: 'Add new team member? Or finish the team?',
    choices: ['New Intern', 'New Engineer', 'Finish Team']
  }
]


// ---------------------------------------------------------------------------------


function addManager() {
  inquirer
    .prompt(initialQs)
      .then((answers) => {
        console.log(answers)

        if (answers.addTeamMemberQ === 'Finish Team') {
          generateDocument(answers)
        } else if (answers.addTeamMemberQ === 'New Intern') {
          addIntern()
          generateDocument(answers)
        } else if (answers.addTeamMemberQ === 'New Engineer') {
          addEngineer()
          generateDocument(answers)
        }

       const manager = new Manager(answers.officeNumber)
      newManager(answers)
    })
}


function addIntern() {
  inquirer
    .prompt(addNewInternQs)
      .then((answers) => {
        console.log(answers)

        const intern = new Intern(answers.school)
        newIntern(answers)
        menu()
    })
}

function addEngineer() {
  inquirer
    .prompt(addNewEngineerQs)
      .then((answers) => {
        console.log(answers)

        const engineer = new Engineer(answers.github)
        newEngineer(answers)
        menu()
    })
}

function menu() {
  inquirer
    .prompt(menuQs)
      .then((answers) => {
        if (answers.addTeamOrSubmit === 'New Intern') {
          addIntern()
        } else if (answers.addTeamOrSubmit === 'New Engineer') {
          addEngineer()
        } else if (answers.addTeamOrSubmit === 'Finish Team') {
          generateDocument()
        }
      })
}

const generateDocument = ({managerName, managerId, managerEmail, officeNumber, internName, internId, internEmail, internSchool, engineerName, engineerId, engineerEmail, engineerGithub})

// ------------------------------------------------------------------------------

function init() {
  addManager()
}