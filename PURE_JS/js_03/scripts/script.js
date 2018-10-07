// JS_3 *******************


/*
var flag = 1;
alert(flag);
if (flag){
    alert("Hello!")
}
if (!flag){
    alert("Bye!")
}
*/

//maximum of two numbers var1
/*const num1 = +prompt('1-ST number');
const num2 = +prompt('2-ND number');
let max = num2;
if (num1 > num2){
    max = num1;
}
alert(max);*/

/*//maximum of two numbers var2, better
const num1 = +prompt('1-ST number');
const num2 = +prompt('2-ND number');
let max = 0;
if (num1 > num2){
    max = num1;
}else {
    max = num2;
}
alert(max);*/

//maximum of three numbers var1
/*const num1 = +prompt('1-ST number');
const num2 = +prompt('2-ND number');
const num3 = +prompt('3-RD number');
let max = 0;
if (num1 > num2 && num1 > num3){
    max = num1;
}   else {
    if(num2 > num3){
        max  = num2;
    }else {
        max = num3;
    }
}
alert(max);*/

//maximum of three numbers var2
/*const num1 = +prompt('1-ST number');
const num2 = +prompt('2-ND number');
const num3 = +prompt('3-RD number');
let max = 0;
if (num1 > num2 && num1 > num3){
    max = num1;
} else if (num2 > num3) {
    max  = num2;
} else {
        max = num3;
}
alert(max);*/

//maximum of three numbers var3, better
/*const num1 = +prompt('1-ST number');
const num2 = +prompt('2-ND number');
const num3 = +prompt('3-RD number');
let max = num3;
if (num1 > num2 && num1 > num3){
    max = num1;
} else if (num2 > num3) {
    max  = num2;
}
alert(max);*/




/* 10 > 2 ? alert('text1') : alert('text2');
 const name = prompt("What is you name?");
 */


//construct if () {else}
/*const name = prompt('What is your name', 'Your name');
if (name){
    alert(name + ', Hello!');
}   else {
    alert('Hello, Anonymous');
}*/

//ternary operator
/*const name = prompt('What is your name', 'Ivan');
name ? alert('Hello, ' + name + '!') : alert('Hello, Anonymous');*/


//ternary operator 3, no good
/*const number = prompt('What is your number', 12);
number > 10 ? alert(number + ' More than 10') : number > 0 ? alert(number + ' More than 0') : alert(number + ' zero or less');*/

//ternary operator 4, good
/*const a = 10, b = 20;
alert(a > b ? a : b);*/

//construct switch
/*
const day = 'Sat';
switch (day) {
    case 'Sat':
        alert('Lesson');
        break;
    case 'Sun':
        alert('Rest');
        break;
    default : alert('Work');
        break;
}*/


//construct switch 2
/*const month = 'Jan';
switch (month) {
    case 'Dec':
    case 'Jan':
    case 'Feb':
    alert('Winter');
    break;
}*/

//while loop
/*
while (condition){
    code
}*/

//example while1

/*
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}*/

//example while2

/*
let counter = 0;
while (counter <= 5) {
    console.log(counter);
    counter += 2;
}*/


//do while loop

/*construct
do{
    code
    i--;
}while (i > 3);*/

/*let counter = 0;
do{
    counter++;
    console.log(counter);
}while (counter < 5);*/

//for loop


//example

/*for (let i = 1; i < 3; i++) {
    console.log(`Пробежал ${i} круг(ов)`);
}*/


//example2

/*
for (let i = 1; i < 10; i+= 2) {
    console.log(`Пробежал ${i} круг(ов)`);
}*/


//example3

/*
const name = prompt('Name ?');
for (let i = 0; i < name.length; i+=2) {
    console.log(name[i]); // [i]обращение к символу (начиная с 0) с указанием индекса
}*/


//example3

/*
const name = prompt('Name ?');
for (let i = 0; i < name.length; i+=1) {
    console.log(name.charAt(i)); // charAt обращение к символу (начиная с 0) с указанием индекса в отличии от [] если будет отсуствовать символ вернёт пустую строку, [] - undefined. Лучше исп. charAt
}
*/

//example4

/*const name = prompt('Name ?');
for (let i = name.length; i >= 0; i--) {
    console.log(name.charAt(i));
}*/

//example 5

/*const name = prompt('Name ?');
let reversedName = "  ";
for (let i = name.length - 1; i >= 0; i--) {
    reversedName += name[i];
}
alert(reversedName);*/

/*const name = prompt('Name ?');
let reversedName = "  ";
for (let i = name.length; i >= 0; i--) {
    reversedName += name.charAt(i);
}
alert(reversedName);*/

/*
for (let i = 0, j = 0; i < 2 && j < 5; i++, j+=2) {
    console.log(`i is ${i}, j is ${j}`);
}*/


//loop breaking


/*

//разобрать, не понял!

const month = 31;
let day = 1;
for(; day <= month; day++) {
    if (day % 7 == 0 || day % 7 == 6) {
        if (day % 27 == 0) {console.log ('4-th Saturday')}
    }else {
     continue;
    }
    console.log(day + " is weekend");
}*/


//loop breaking2

/*
for (let i = 0; i < 10; i++) {
    if (i === 4) {
        //break
        continue;
    }
    console.log(i);
}*/

//loop labels

outer: for (let i = 0; i < 5; i++){
    inner: for (let j = 0; j < 3; j++){
        if (i > 2 && j > 1){
            break outer;
        }
        console.log(`i is ${i}, j is ${j}`);
    }
}
