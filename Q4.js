import people from "./people.js";

// Write a function that returns the youngest and oldest person in each profession.

// [{
//  "Engineer" : [youngest : "asd" oldest: "Qwe"]
//  "Lawyer" : [youngest : "asd" oldest: "Qwe"]
// }]

const getYoungestAndOldestPerson = () => {
  const professionArr = people.reduce((result, employ) => {
    if (!result[employ.profession]) {
      result[employ.profession] = [];
    }
    result[employ.profession].push(employ);
    return result;
  }, {});

  let finalResult = {};

  Object.entries(professionArr).forEach((profession) => {
    let minAge = Number.MAX_SAFE_INTEGER;
    let nameOfYoungestEmp = "";
    let nameOfOldestEmp = "";
    let maxAge = 0;

    Object.entries(profession[1]).forEach((arrOfEmp) => {
      const age = Number(arrOfEmp[1].age);
      const name = arrOfEmp[1].name;

      if (age < minAge) {
        minAge = age;
        nameOfYoungestEmp = name;
      }
      if (age > maxAge) {
        maxAge = age;
        nameOfOldestEmp = name;
      }
    });

    finalResult[profession[0]] = {
      youngest: nameOfYoungestEmp,
      oldest: nameOfOldestEmp,
    };
  });
  return finalResult;
};

console.log(getYoungestAndOldestPerson());
