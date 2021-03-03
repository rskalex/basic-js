const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members == null) {
    return false;
  } else {
    let newArr = [];
    for ( let i = 0; i < members.length; i++) {
      if (typeof members[i] === 'string') {
        const firsLetter = members[i].trim().charAt(0).toUpperCase();
        newArr.push(firsLetter);
        console.log(newArr);
      } 
    }
    return newArr.sort().join('');
  }
};

// createDreamTeam([
//   'Amelia',
//   'Grace',
//   'Lily',
//   'Ruby',
//   true,
// ]);