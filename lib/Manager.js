const Employee = require ('./Employee')

class Manager extends Employee {
  constructor(officeNumber) {
    super(name, id, email) // Requires content to replace name, id, and email
    this.officeNumber
  }

  // Returns 'manager'
  getRole() {
    return 'Manager'
  }
}