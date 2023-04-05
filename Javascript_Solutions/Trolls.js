// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//put into array, split the array, map over array, match vowels and remove, return string
let str = "This website is for losers LOL!";

function disemvowel(str) {
  const stringHolder = [...str];

  console.log(stringHolder);
  //string is now an array of characters

  function is_consonant(letter) {
    const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

    const is_vowel = vowels.includes(letter);

    return !is_vowel;
  }

  const filteredString = stringHolder.filter(is_consonant);

  //vowels are filtered out at this point

  const joinedString = filteredString.join("");

  return joinedString;
}
disemvowel(str);

//!final thoughts
// [...str] spreads out all characters into an array but one character at a time
//.filter to filter out the vowels
//.join to join all the characters back together
