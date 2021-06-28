const fs = require("fs");
console.log("Start");
// Normal call Back Async Strategy
// fs.readFile("f1.txt", function(err,data){
//     if(err == null){
//         console.log(data.toString());
//     }
//     else{
//         console.log(err);
//     }
// });


// Async using Promises
let promise = fs.promises.readFile("f1.txt");
console.log(promise);

promise.then(function(data){
    console.log(data.toString());
    console.log(promise);
});

promise.catch(function(err){
    console.log(err);
});
console.log(promise);
console.log("End");