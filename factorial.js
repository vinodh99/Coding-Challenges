// function factorial(n){

//   let fact=1
// if(n===1){
//   return 1;
// }  
//   return factorial(n-1)*n
// }


// console.log(factorial(9))

function factorial(n){
  n=parseInt(n)
  if(n===1){
  let num=1
    return num.toString();
  }
    let arr1=num.toString().split("").reverse().join("").split("").map(Number);
    let x=0;
    let num=0;
    let sum=arr1.map((val,ind)=>{
    if(isNaN(arr2[ind])){
      arr2[ind]=0;
    }
    if(ind===arr1.length-1){
      num=val+arr2[ind]+x;
      return num;
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
  let num=factorial(n-1)*n;
  return num.toString()
}


