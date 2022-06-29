const Manager = require("../lib/Manager")

// Positive ---------------------------------------------------------------------------------------------------------------------
describe('Manager', () => {
  describe('getOfficeNumber', () => {
    it('should list the name of the employee specified by "this.officeNumber".', () => {
      const manOffNum = 6

      const newMan = new Manager("Trevon", 4, "TrevonDaMan@placeholder.com", 6)

      expect(newMan.officeNumber).toEqual(manOffNum)
    })
  })
})
//-------------------------------------------------------------------------------------------------------------------------------