// You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:

function nextBigger(n){
  let num =n.toString().split("")
  let arr=num.map(Number).sort()
  console.log(arr)
  console.log(arr)
  // added
  for(let i=num.length-1;i>=0;i--){
      if(num[i]>num[i-1]){
        let temp= num[i]
        num[i]=num[i-1];
        num[i-1]=temp;
          if(num.join("")>n){
            return Number(num.join(""));
          }
      }          
      }
  return -1;
  }

  nextBigger(91674)