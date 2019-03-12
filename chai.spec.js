const chai = require("chai");
chai.use(require("chai-sorted"));

const { expect } = require('chai');
const listEmployees = require('./list-employees');
const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 }
];

describe('chai', () => {
  it('returns more than zero employees', () => {
    const result = listEmployees(employees);
    expect(result).to.have.lengthOf.at.least(0);
  });

  it('returns employees which are older than 18', () => {
    const result = listEmployees(employees);

    result.forEach((member) => {
      expect(member.age).to.be.gte(18)
    });
  });

  it('returns employees ordered by name descendent', () => {
    const result = listEmployees(employees);
    expect(result).to.be.sortedBy('name', { descending: true });
  });

  it('returns employees whose names are capitalized', () => {
    const result = listEmployees(employees);
    result.forEach((member) => {
      expect(member.name).to.equal(member.name.toUpperCase())
    });
  });
});
