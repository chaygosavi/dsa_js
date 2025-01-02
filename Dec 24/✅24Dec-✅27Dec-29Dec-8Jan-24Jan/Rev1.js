// // https://leetcode.com/problems/spiral-matrix/description/

// var spiralOrder = function (matrix) {
//   const n = matrix.length,
//     m = matrix[0].length;
//   const result = [];

//   let top = 0,
//     left = 0,
//     bottom = n - 1,
//     right = m - 1;

//   while (left <= right && top <= bottom) {
//     for (let i = left; i <= right; i++) {
//       result.push(matrix[top][i]);
//     }
//     top++;

//     for (let i = top; i <= bottom; i++) {
//       result.push(matrix[i][right]);
//     }

//     right--;

//     if (top <= bottom) {
//       for (let i = right; i >= left; i--) {
//         result.push(matrix[bottom][i]);
//       }
//     }
//     bottom--;
//     if (left <= right) {
//       for (let i = bottom; i >= top; i--) {
//         result.push(matrix[i][left]);
//       }
//     }

//     left++;
//   }

//   return result;
// };

// console.log(spiralOrder([[1, 2, 3]]));

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
  const n = arr.length;
  let count = 0;

  let prefixArr = [],
    sum = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    prefixArr[i] = sum;
  }

  console.log(prefixArr);

  sum = 0;

  const map = new Map();

  return count;
};

console.log(subarraySum([10, 5, 7, 1, 2, 5, 3], 15));
