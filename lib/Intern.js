const Employee = require ('./Employee')

class Intern extends Employee {
  constructor(internName, internId, internEmail, school) {
    super(internName, internId, internEmail) // Requires content to replace name, id, and email
    this.school = school
  }

  getSchool() {
    return this.school
  }

  // Returns 'intern'
  getRole() {
    return 'Intern'
  }
}

module.exports = Intern