// const longestSubarraySumK = (arr, k) => {
//   const n = arr.length;
//   let max = 0;

//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       let sum = 0;
//       for (let l = i; l < j + 1; l++) {
//         sum += arr[l];
//       }
//       if (sum === k) {
//         max = Math.max(max, j - i + 1);
//       }
//     }
//   }

//   return max;
// };

// const longestSubarraySumK = (arr, k) => {
//   const n = arr.length;
//   let max = 0;

//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       if (sum === k) {
//         max = Math.max(max, j - i + 1);
//       }
//     }
//   }

//   return max;
// };

// const longestSubarraySumK = (arr, k) => {
//   const n = arr.length;
//   let max = 0,
//     preSum = {},
//     sum = 0;

//   for (let i = 0; i < n; i++) {
//     sum += arr[i];
//     if (sum === k) {
//       max = Math.max(max, i + 1);
//     }

//     if (!preSum[sum]) {
//       preSum[sum] = i;
//     }

//     const rem = sum - k;
//     if (preSum[rem]) {
//       max = Math.max(max, i - preSum[rem]);
//     }
//   }

//   return max;
// };

const longestSubarraySumK = (arr, k) => {
  const n = arr.length;
  let i = 0,
    sum = 0,
    max = 0;

  for (let j = 0; j < n; j++) {
    sum += arr[j];

    while (sum > j && i <= j) {
      sum -= arr[i];
      i++;
    }
    if (sum === k) {
      max = Math.max(max, j - i + 1);
    }
  }

  return max;
};

console.log(longestSubarraySumK([2, 0, 0, 3], 3));
