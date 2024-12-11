// var moveZeroes = function (arr) {
//   let i = 0,
//     j = 0;

//   while (i < arr.length) {
//     if (arr[i] != 0) {
//       arr[j] = arr[i];
//       j++;
//     }

//     i++;
//   }

//   while (j < arr.length) {
//     arr[j] = 0;
//     j++;
//   }
//   console.log(arr);
// };

var moveZeroes = function (arr) {
  const n = arr.length;
  let i = 0,
    j = 0;

  while (i < n) {
    if (arr[i] != 0) {
      arr[j] = arr[i];
      j++;
    }
    i++;
  }

  while (j < n) {
    arr[j] = 0;
    j++;
  }

  console.log(arr);
};

moveZeroes([0, 1, 0, 3, 12]);
