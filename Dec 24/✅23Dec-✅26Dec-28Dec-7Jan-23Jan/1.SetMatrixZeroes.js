// https://leetcode.com/problems/set-matrix-zeroes/submissions/1486476502/

// var setZeroes = function (matrix) {
//   const n = matrix.length,
//     m = matrix[0].length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] === 0) {
//         markRow(i);
//         markCol(j);
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] === false) {
//         matrix[i][j] = 0;
//       }
//     }
//   }

//   function markRow(i) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] !== 0) {
//         matrix[i][j] = false;
//       }
//     }
//   }

//   function markCol(j) {
//     for (let i = 0; i < n; i++) {
//       if (matrix[i][j] !== 0) {
//         matrix[i][j] = false;
//       }
//     }
//   }

//   console.log(matrix);
// };

var setZeroes = function (matrix) {
  const col = [],
    row = [],
    n = matrix.length,
    m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  console.log(row, col);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
