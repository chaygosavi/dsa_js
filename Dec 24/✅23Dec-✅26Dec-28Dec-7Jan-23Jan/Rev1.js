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
// };

// var setZeroes = function (matrix) {
//   const n = matrix.length,
//     m = matrix[0].length;
//   const row = [],
//     col = [];

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (matrix[i][j] === 0) {
//         row[i] = 1;
//         col[j] = 1;
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//       if (row[i] || col[j]) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
// };

// console.log(
//   setZeroes([
//     [1, 1, 1],
//     [1, 0, 1],
//     [1, 1, 1],
//   ])
// );

var rotate = function (matrix) {
  const n = matrix.length,
    m = matrix[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < m; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
