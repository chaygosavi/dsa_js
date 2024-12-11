// function removeDups(arr) {
//   let i = 0, // unique element
//     j = 0, // jump over dups
//     index = 0,
//     n = arr.length;

//   // Beacuse its pointing at unique values
//   while (i < n) {
//     arr[index] = arr[i];
//     index++;

//     while (j < n && arr[j] === arr[i]) {
//       j++;
//     }

//     // next unique element @ j'ths position
//     i = j;
//   }
//   console.log(arr, index);
// }

// removeDups([1, 1, 1, 2, 2, 3, 3, 3]);

// function removeDups(arr) {
//   let i = 0,
//     index = 0,
//     n = arr.length;

//   while (i < n) {
//     arr[index] = arr[i];
//     index++;

//     while (i < n && arr[index - 1] == arr[i]) {
//       i++;
//     }
//   }

//   return index;
// }

function removeDups(arr) {
  const n = arr.length;

  let i = 0;

  for (let j = 1; j < n; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  console.log(arr, i + 1);
}

removeDups([1, 1, 1, 2, 2, 3, 3, 3]);
