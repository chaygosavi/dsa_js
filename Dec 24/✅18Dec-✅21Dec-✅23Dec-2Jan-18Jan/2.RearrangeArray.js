// https://leetcode.com/problems/rearrange-array-elements-by-sign/

// var rearrangeArray = function (arr) {
//   const n = arr.length;

//   const positiveArr = arr.filter((element) => element > 0);
//   const negativeArr = arr.filter((element) => element < 0);

//   let i = 0,
//     j = 0;

//   console.log(positiveArr);
//   console.log(negativeArr);

//   for (let k = 0; k < n; k++) {
//     if (k % 2 === 0) {
//       arr[k] = positiveArr[i];
//       i++;
//     } else {
//       arr[k] = negativeArr[j];
//       j++;
//     }
//   }

//   return arr;
// };

var rearrangeArray = function (arr) {
  const n = arr.length;
  let i = 0,
    j = 1,
    ans = [];

  for (let k = 0; k < n; k++) {
    if (arr[k] > 0) {
      ans[i] = arr[k];
      i += 2;
    } else {
      ans[j] = arr[k];
      j += 2;
    }
  }

  return ans;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
