// https://leetcode.com/problems/subarray-sum-equals-k/description/

// var subarraySum = function (arr, k) {
//   const n = arr.length;
//   let count = 0;

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];

//       if (sum === k) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

var subarraySum = function (arr, k) {
  const map = new Map();
  const n = arr.length;
  let result = 0,
    sum = 0;

  map.set(0, 1);

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    if (map.has(sum - k)) {
      result += map.get(sum - k);
    }

    map.set(sum, (map.get(sum) || 0) + 1);
  }

  return result;
};

console.log(subarraySum([1, 2, 3], 3));
