// var majorityElement = function (arr) {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > n / 2) {
//       return arr[i];
//     }
//   }

//   return -1;
// };

var majorityElement = function (arr) {
  const n = arr.length;
  const map = new Map();

  for (let i = 0; i < n; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else map.set(arr[i], 1);
  }

  console.log(map);
  for (let [key, value] of map.entries()) {
    if (value > n / 2) {
      return key;
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
