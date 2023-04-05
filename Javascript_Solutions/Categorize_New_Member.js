// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
// Example

const data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

//! input is an array of arrays
function openOrSenior(data) {
  //for loop to go over data
  //nested for loop to go thru data in sub array
  //if statement to cehck if data[0] >= 55 || data[1]>7

  let results = data.map((pair) => {
    const leftNum = pair[0];
    const rightNum = pair[1];

    if (leftNum >= 55 && rightNum > 7) {
      return "Senior";
    } else {
      return "Open";
    }
  });
  {
    //data.filter()
    console.log(results);
  }
  console.log(data);
  return results;
}
openOrSenior(data);

//! final thoughts
//.map method returns a new array with new data
//a forEach loop would need an empty array to push the data into
