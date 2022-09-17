function rolldiceSumProb(sum, dice) {
  let prob;
  const totalArr = [];

  for (let i = 0; i < 6; i += 1) {
    const item = [];
    item.push(i + 1);
    totalArr.push(item);
  }

  if (dice === 0) {
    return 0;
  } else {
    for (let y = 1; y < dice; y += 1) {
      const arrLength = totalArr.length;
      for (let i = 0; i <= arrLength - 1; i += 1) {
        for (let j = 0; j <= 5; j += 1) {
          const arr = [...totalArr[0]];
          arr.push(j + 1);
          totalArr.push(arr);
        }
        totalArr.shift();
      }
    }
  }

  let numberCounter = 0;
  for (let i = 0; i <= totalArr.length - 1; i += 1) {
    const itemArr = [...totalArr[i]];
    let itemSum = 0;
    for (let j = 0; j <= itemArr.length - 1; j += 1) {
      itemSum += itemArr[j];
    }

    if (itemSum === sum) {
      numberCounter += 1;
    }
  }
  console.log(numberCounter);
  console.log(totalArr.length);
  prob = numberCounter / totalArr.length;

  return prob;
}

console.log(rolldiceSumProb(32, 7));
