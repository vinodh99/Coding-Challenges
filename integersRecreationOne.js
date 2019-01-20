// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.
// function listSquared(m, n) {
//     // your code
//     for(let i=m;i<n;i++){
//     }
// }



// Test.describe("Basic tests",function() {
// Test.assertSimilar(listSquared(1, 250), [[1, 1], [42, 2500], [246, 84100]])
// Test.assertSimilar(listSquared(42, 250), [[42, 2500], [246, 84100]])
// Test.assertSimilar(listSquared(250, 500), [[287, 84100]])

// })

function listSquared(m, n) {
    // your code
    let obj={};
    let arr=[];
    let arr2=[];
    // console.log(sum);
    for(let i=1;i<=n;i++){
    	obj[i]=i*i;
    }
    // console.log(obj)

    for(let j=m;j<=n;j++){
    	// console.log(j)
    	let sum=0;
    	for(let k=1;k<=j;k++){
    		// console.log(k)
    		if(j%k===0){
    			// console.log('im k'+obj[k])
    			sum+=obj[k];
    				    		arr2.push(k);
    			// console.log(sum)
    		}

    	}
    	// console.log(sum)
    	if(Math.sqrt(sum)%1===0){
	    		arr.push(sum);
    	} 

    }
    let c=arr.map(function(e,i){
    	return [arr2[i],e]
    })
    console.log(c)
return c;
}
listSquared(1,250);