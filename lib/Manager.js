const Employee = require ('./Employee')

class Manager extends Employee {
  constructor(officeNumber) {
    super(empName, id, email) // Requires content to replace name, id, and email
    this.officeNumber = officeNumber
  }

  // Returns 'manager'
  getRole() {
    return 'Manager'
  }
}

module.exports = Manager