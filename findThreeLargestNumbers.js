function findThreeLargestNumbers(array) {
  // space complexity=o(1), TC=o(n)
  const largest = [null, null, null];
  for (let value of array) {
    update(largest, value);
  }
  return largest;
}

function update(largest, value) {
  if (largest[2] === null || value > largest[2]) {
    shift(largest, value, 2);
  } else if (largest[1] === null || value > largest[1]) {
    shift(largest, value, 1);
  } else if (largest[0] === null || value > largest[0]) {
    shift(largest, value, 0);
  }
}

function shift(array, value, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = value;
    } else {
      array[i] = array[i + 1];
    }
  }
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;
