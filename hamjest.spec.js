const {
  assertThat,
  hasSize,
  greaterThan,
  greaterThanOrEqualTo,
  everyItem,
  orderedBy,
  hasProperty,
  matchesPattern,
} = require('hamjest');
const listEmployees = require('./list-employees');

const inUpperCase = () => matchesPattern(/[A-Z]*/);
const employees = [
  { name: 'Max', age: 17 },
  { name: 'Sepp', age: 18 },
  { name: 'Nina', age: 15 },
  { name: 'Mike', age: 51 }
];
describe('hamjest', () => {
  it('returns more than zero employees', () => {
    const result = listEmployees(employees);
    assertThat(result, hasSize(greaterThan(0)));
  });

  it('returns employees which are older than 18', () => {
    const result = listEmployees(employees);
    assertThat(result, everyItem(hasProperty('age', greaterThanOrEqualTo(18))));
  });

  it('returns employees ordered by name descendent', () => {
    const result = listEmployees(employees);
    assertThat(result, orderedBy((a, b) => a.name > b.name));
  });

  it('returns employees whose names are capitalized', () => {
    const result = listEmployees(employees);
    assertThat(result, everyItem(hasProperty('name', inUpperCase())));
  });
});
