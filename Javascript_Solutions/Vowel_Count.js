// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  const lowercase = str.toLowerCase();

  const wordHolder = lowercase.split("");
  //this is an array of letters

  for (let i = 0; i < wordHolder.length; i++) {
    if (vowels.includes(wordHolder[i])) {
      vowelCount += 1;
    }
  }
  console.log(vowelCount);

  //split string into characters
  //map over characters
  //match vowles and add to variable
  //return variable

  return vowelCount;
}
getCount("beans");
