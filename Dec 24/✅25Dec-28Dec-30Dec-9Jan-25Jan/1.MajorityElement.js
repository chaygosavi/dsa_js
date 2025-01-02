// https://leetcode.com/problems/majority-element/

// Boyer-Moore Voting Algorithm

var majorityElement = function (arr) {
  const n = arr.length;
  let count = 0,
    majority = null;
  for (let i = 0; i < n; i++) {
    if (count === 0) {
      majority = arr[i];
      count++;
    } else if (arr[i] === majority) {
      count++;
    } else count--;
  }

  return majority;
};

console.log(majorityElement([3, 2, 3]));
