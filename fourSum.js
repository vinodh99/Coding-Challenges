function fourNumberSum(array, targetSum) {
  let quadrapults = [];
  let allPairs = {};
  for (let i = 1; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currentSum = array[i] + array[j];
      let difference = targetSum - currentSum;
      if (difference in allPairs) {
        for (let pair of allPairs[difference])
          quadrapults.push(pair.concat([array[i], array[j]]));
      }
    }
    for (let k = 0; k < i; k++) {
      let currentSum = array[i] + array[k];
      if (!(currentSum in allPairs)) {
        allPairs[currentSum] = [[array[i], array[k]]];
      } else {
        allPairs[currentSum].push([array[i], array[k]]);
      }
    }
  }
  return quadrapults;
}

// Do not edit the line below.
exports.fourNumberSum = fourNumberSum;
