// write a recursive funciton to calculate the total sum of the salaries with title developer
// Can anyone please help me with the recursive answer to the above question?

// Here is what I have written but it fails for array with only one employee,

const employee1 = {
  title: "developer",
  salary: 80000
};

const employee2 = {
  title: "developer",
  salary: 80000
};

const employee3 = {
  title: "developer",
  salary: 80000
};

const company = {
  title: "scrummaster",
  role: "sr",
  employees: [employee1, employee2, employee3]
};

function salaryCalculator(company, index = 0, totalSalary = 0) {
  const employee = company.employees[index];

  if (employee && employee.title === "developer") {
    totalSalary += company.employees[index];
    return salaryCalculator(company, index++, totalSalary + employee.salaryf);
  }
  return totalSalary;
}
