// Callback with Async Function:
function printInfo(name,callback){
 setTimeout(function(){
    //async function /task/step:
    console.log("Print info for "+name);
    callback("Please call me back");
 },5000);//Delay of 5000ms/5 sec
}

function displayMessage(msg){
    console.log(msg)
}

printInfo("Lisa",displayMessage);
