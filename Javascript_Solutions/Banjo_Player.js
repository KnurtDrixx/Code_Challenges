// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"

// Names given are always valid strings.

// function areYouPlayingBanjo(name) {
//   const nameSplit = name.split("");

//   for (i = 0; i < nameSplit.length; i++) {
//     if (nameSplit[i].charAt(0) === "r" || "R") {
//       return `${name} plays banjo`;
//     } else {
//       return `${name} does not play banjo`;
//     }
//   }
// }

function areYouPlayingBanjo(name) {
  const nameSplit = name.charAt(0);

  if (nameSplit === "r" || nameSplit === "R") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

//! Final Thoughts
//I needed to check in the if statement nameSplit === "R"
