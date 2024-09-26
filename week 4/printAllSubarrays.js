let arr = [1, 2, 3],
  n = 3;

for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    let row = "";
    for (let k = i; k <= j; k++) {
      row += arr[k];
    }
    console.log(row);

    // console.log(arr.slice(i, j + 1).join(''));
  }
}
