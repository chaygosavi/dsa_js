var check = function (arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    console.log(arr[i], arr[i - 1]);
    if (arr[i] >= arr[i - 1]) {
    } else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
};

check([1, 2, 1, 3, 4]);
