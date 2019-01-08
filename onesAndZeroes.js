const binaryArrayToNumber = arr => {
let acc=0;
let length=arr.length-1
  return arr.reduce((acc, val)=>{
  console.log("val"+val)
  console.log(acc)
  if(val===0){
  	  length-=1;
  return acc
  }else{
  	acc+=2**length;
  	console.log("this"+length)  	
  	console.log("this"+acc)
    length-=1;
  return acc;
  }
  },0)
};

// console.log(arr.reduce(acc,val))

console.log(binaryArrayToNumber([0,1,1,0,1]));