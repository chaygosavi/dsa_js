var missingNumber = function (nums) {
  let n = nums.length;
  console.log(nums.reduce((total, item) => total + item, 0));
  return nums.reduce((total, item) => total + item, 0) - (n * (n + 1)) / 2;
};

console.log(missingNumber([0, 1, 3]));
