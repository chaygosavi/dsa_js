function firstNNumSum(n, k) {
  const answer = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (i + j === n) {
        if (answer.length === k) break;
        answer.push([i, j]);
      }
    }
  }

  for (let i of answer) {
    console.log(i);
  }
}

firstNNumSum(6, 5);
