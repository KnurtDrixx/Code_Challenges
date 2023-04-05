// write me a function that has two arguments.
// the first is an array of integers, the second is a single integer.
// the function should check whether any two integers from the array sum up to equal the second argument integer.
// if there is a match then return an array with the two integers in it, otherwise return an empty array.

const array = [1, 2, 3, 4, 5];
const num = 3;

const numberCounter = (array, num) => {
  const length = array.length;
  if (!length) return;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      let sum = array[i] + array[j];
      if ((sum = num)) {
        return [i, j];
      }
    }
  }
  return [];
};

//this is a good brute force solution but only works if the array being checked is small
//if it was any larger it would take more time to go thruogh both loops.
//for example if there were 1000000 intergers if would have to check 1000000*1000000 times.
//running [1M] through one loop to check how far it is from the answer then running through it again to check for that difference
//so  it only runs 2000000 calculations instead of 1000000^2
