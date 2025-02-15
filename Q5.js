const { organisation } = require("./organisation.json");

// Get all employees across all divisions working on projects with a budget exceeding $150,000
// console.log(organisation);

const getNamesOfEmploysWorkingOnProject = () => {
  const { divisions } = organisation;

  divisions.reduce((result, { divisionName, departments }) => {
    departments.forEach((department) => {
      department.employees.forEach((departmentArr) => {
        console.log(departmentArr);
      });
    });
  }, []);
};

console.log(getNamesOfEmploysWorkingOnProject());
