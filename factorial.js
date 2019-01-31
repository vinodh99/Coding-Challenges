function factorial(n){
  // Add some code
  let fact=n;
  if(n===1 || n===0){
    console.log('fact',fact)
    return fact.toString()
  }
  else{
    fact=fact*(n-1)
    n-=1
    console.log(n)
    factorial(n);
  }
}

console.log(factorial(10))