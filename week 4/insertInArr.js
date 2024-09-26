let arr = [10, 20, 30, 40, 50],
  answer = [],
  position = 3,
  value = 25;

// const answer = arr.splice(3, 0, 25);

let i = 0,
  j = 0;

while (i < arr.length + 1) {
  if (i === position - 1) {
    answer[i] = value;
  } else {
    answer[i] = arr[j];
    j++;
  }
  i++;
}

console.log(answer);
