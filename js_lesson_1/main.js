



let yourName = prompt ("What`s your name?");
alert(`Hello,  ${yourName}`);


const birthday = prompt ("Enter your year of birth");
let yourYears = 2020 - birthday;
alert(`you are  ${yourYears} years old`);


let sideSquare = prompt ("Enter side length of a square");
let squarePerimetr = 4 * sideSquare;
alert(`Perimeter of your square is ${squarePerimetr} `);


let radius = prompt ("Enter radius of a circle");
const PI = 3.14;
let diameter = radius * radius;
let circleArea = diameter * PI;
alert(`The area of ​​the circle is ${circleArea} `);


let distance = prompt ("Enter distance");
let time = prompt ("Enter time in hours");
let speed = distance / time;
alert(`You need to move at a speed of ${speed} km per hour `);


let dollar = prompt ("Enter the amount of dollars");
const euro = dollar * 0.84;
alert(euro);

let amount = prompt ("enter the amount of memory");
let mbConvert = amount * 1000;
let filesNumber = mbConvert / 850;
alert(filesNumber);


let amountMoney = prompt ("enter the amount of money");
let price = prompt ("enter the price of chocolate");
let chocolatesNumber =  Math.floor(amountMoney / price);
let remainder = amountMoney % price;
alert(`You can buy ${chocolatesNumber} chocolates`);
alert(`The rest of your money: ${remainder}`);


let deposit = prompt ("Enter the amount");
let yearPrecent = deposit / 100 * 5;
let monthPrecent = yearPrecent / 12;
let yourPrecent = Math.round(monthPrecent * 2);
alert(`Your percentage of the deposit is: ${yourPrecent}`);

let name,
    admin;

name = "Джон";
admin = name;

alert(admin);


let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

let sum = a + b;

alert(sum); 
