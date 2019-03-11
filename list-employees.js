const listEmployees = (employees) => employees
  .filter((employee) => employee.age >= 18)
  .sort((a, b) => b.name.localeCompare(a.name))
  .map((employee) => ({ ...employee, name: employee.name.toUpperCase() }));

module.exports = listEmployees;