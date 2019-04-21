// three sum

function threeNumberSum(array, targetSum) {
  // Write your code here.
  array = array.sort();
  let result = [];
  for (let i = 0; i < array.length - 2; i++) {
    let start = i + 1;
    let end = array.length - 1;
    while (start < end) {
      if (targetSum === array[i] + array[start] + array[end]) {
        result.push([array[i], array[start], array[end]]);
      } else if (array[i] + array[start] + array[end] > targetSum) {
        end--;
      } else {
        start++;
      }
    }
  }
  return result;
}

console.log(threeNumberSum([1, 2, 3, 4], 9));
