// Describe each of the tests for the employee
// Positive, negative, exception.
// Positive is normal functionality
// negative is what can go wrong, to test against. No database or API calls in this case.
// Exception, errors, in case of broken code.

const Employee = require("../lib/Employee");

describe('Employee', () => {
  descrive('getName', () => {
    it('should list the name of the employee specified by "this.name".')
      const empName = "John";

      const newEmp = new Employee("John", 1, "JohnJc@placeholder.com")

      expect(newEmp.name).toEqual(empName)
  })
})