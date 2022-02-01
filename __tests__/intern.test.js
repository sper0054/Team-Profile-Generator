const Intern = require ('../lib/Intern.js');

test("Can set intern school", () => {
    const testValue = "Michigan St";
    const e = new Intern("Dave", 12345, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() to be intern", () => {
    const testValue = "Intern";
    const e = new Intern("Dave", 12345, "test@test.com", "Michigan St");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "Michigan St";
    const e = new Intern("Dave", 12345, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});
