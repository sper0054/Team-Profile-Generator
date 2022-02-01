const Employee = require ('../lib/Employee.js');

test("Can set an employee name", () => {
    const name = "Dave";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set an employee id", () => {
    const testValue = 12345;
    const e = new Employee("Dave", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set an employee email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Dave", 12345, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Dave";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 12345;
    const e = new Employee("Dave", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Dave", 12345, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Dave", 12345, "test@test.com");
    expect(e.getRole()).toBe(testValue);
});