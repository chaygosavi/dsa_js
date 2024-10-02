const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

for (let i = 0; i < arr.length; i++) {
  let row = i,
    col = 0;

  move(row, col, arr);
}

function move(row, col, arr) {
  let row1 = "";
  while (row >= 0 && col < arr[row].length) {
    row1 += arr[row][col] + " ";
    row--;
    col++;
  }
  console.log(row1);
}

for (let j = 1; j < arr[0].length; j++) {
  let row = arr.length - 1,
    col = j;

  move(row, col, arr);
}
