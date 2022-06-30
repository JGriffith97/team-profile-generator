const inquirer = require("inquirer");
const fs = require('fs')
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


// --------------------------------------------------------------------------------

const team = []

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
    choices: ['New Engineer', 'New Intern', 'Finish Team']
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
    message: "Please enter the engineer's name.",
  },
  {
    type: 'input',
    name: 'engineerId',
    message: "Please enter the engineer's employee ID number.",
  },
  {
    type: 'input',
    name: 'engineerEmail',
    message: "Please enter the engineer's email address.",
  },
  {
    type: 'input',
    name: 'github',
    message: "Please enter the engineer's GitHub username.",
  },
]

const menuQs = [
  {
    type: 'list',
    name: 'addTeamOrSubmit',
    message: 'Add new team member? Or finish the team?',
    choices: ['New Engineer', 'New Intern', 'Finish Team']
  }
]


// ---------------------------------------------------------------------------------


function addManager() {
  inquirer
    .prompt(initialQs)
      .then((answers) => {
        console.log(answers)
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber)
        team.push(manager)

        if (answers.addTeamMemberQ === 'Finish Team') {
          teamContent()
        } else if (answers.addTeamMemberQ === 'New Intern') {
          addIntern()
          // generateDocument(answers)
        } else if (answers.addTeamMemberQ === 'New Engineer') {
          addEngineer()
          // generateDocument(answers)
        }
    })
}


function addIntern() {
  inquirer
    .prompt(addNewInternQs)
      .then((answers) => {
        console.log(answers)
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school)
        team.push(intern)
        menu()
    })
}

function addEngineer() {
  inquirer
    .prompt(addNewEngineerQs)
      .then((answers) => {
        console.log(answers)
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github)
        team.push(engineer)
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
          teamContent()
        }
      })
}

// const generateDocument = ({managerName, managerId, managerEmail, officeNumber, internName, internId, internEmail, internSchool, engineerName, engineerId, engineerEmail, engineerGithub})

function teamContent() {
  let teamCards = ``
  console.log('Team: ', team)
  console.log('Testing team-manager: ', team[0])
    for (let i = 0; i < team.length; i++) {
      const employee = team[i]
      if (employee.getRole() === 'Manager') {
      teamCards += renderManager(employee)
    } if (employee.getRole() === 'Engineer') {
      teamCards += renderEngineer(employee)
    } if (employee.getRole() === 'Intern') {
      teamCards += renderIntern(employee)
    }
  }
  const fullHtml = beginningHtml + teamCards + endHtml
  console.log(fullHtml)

  fs.writeFile("./dist/team.html", fullHtml, (err) =>
  err ? console.log(err) : console.log('Created team.html!'))
}

const beginningHtml = `
<!DOCTYPE html>

<html lang="en">

  <head>
    <meta charser="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/style.css"/>
    <title>Team Profiles</title>
  </head>


    <body>
      <header class="header">
        <h1>Team Profiles</h1>
      </header>

        <main class = "main-body">
        `


function renderManager(manager) {
const managerTemplate = `

          <div class = "card">
            <div class = "card-header">
              <h4>${manager.getName()}</h4>
              <hr>
            </div>
            <div class = "card-body">
            <p class = "card-line">ID Number: ${manager.getId()}</p>
            <p class = "card-line">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class = "card-line">Office Number ${manager.getOfficeNumber()}</p>
            </div>
          </div>

`
return managerTemplate
}

function renderEngineer(engineer) {
const engineerTemplate = `

          <div class = "card">
            <div class = "card-header">
              <h4>${engineer.getName()}</h4>
              <hr>
            </div>
            <div class = "card-body">
            <p class = "card-line">ID Number: ${engineer.getId()}</p>
            <p class = "card-line">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class = "card-line">GitHub: <a href="https://github.com/${engineer.getGitHub()}">${engineer.getGitHub()}</a></p>
            </div>
          </div>
          
`
return engineerTemplate
}

function renderIntern(intern) {
const internTemplate = `

          <div class = "card">
            <div class = "card-header">
              <h4>${intern.getName()}</h4>
              <hr>
            </div>
            <div class = "card-body">
              <p class = "card-line">ID Number: ${intern.getId()}</p>
              <p class = "card-line">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></p>
              <p class = "card-line">School: ${intern.getSchool()}</p>
            </div>
          </div>
          
`
return internTemplate
}        

const endHtml = `
        </main>

    </body>

</html>
`

// ------------------------------------------------------------------------------

function init() {
  addManager()
}

init()