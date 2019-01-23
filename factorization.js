
let arr=[];
let factors=[]
isPrime=(num)=>{
  if(num<=3){
    return true
  }
  else if(num%2===0 || num%3===0){
    return false;
  }
  else{
    return true;
  }
}
factorization=(num)=>{
  for(let i=2;i<=num/2;i++){
      if(isPrime(i)){
        arr.push(i)
      }
    }
  for(let j=0; j<arr.length;j++){
    while(num%arr[j]===0){
         num/=arr[j];
         factors.push(arr[j]);
    }
    }
console.log(factors)
}

factorization(24);
