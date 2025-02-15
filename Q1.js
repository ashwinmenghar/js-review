import people from "./people.js";

// Write a function to return a list of engineers who are above 30 years of age.
const getListOfEngineers = () => {
  return people
    .filter(
      (engineer) => engineer.age > 30 && engineer.profession == "Engineer"
    )
    .map((engineer) => engineer.name);
};

console.log(getListOfEngineers());
