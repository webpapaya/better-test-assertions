global.window = global
require('jest-expect-standalone');

const listEmployees = require('./list-employees');
const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 }
];

describe('jest expect', () => {
  it('returns more than zero employees', () => {
    const result = listEmployees(employees);
    expect(result.length).toBeGreaterThanOrEqual(0);
  });

  it('returns employees which are older than 18', () => {
    const result = listEmployees(employees);

    result.forEach((member) => {
      expect(member.age).toBeGreaterThanOrEqual(18)
    });
  });

  it('returns employees ordered by name descendent', () => {
    const result = listEmployees(employees);
    result.reduce((a, b) => expect(a.age).toBeLessThanOrEqual(b.age))
  });

  it('returns employees whose names are capitalized', () => {
    const result = listEmployees(employees);
    result.forEach((member) => {
      expect(member.name).toEqual(member.name.toUpperCase())
    });
  });
});
