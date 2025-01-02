var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];

  for (let interval of intervals) {
    if (ans.length === 0) ans.push(interval);
    else {
      const prevInterval = ans[ans.length - 1];
      console.log(prevInterval);

      if (prevInterval[1] >= interval[0]) {
        prevInterval[1] = Math.max(prevInterval[1], interval[1]);
      } else {
        ans.push(interval);
      }
    }
  }

  return ans;
  // for (let num of intervals) {
  //console.log(String([num]));
  //}
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
    [1, 1],
  ])
);
