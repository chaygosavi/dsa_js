let arr = [1, 2, 3, 4, 5, 6, 7],
  k = 3,
  ans = [];

k = k % arr.length;

for (let i = 0; i < arr.length; i++) {
  let newIdx = i - k;

  if (newIdx < 0) {
    newIdx += arr.length;
  }

  ans[newIdx] = arr[i];
}

arr = ans;

console.log(arr);
