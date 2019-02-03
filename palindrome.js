/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr=x.split("");
    if (arr===arr.reverse()){
    	return true;
    }
    else{ false}
};

console.log(isPalindrome("1221"))