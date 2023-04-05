// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
// Examples
console.log(remove("Hi!") == "Hi", remove("Hi!!!") == "Hi!!", remove("!Hi") == "!Hi", remove("!Hi!") == "!Hi", remove("Hi! Hi!") == "Hi! Hi", remove("Hi") == "Hi");
function remove(string) {
  const holder = [...string];

  if (holder[holder.length - 1] === "!") {
    holder.pop();
  }

  const exclamationPointless = holder.join("");
  //an array with a string inside

  //coding and coding....
  return exclamationPointless;
}

//! final thoughts
// .length returns the total characters in a string. .length - 1 returns the last character in the string.

function remove(string) {
  const stringHolder = string.slice(-1);
  if (stringHolder === "!") {
    console.log(string.substring(0, string.length - 1));
    return string.substring(0, string.length - 1);
  }

  console.log(stringHolder);
  return string;
}

//! final thoughts 2
//similar issue as above, substring -2 would remove 2 characters instead of returning and dropping the last character.
