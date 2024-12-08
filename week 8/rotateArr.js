var rotate = function (arr, k) {
  let n = arr.length;

  k = k % n;

  rotate(arr, 0, n - 1);
  rotate(arr, 0, k - 1);
  rotate(arr, k, n - 1);

  console.log(arr);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++, end--;
  }
}
