// Write a function: simplify, that takes a string in input, representing a
 // multilinear non-constant polynomial in integers coefficients
 // (like "3x-zx+2xy-x"), and returns another string as output where the same expression has been simplified in the following way ( -> means application of simplify):

function simplify(exp){

}
let str ="-a+5ab+3a-c-2a"
let arr=str.split("");
let x = arr.map((val)=>{
	if(Number.isInteger(Number(val)))
	return Number(val)
else{
	return val
}
})
// console.log(x)
for(let i=0;i<x.length;i++){
	// if(!isNaN())
	// console.log()
	if(x[i]==="-" || x[i]==="+" && x[i+1]===parseInt(x[i+1])){
		console.log(x[i+1])
	}
}






simplify("-a+5ab+3a-c-2a")//outpu:"-c+5ab"