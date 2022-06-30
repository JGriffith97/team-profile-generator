const Employee = require ('./Employee')

class Engineer extends Employee {
  constructor(engineerName, engineerId, engineerEmail, github) {
    super(engineerName, engineerId, engineerEmail) // Requires content to replace empName, id, and email
    this.github = github
  }

  getGitHub() {
    return this.github
  }

  // Returns 'engineer'
  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer