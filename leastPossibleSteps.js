//least possible steps for reducing a number to 1 by dividing the number by 2 and 3 or subtracting by 1

function getLeastSteps(num){
	let table = [0,0];
for(let i=2; i<=num; i++){
	let result = table[i-1];
	if(i%2===0){
		result= Math.min(result, table[i/2]);
	}
	if(i%3===0){
		result= Math.min(result,table[i/3])
	}
	table.push(result+1);
	}
	return table[num];
}

console.log(getLeastSteps(100));