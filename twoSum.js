/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++)
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
  }
  return null;
};

// console.log(twoSum([1,2,3,4,5,6,7,8,9,10], 17))

// best solution

// check if the difference between target sum and the number is present in the hashtable
// Now the table must be checked if the number is mapped
var twoSum2 = function(nums, target) {
  var hashTable = {},
    result = [];

  for (var i = 0; i < nums.length; i++) {
    findthisnum = target - nums[i];

    if (typeof hashTable[findthisnum] != "undefined") {
      result.push(hashTable[findthisnum], i);
      console.log(hashTable);
      return result;
    } else {
      hashTable[nums[i]] = i;
    }
  }
  return result;
};

console.log(twoSum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 17));

// algo expert

function twoNumberSum(array, targetSum) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[targetSum - array[i]] !== undefined) {
      let x = array[i],
        y = targetSum - array[i];
      return [x <= y ? x : y, x >= y ? x : y];
    } else {
      map[array[i]] = 1;
    }
  }
  return [];
}
// algo expert solution
function twoNumberSum(array, targetSum) {
  let map = {};
  for (let i = 0; i < array.length; i++) {
    if (map[targetSum - array[i]] !== undefined) {
      let x = array[i],
        y = targetSum - array[i];
      return [x <= y ? x : y, x >= y ? x : y];
    } else {
      map[array[i]] = 1;
    }
  }
  return [];
}
