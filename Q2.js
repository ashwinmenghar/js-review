import people from "./people.js";

// Group the users based on the profession:
const getGroupOfUsers = () => {
  return people.reduce((result, engineer) => {
    if (!result[engineer.profession]) {
      result[engineer.profession] = [];
    }
    result[engineer.profession].push(engineer.name);
    return result;
  }, {});
};

console.log(getGroupOfUsers());
