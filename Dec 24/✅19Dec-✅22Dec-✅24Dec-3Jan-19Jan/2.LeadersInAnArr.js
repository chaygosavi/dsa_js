// const leader = (arr) => {
//   const n = arr.length;
//   let ans = [];

//   for (let i = 0; i < n; i++) {
//     let leader1 = true;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] > arr[i]) {
//         leader1 = false;
//       }
//     }
//     if (leader1) {
//       ans.push(arr[i]);
//     }
//   }

//   return ans;
// };

const leader = (arr) => {
  const n = arr.length;
  let ans = [],
    max = -Infinity;

  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      ans.push(arr[i]);
    }
  }

  return ans.reverse();
};

console.log(leader([10, 22, 12, 3, 0, 6]));
