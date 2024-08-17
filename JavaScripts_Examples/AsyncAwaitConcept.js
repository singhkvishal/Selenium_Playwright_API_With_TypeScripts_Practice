// async function without await

const { error } = require("console");

async function f1(){
    console.log("This is async function without await step");
    return 42;
}

f1().then(result=>{
    console.log(result);
})

// async function without await with error:

async function f2() {
    console.log("this is an async function with error");
    throw new Error("This is my error");//Return a promise(Rejeceted)
}

f2().catch(error=>{
    console.log('The error message ${error}');
})


//async function with a resolved / rejected promise:

function getInfo(){
    return new Promise((resolve,reject)=>{
        const randomNumber=Math.random();
        setTimeout(()=>{
            if(randomNumber<0.5){
                resolve(randomNumber);
            }else{
                reject(new Error("Wrong value error"));
            }
        },2000);
    })
}

//Create async function which is calling getinfo()
async function getEvenNumber(){
    try{
        const result=await getInfo();//async Step
        console.log("Result:",result);
    }catch(error){
        console.log("Error:",error);
    }
}