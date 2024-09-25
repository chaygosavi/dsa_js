let n = 5;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
//   console.log("");
// }

// let space = n - 1,
//   star = 1;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (j = 1; j <= space; j++) {
//     row += " ";
//   }
//   for (j = 1; j <= star; j++) {
//     row += "* ";
//   }
//   space--;
//   star++;
//   console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }

//   for (let j = 1; j <= n; j++) {
//     row += "*";
//   }

//   console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = i; j >= 1; j--) {
//     row += j + " ";
//   }

//   console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//   let row = "";

//   for (let j = 1; j <= n; j + 2) {
//     row += "* ";
//   }

//   console.log(row);
// }

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

// for (let i = n - 1; i > 0; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += j;
//   }
//   console.log(row);
// }

//////////////////////////////////////////////////////////////////////

// 1       1
//  2     2
//   3   3
//    4 4
//     5
//    4 4
//   3   3
//  2     2
// 1       1

// let leftSpace = 0,
//   middleSpace = 1 + (n - 2) * 2;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= leftSpace; j++) {
//     row += " ";
//   }
//   row += i;

//   for (let j = 1; j <= middleSpace; j++) {
//     row += " ";
//   }

//   if (i !== n) {
//     row += i;
//   }
//   console.log(row);
//   leftSpace++;
//   middleSpace -= 2;
// }

// leftSpace = n - 2;
// middleSpace = 1;

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";

//   for (let j = 1; j <= leftSpace; j++) {
//     row += " ";
//   }
//   row += i;
//   for (let j = 1; j <= middleSpace; j++) {
//     row += " ";
//   }
//   row += i;

//   console.log(row);
//   leftSpace--;
//   middleSpace += 2;
// }

////////////////////////////////////////////////////////

//     *****
//    *   *
//   *   *
//  *   *
// *****

// let leftSpace = n - 1;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= leftSpace; j++) {
//     row += " ";
//   }

//   for (let j = 1; j <= n; j++) {
//     if (i === n || i === 1) {
//       row += "*";
//     } else if (j === 1 || j === n) {
//       row += "*";
//     } else {
//       row += " ";
//     }
//   }

//   leftSpace--;
//   console.log(row);
// }

let stars = n,
  space = 0;

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= stars; j++) {
    row += "*";
  }
  for (let j = 1; j <= space; j++) {
    row += " ";
  }
  for (let j = 1; j <= stars; j++) {
    row += "*";
  }

  space += 2;
  stars--;
  console.log(row);
}

stars = 1;
space = space - 2;
for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= stars; j++) {
    row += "*";
  }
  for (let j = 1; j <= space; j++) {
    row += " ";
  }
  for (let j = 1; j <= stars; j++) {
    row += "*";
  }

  stars++;
  space -= 2;
  console.log(row);
}
