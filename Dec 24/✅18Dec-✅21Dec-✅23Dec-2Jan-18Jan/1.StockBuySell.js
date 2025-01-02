// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

var maxProfit = function (arr) {
  const n = arr.length;
  let max_profit = 0,
    mini = arr[0];

  for (let i = 1; i < n; i++) {
    let cost = arr[i] - mini;
    max_profit = Math.max(max_profit, cost);
    mini = Math.min(mini, arr[i]);
  }

  return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
