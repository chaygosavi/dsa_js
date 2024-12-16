var maxProfit = function (arr) {
  const n = arr.length;
  let bestBuy = arr[0],
    maxProfit = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > bestBuy) {
      maxProfit = Math.max(maxProfit, arr[i] - bestBuy);
    }
    bestBuy = Math.min(bestBuy, arr[i]);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
