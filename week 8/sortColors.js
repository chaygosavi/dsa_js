var sortColors = function (arr) {
  let n = arr.length,
    zeros = 0,
    ones = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      zeros++;
    } else if (arr[i] === 1) {
      ones++;
    }
  }

  const twos = n - (zeros + ones);
  let i = 0;

  while (i < zeros) {
    arr[i] = 0;
    i++;
  }

  while (i < zeros + ones) {
    arr[i] = 1;
    i++;
  }

  while (i < n) {
    arr[i] = 2;
    i++;
  }

  console.log(arr);
};

sortColors([2, 0, 2, 1, 1, 0]);
