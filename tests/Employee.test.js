const Employee = require('../lib/Employee');
const employee = new Employee('Russel', '9816', 'fakemail@gmail.com');

test('tests the constructor values to return correctly', () => {
    expect(employee.name).toBe('Russel');
    expect(employee.id).toBe('9816');
    expect(employee.email).toBe('fakemail@gmail.com');
});

test('tests for correct value from getName()', () => {
    expect(employee.getName()).toBe('Russel');
});

test('tests for correct value from getId()', () => {
    expect(employee.getId()).toBe('9816');
});

test('tests for correct value from getEmail()', () => {
    expect(employee.getEmail()).toBe('fakemail@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});