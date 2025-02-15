import people from "./people.js";
// Find the average salary for each profession:

const getAvgSalaryOfEachProfession = () => {
  const avgSalaryAndCountOfEmp = people.reduce(
    (result, { profession, salary }) => {
      if (!result[profession]) {
        result[profession] = { salary: 0, professionCount: 0 };
      }

      result[profession].salary += Number(salary);
      result[profession].professionCount += 1;

      return result;
    },
    {}
  );

  let formattedResult = {};

  //   for (let key in avgSalaryAndCountOfEmp) {
  //     formattedResult[key] = Number(
  //       (
  //         avgSalaryAndCountOfEmp[key].salary /
  //         avgSalaryAndCountOfEmp[key].professionCount
  //       ).toFixed(2)
  //     );
  //   }

  //   return formattedResult;

  Object.entries(avgSalaryAndCountOfEmp).forEach(
    (engineerSalaryAndEmpCount) => {
      const { salary, professionCount } = engineerSalaryAndEmpCount[1];
      formattedResult[engineerSalaryAndEmpCount[0]] = Number(
        (salary / professionCount).toFixed(2)
      );
    }
  );

  console.log(formattedResult);
};

console.log(getAvgSalaryOfEachProfession());
