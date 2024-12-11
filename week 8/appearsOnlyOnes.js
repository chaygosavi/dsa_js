const onlyOne = (arr) => {
  const hash = {};

  for (let num of arr) {
    hash[num] = (hash[num] || 0) + 1;
  }

  for (let [num, count] of Object.entries(hash)) {
    if (count === 1) {
      return num;
    }
  }

  return -1;
};

onlyOne([0, 0, 1, 1, 2, 3, 3, 4, 4]);
