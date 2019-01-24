// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

function add(a, b) {
  	let arr1=a.split("").reverse().join("").split("").map(Number);
  	let arr2=b.split("").reverse().join("").split("").map(Number);
if(arr1.length<arr2.length){
	let temp=arr1;
	arr1=arr2;
	arr2=temp;
}
let x=0
let num=0;
let sum=arr1.map((val,ind)=>{
	if(isNaN(arr2[ind])){
		arr2[ind]=0;
	}
	if(ind===arr1.length-1){
		num=val+arr2[ind]+x;
		return num
	}
	num=val+arr2[ind]+x;
	if(num.toString().length>1){
		x=Math.floor(num/10 % 10);
		num=Math.floor(num%10);
	}
	else{
		x=0;
	}
	return num;
})
sum=sum.reverse().map(String).join("");
  return sum; // Fix me!
}

console.log(add("122","3445"));

