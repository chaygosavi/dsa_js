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

for (let i = 1; i <= n; i++) {
  let row = "";

  for (let j = 1; j <= n; j + 2) {
    row += "* ";
  }

  console.log(row);
}
