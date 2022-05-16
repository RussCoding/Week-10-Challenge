const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Russel', '9816', 'fakemail@gmail.com', 'fakeGit');

test('tests the constructor values to return correctly', () => {
    expect(engineer.name).toBe('Russel');
    expect(engineer.id).toBe('9816');
    expect(engineer.email).toBe('fakemail@gmail.com');
    expect(engineer.github).toBe('fakeGit');

});

test('tests for correct value from getName()', () => {
    expect(engineer.getName()).toBe('Russel');
});

test('tests for correct value from getId()', () => {
    expect(engineer.getId()).toBe('9816');
});

test('tests for correct value from getEmail()', () => {
    expect(engineer.getEmail()).toBe('fakemail@gmail.com');
});

test('tests for correct value from getGithub()', () => {
    expect(engineer.getGithub()).toBe('fakeGit');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});