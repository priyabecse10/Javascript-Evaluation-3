// callbacks in a classic function
console.log("Start");
function callback(){
    let num1=10,num2=10;
    let sum=num1+num2;
    console.log("The sum is = "+sum);
}
setTimeout(callback,2000);
console.log("End");

// callbacks in an arrow function
console.log("Start");
setTimeout(()=>{
    let num1=20,num2=30;
    let sum=num1+num2;
    console.log(`The sum of ${num1} + ${num2} is = ${sum}`);
}, 2000);
console.log("end");