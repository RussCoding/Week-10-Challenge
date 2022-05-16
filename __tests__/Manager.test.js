const Manager = require('../lib/Manager');
const manager = new Manager('Russel', '9816', 'fakemail@gmail.com', '123');

test('tests the constructor values to return correctly', () => {
    expect(manager.name).toBe('Russel');
    expect(manager.id).toBe('9816');
    expect(manager.email).toBe('fakemail@gmail.com');
    expect(manager.officeNumber).toBe('123');

});

test('tests for correct value from getName()', () => {
    expect(manager.getName()).toBe('Russel');
});

test('tests for correct value from getId()', () => {
    expect(manager.getId()).toBe('9816');
});

test('tests for correct value from getEmail()', () => {
    expect(manager.getEmail()).toBe('fakemail@gmail.com');
});

test('tests for correct value from getGithub()', () => {
    expect(manager.getOfficeNumber()).toBe('123');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});