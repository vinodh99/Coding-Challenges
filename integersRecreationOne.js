function listSquared(m, n) {
    let obj={};
    let arr=[];
    let arr2=[];
    for(let i=1;i<=n;i++){
    	obj[i]=i*i;
    }

    for(let j=m;j<=n;j++){
    	let sum=0;
    	for(let k=1;k<=j;k++){
    		if(j%k===0){
    			sum+=obj[k];
    		}

    	}
    	if(Math.sqrt(sum)%1===0){
	    		arr.push(sum);
          arr2.push(j)
    	} 

    }
    let c=arr.map(function(e,i){
    	return [arr2[i],e]
    })
return c;
}
listSquared(1,250);