const Intern = require('../lib/Intern')

// Positive ---------------------------------------------------------------------------------------------------------------------
describe('Intern', () => {
  describe('getSchool', () => {
    it('should list the name of the school specified by "this.school".', () => {
      const intSchool = "East City University"

      const newInt = new Intern("Rick", 3, "RickyRickRoll@placeholder.com", "East City University")

      expect(newInt.school).toEqual(intSchool)
    })
  })
})
//-------------------------------------------------------------------------------------------------------------------------------