// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

x = "45385593107843568";

function fakeBin(x) {
  if (!x) {
    return;
  }
  //x will always be positive and truthy
  const numberHolder = x.split("");
  //numberHolder is an array of strings
  const numberArray = [];
  //   console.log(numberArray);
  for (let i = 0; i < numberHolder.length; i++) {
    let numberPusher = parseInt(numberHolder[i]);
    numberArray.push(numberPusher);
    // console.log(numberArray);
  }
  //number array is an array of numbers

  const checkedNumbers = numberArray.map((check) => {
    if (check < 5) {
      return 0;
    } else {
      return 1;
    }
  });
  const fakeBinary = checkedNumbers.join("");
  const fakeBinaryString = fakeBinary.toString();
  console.log(fakeBinaryString);
  return fakeBinary;
}
fakeBin(x);

//! final thoughts
//alot of array manipulation in this one, there is the potential for the code to slow down if the input string is too long since there are
// a for loop and a map running
