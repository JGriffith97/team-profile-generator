const Employee = require ('./Employee')

class Intern extends Employee {
  constructor(school) {
    super(name, id, email) // Requires content to replace name, id, and email
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