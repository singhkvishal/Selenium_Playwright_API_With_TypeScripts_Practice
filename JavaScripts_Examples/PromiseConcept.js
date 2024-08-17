const { Console, error } = require("console");

const randomNumberPromise=new Promise((resolve,rejecte) => {

 setTimeout(() => {
  const randomnumber=Math.random();
  if(randomnumber>0.5){
    resolve(randomnumber);
  }else{
    rejecte(new Error("Value is too small"));
  }
 },2000);
});


randomNumberPromise
        .then(result =>{
            console.log("Promise is fullfilled with value :",result);
        })
        .catch(error=>{
            console.log("Promise is rejected with error :",error)
        })