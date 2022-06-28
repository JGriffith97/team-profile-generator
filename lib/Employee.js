class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name
  }

  getEmail() {
    return this.email
  }

  // Returns 'employee'
  getRole() {
    return 'Employee'
  }

  getId() {
    return this.id
  }
}

module.exports = Employee