let arr=[{"firstName": "ram","lastName": "subbu"},{"firstName": "car","lastName": "dabbu"},{"firstName": "dam","lastName": "lubbu"}];
result=[];
 let exp ='r';
let r= exp.toString();
        console.log(r)
 for (let val in arr) {
     if (arr[val].firstName.match(exp)) {
                result.push(arr[val])
            }
        }
        console.log(result)