var runningSum = function (arr) {
  let n = arr.length,
    i = 0,
    sum = 0,
    ans = [];

  while (i < n) {
    sum += arr[i];
    ans.push(sum);

    i++;
  }

  console.log(ans);
};

runningSum([1, 2, 3, 4]);
