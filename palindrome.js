/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr=x.split("");
    let arr2=arr.slice().reverse()
    for(let i=0;i<arr.lengath;i++){
    	console.log(arr[i],arr2[i])
    	if(arr[i]!==arr2[i]){
    	 	return false
    	}
    }
    return true
};

console.log(isPalindrome("-1221"))