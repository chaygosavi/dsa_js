// https://leetcode.com/problems/majority-element-ii/description/

var majorityElement = function (arr) {
  const n = arr.length;
  const map = new Map();
  const result = [];
  for (let i = 0; i < n; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);

    if (map.get(arr[i]) === Math.floor(n / 3) + 1) {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(majorityElement([3, 2, 3]));
