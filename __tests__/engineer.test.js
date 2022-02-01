const Engineer = require ('../lib/Engineer.js');

test("Can set GitHub username", () => {
    const testValue = "GitHubusername";
    const e = new Engineer("Dave", 12345, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole() to be engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Dave", 12345, "test@test.com", "GitHubusername");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubusername";
    const e = new Engineer("Dave", 12345, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});