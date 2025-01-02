// https://leetcode.com/problems/rotate-image/description/

var rotate = function (matrix) {
  const n = matrix.length,
    m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < m; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let ele of matrix) {
    ele.reverse();
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
