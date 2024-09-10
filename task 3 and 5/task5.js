function countSmaller(nums) {
  let counts = new Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    let count = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    counts[i] = count;
  }

  return counts;
}

console.log(countSmaller([1, 2, 6, 3, 4, 2, 6]));

/* Time Complexity:
The first loop runs 'n; times for each iteration and the second loop runs 'n-1' times. Thus the time complexity is O(n^2).
*/

/*
    Space complexity:
    The space complexity is O(n).
*/
