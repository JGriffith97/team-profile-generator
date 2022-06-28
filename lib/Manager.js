const Employee = require ('./Employee')

class Manager extends Employee {
  constructor(managerName, managerId, managerEmail, officeNumber) {
    super(managerName, managerId, managerEmail) // Requires content to replace name, id, and email
    this.officeNumber = officeNumber
  }

  // Returns 'manager'
  getRole() {
    return 'Manager'
  }

  getOfficeNumber() {
    return this.officeNumber
  }
}

module.exports = Manager