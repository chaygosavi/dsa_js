const arr = [
  [0, 1, 1, 1, 9],
  [1, 0, 1, 9, 1],
  [1, 1, 0, 1, 1],
  [1, 0, 1, 9, 1],
  [0, 1, 1, 1, 9],
];

let i = 0,
  j = 0;

while (i < arr.length && j < arr.length) {
  [arr[i][j], arr[i][arr.length - i - 1]] = [
    arr[i][arr.length - i - 1],
    arr[i][j],
  ];
  i++, j++;
}

for (let row of arr) {
  console.log(row);
}
