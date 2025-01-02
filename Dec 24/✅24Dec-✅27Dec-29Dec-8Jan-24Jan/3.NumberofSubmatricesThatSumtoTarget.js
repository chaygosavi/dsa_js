var numSubmatrixSumTarget = function (matrix, k) {
  const rows = matrix.length,
    cols = matrix[0].length;

  // First take row wise cumulative sum

  for (let row = 0; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      matrix[row][col] += matrix[row][col - 1];
    }
  }

  for (let row of matrix) {
    console.log(row);
  }

  let result = 0;

  for (let startCol = 0; startCol < cols; startCol++) {
    for (let j = startCol; j < cols; j++) {
      const map = new Map();

      map.set(0, 1);
      let sum = 0;

      for (let row = 0; row < rows; row++) {
        sum += matrix[row][j] - (startCol > 0 ? matrix[row][startCol - 1] : 0);
        if (map.has(sum - k)) {
          result += map.get(sum - k);
        }

        map.set(sum, (map.get(sum) || 0) + 1);
      }
    }
  }

  return result;
};

console.log(
  numSubmatrixSumTarget(
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    0
  )
);
