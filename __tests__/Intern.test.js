const Intern = require('../lib/Intern');
const intern = new Intern('Russel', '9816', 'fakemail@gmail.com', 'Harvard');

test('tests the constructor values to return correctly', () => {
    expect(intern.name).toBe('Russel');
    expect(intern.id).toBe('9816');
    expect(intern.email).toBe('fakemail@gmail.com');
    expect(intern.school).toBe('Harvard');

});

test('tests for correct value from getName()', () => {
    expect(intern.getName()).toBe('Russel');
});

test('tests for correct value from getId()', () => {
    expect(intern.getId()).toBe('9816');
});

test('tests for correct value from getEmail()', () => {
    expect(intern.getEmail()).toBe('fakemail@gmail.com');
});

test('tests for correct value from getSchool()', () => {
    expect(intern.getSchool()).toBe('Harvard');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});