let arr = [
  [1, 2, 3, 99],
  [4, 5, 6, 99],
  [7, 8, 9, 99],
];

for (let i = 0; i < arr[0].length; i++) {
  let row = "";
  for (let j = 0; j < arr.length; j++) {
    row += arr[j][i];
  }
  console.log(row);
}

console.log("/////////////////////");

for (let i = 0; i < arr.length; i++) {
  let col = "";
  for (let j = 0; j < arr[i].length; j++) {
    col += arr[i][j];
  }
  console.log(col);
}
