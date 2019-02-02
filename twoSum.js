/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++)
        if(nums[i]+nums[j]===target){
            return [i, j]
        }
    }
    return null
};
console.log(twoSum([1,2,3,4,5,6,7,8,9,10], 17))

// bet solution
var twoSum = function(nums, target) {
  var hashTable = {}, result = [];
      
  for(var i=0; i<nums.length; i++){
    findthisnum = target-nums[i];
		
	if(typeof hashTable[findthisnum]!="undefined"){
       result.push(hashTable[findthisnum],i);
       return result;
    }else{
      hashTable[nums[i]] = i;
    }   
  }
  return result;
};