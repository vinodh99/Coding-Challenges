function binarySearch(array, target) {
  let L = 0;
  let R = array.length - 1;
  while (R >= L) {
    let mid = Math.floor((L + R) / 2);
    if (array[mid] < target) {
      L = mid + 1;
    } else if (target < array[mid]) {
      R = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));
