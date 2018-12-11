// calculate median for every element in an array
let arr = [2,8,5,9,10,15,4,6];
let arr2 = [];
let arr3= [];
for (let i=0; i<arr.length; i++){
	arr2.push(arr[i]);
	temp = [];
		for(let j=0; j<arr2.length; j++){
			if(arr2.length>1 && arr2[j] > arr2[j+1]){
				temp=arr2[j];
				arr2[j]=arr2[j+1];
				arr2[j+1]=temp;
			}
			// else{
			// 	arr3.push(arr2[j]);
			// }
		}
		console.log(arr3)
			let median =0;
			if((arr2.length>1) && (arr2.length-1)%2==0){
				median = arr2[(arr2.length-1)/2]
				arr3.push(median);
			}
			else if(arr2.length>1){
				median = arr2[(arr2.length)/2]-arr2[((arr2.length-1)-1)/2];
				median = median/2;
				arr3.push(median)
			}

}

// console.log(arr3);