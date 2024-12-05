var threeSum = function (arr) {
  arr.sort((a, b) => a - b);
  let ans = [],
    n = arr.length,
    i = 0;

  while (i < n) {
    let j = i + 1,
      k = n - 1,
      target = -arr[i];

    while (j < k) {
      let sum = arr[j] + arr[k];
      if (sum === target) {
        const res = [arr[i], arr[j], arr[k]];
        ans.push(res);
        while (j < n && arr[j] === res[1]) {
          j++;
        }

        while (k >= 0 && arr[k] === res[2]) {
          k--;
        }
      } else if (sum > target) {
        k--;
      } else j++;
    }

    while (i + 1 < n && arr[i] === arr[i + 1]) {
      i++;
    }

    i++;
  }

  console.log(ans);
};

threeSum([-1, 0, 1, 2, -1, -4]);
