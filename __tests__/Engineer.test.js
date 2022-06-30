const Engineer = require('../lib/Engineer')


// Positive ---------------------------------------------------------------------------------------------------------------------
describe('Engineer', () => {
  describe('getGithub', () => {
    it('should list the GitHub account specified by "this.github".', () => {
      const empGitHub = "JGriffith97"

      const newEng = new Engineer("Jayden", 2, "griffithjayden97@outlook.com", "JGriffith97")

      expect(newEng.github).toEqual(empGitHub)
    })
  })
})
//-------------------------------------------------------------------------------------------------------------------------------