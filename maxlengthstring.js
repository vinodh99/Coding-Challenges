const testArr1 = [9, 7, 3, 5, 9, 2, 1, -5, 0];
const testArr2 = [312, 313, 14, 11, 13, 121, 118];
const testArr3 = [5, 4, 3];
const testArr4 = [1, 2, 3];

console.log(longestDecreasingStreak(testArr1))


function longestDecreasingStreak(arr) {

  let maxcount=0;
  let count = 0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]<arr[i+1]){
      count++
      maxcount = Math.max(maxcount,count);
      console.log(maxcount);
    }
  }
      return maxcount;

}