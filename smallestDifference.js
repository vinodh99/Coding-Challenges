function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let value = arrayOne[i] - arrayTwo[j];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (Math.abs(arrayOne[i] - arrayTwo[j]) < value) {
        value = Math.abs(arrayOne[i] - arrayTwo[j]);
        let arr = [];
        arr.push(arrayOne[i]);
        arr.push(arrayTwo[j]);
      }
    }
  }
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
