const { resolve } = require("path");

function getEvenNumber(Value,delay)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(value % 2==0){
                resolve(Value);
            }else{
                reject(new Error("Value is not evon Number"));
            }
        },delay);
    });
}

//Promise chain:

getEvenNumber(4,1000)
    .then(result =>{
        console.log("Step 1: getting the resut:",result);
        return getEvenNumber(3,2000);
    })
    .then(result=>{
        console.log("Step 2: getting the resut:",result);

    })
    .catch(error=>{
        console.error("Promise chain error:",error);
    })