// var maxSubArray = function (arr) {
//   let max = -Infinity;
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       max = Math.max(max, sum);
//     }
//   }
//   return max;
// };

var maxSubArray = function (arr) {
  // Using Kadane

  const n = arr.length;
  let max = -Infinity,
    sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum > 0) {
      max = sum;
    } else sum = 0;
  }
  return max;
};

console.log(maxSubArray([-1]));
