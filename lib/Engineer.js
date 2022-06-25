const Employee = require ('./Employee')

class Engineer extends Employee {
  constructor(github) {
    super(name, id, email) // Requires content to replace name, id, and email
    this.github = github
  }

  getGithub() {
    return this.github
  }

  // Returns 'engineer'
  getRole() {
    return 'Engineer'
  }
}

module.exports = Engineer