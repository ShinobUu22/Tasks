//Write a function that takes an array of positive integers and returns the length of the longest chain of consecutive numbers. A chain is defined as a sequence of numbers in the array where each number is exactly one more than the previous number in the sequence, and the sequence can be in any order in the array.

function longestConsicutive(numsArr) {
  if (numsArr.length === 0) return 0;

  const numSet = new Set(numsArr);
  let LChain = 0;
  for (let n of numSet) {
    if (!numSet.has(n - 1)) {
      let current = n;
      let currentLen = 1;

      while (numSet.has(current + 1)) {
        current++;
        currentLen++;
      }

      LChain = Math.max(LChain, currentLen);
    }
  }
  return console.log(" longestChain is :", LChain);
}

longestConsicutive([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6]);
