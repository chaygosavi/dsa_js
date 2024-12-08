// const largetElem = (arr) => {
//   return arr.sort((a, b) => a - b)[arr.length - 1];
// };

const largetElem = (arr) => {
  let largest = arr[0],
    n = arr.length;

  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
};

console.log(largetElem([1, 2, 3, 11, 9, 4, 5]));
