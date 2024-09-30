const arr = [1, 4, 3, 3, 3, 2, 11, 0];

const hash = {};

for (let num of arr) {
  if (hash[num]) hash[num]++;
  else hash[num] = 1;
}

console.log(hash);
