var check = function (arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i] >= arr[i - 1]) {
    } else return false;
  }

  return true;
};

console.log(check([1, 1, 23, 4]));
