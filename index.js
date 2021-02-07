
//pls help me
//to do: finish this

//string
// const what = "Nicolas";
// const emoji = "🎨🎨🎨🎨🎨🎨🎨🎨🎨🥾🥾🥾🥾☺☺☺💢💥💥💢💢💥💥💥💥💥💥💢💢💢💢";
// document.write(emoji);
// console.log(emoji);
// console.log(what);

// let a = 221;
// let b = a - 5;
// $ = 4

// document.write(b, a);
// console.log(b);

//Boolean
// const what = true;

//Number
// const wat = 666;

//Float
// const wat = 55.1;
// console.log(wat);

// const monday = "Mon";
// const tue = "Tue";
// const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri", "Sat", "Sun", true];
// console.log(daysOfWeek[2]);

// console.log(console);
// console.log(document);

// function sayHello(nameOfFriend, age){
//     document.write(`Hello ${nameOfFriend}, You have ${age} years old.`);
//     return `Hello ${nameOfFriend}, You have ${age} years old.`;
// }
// const greetJini = sayHello("Jini", 32);
// console.log(greetJini);

const calculator = {
    plus: function(a, b){
        return a+b;    
    },
    minus: function(a, b){
        return a-b;
    },
    multifly: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    },
    square: function(a,b){
        return a**b;
    }

};
let firstNumber = 5;
let secondNumber = 4;
const plus = calculator.plus(firstNumber, secondNumber);
const minus = calculator.minus(firstNumber, secondNumber);
const multifly = calculator.multifly(firstNumber, secondNumber);
const divide = calculator.divide(firstNumber,secondNumber);
const square = calculator.square(firstNumber,secondNumber);

// document.write(`plus: ${plus}, minus: ${minus}, multifly: ${multifly}, divide: ${divide}, square: ${square}`);
// console.dir(title);
// title.innerHTML="Hi! From JS";
// title.style.color = 'red'

// document.title = 'I own you now';

const title = document.getElementById("title");

const BASE_COLOR = "#34495e";
const OTHER_COLOR = "#7f8c8d";

function handleClick(event)
{   
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);


}
init();

