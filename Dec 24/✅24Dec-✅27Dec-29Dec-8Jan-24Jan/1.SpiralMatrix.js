// https://leetcode.com/problems/spiral-matrix/description/

var spiralOrder = function (matrix) {
  const n = matrix.length,
    m = matrix[0].length;
  const result = [];

  let left = 0,
    right = m - 1,
    top = 0,
    bottom = n - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
    }

    bottom--;

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
    }

    left++;
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
