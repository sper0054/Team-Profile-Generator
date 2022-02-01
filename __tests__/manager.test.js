const Manager = require ('../lib/Manager.js');

test("Can set manager office number", () => {
    const testValue = 100;
    const e = new Manager("Dave", 12345, "test@test.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() to be manager", () => {
    const testValue = "Manager";
    const e = new Manager("Dave", 12345, "test@test.com", 100);
    expect(e.getRole()).toBe(testValue);
});
