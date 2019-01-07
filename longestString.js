// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// // n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

longestString=(strarr,k)=>{
	if(strarr.length===0 || k>strarr.length ||k<=0 ) return "";
	arr=[];
	longest='';

	for(let i=o;i<=strarr.length-k;i++){
		arr.push(strarr.slice(i,i+k).join(''));
	}

	return arr.reduce((longest,item)=> {
		return (longest.length>item.length)?longest:item;
	},'')
}

longestString(['asdda','dsdss','dsdsdsds'],5)