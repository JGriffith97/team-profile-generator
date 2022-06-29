const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
  describe('getGithub', () => {
    it('should list the GitHub account specified by "this.github".', () => {
      const empGitHub = "https://github.com/JGriffith97"

      const newEng = new Engineer("Jayden", 2, "griffithjayden97@outlook.com", "https://github.com/JGriffith97")

      expect(newEng.github).toEqual(empGitHub)
    })
  })
})