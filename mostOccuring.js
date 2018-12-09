//finding the most occurring number within an array

let arr = [1,2,2,3,4,4,5,5,6,6,7];
let obj = {}
for(let value of arr){

	if(value in obj)
		obj[value]+=1;
	else{
		obj[value]= 1;
	}
}
	let i =0;
	let j=0;
for(let key in obj){
	if(obj[key]>i){
		i=obj[key]
		j=key
	}
	}
console.log(j)