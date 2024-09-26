var twoSum = function (arr, target) {
  let result = [-1, -1],
    i = 0,
    j = arr.length - 1;

  while (i <= j) {
    let currSum = Math.floor(arr[i] + arr[j]);
    console.log("currSum", currSum);

    if (currSum === target) {
      return [i, j];
    } else if (currSum > target) {
      j--;
    } else {
      i++;
    }
  }
  console.log(result);
  return result;
};

twoSum([3, 2, 4], 6);
