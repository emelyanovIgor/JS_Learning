/* 1. результат в консоли 21. Используя только инкременты и/или декременты (постфиксный или префиксный) исправьте так, чтобы в консоли было 20
"use strict";

var a = 10;
var a = a++ + --a;
console.log(a); */

//-----------------------------

/* 2. Исправьте код в этом примере, чтобы всё работало и выглядело по правилам и рекомендациям оформления кода 
"use strict";

let students = 7; // хранит количество студентов
let courseName = "JavaScript"; // хранит название курса
const MAX_STUDENTS_AMOUNT = 10; // константа, максимальное количество студентов */

//-------------------------------

/* 3. Создать две переменные, значения каждой из них получить с помощью prompt(). 
Первую переменную округлить к меньшему значению, вторую - к большему. 
Затем поделить первую на вторую и результат округлить к ближайшему целому. 
Вспоминаем, какие функции объекта Math для этого нужны */

var firstVariable = Math.floor(+prompt("Enter the first variable: ", 100.5));
var secondVariable = Math.ceil(+prompt("Enter the second variable: ", 20.3));
var resultDivision = Math.round(firstVariable / secondVariable);


//var firstVariable = Math.floor(Number(prompt("Enter the first variable: ", 100.5)));
//var secondVariable = Math.ceil(Number(prompt("Enter the second variable: ", 20.3)));

alert('The result of division is ' +  resultDivision);
console.log(Math.floor(firstVariable));
console.log(Math.ceil(secondVariable));
console.log(Math.floor(firstVariable) / Math.ceil(secondVariable));
console.log(Math.round(firstVariable / secondVariable));


//-------------------------------

/* 4*. Написать код, который будет выводить максимум из ДВУХ чисел

Подсказка в виде кода для минимума из двух чисел:
var number1 = 5, number2 = 3;
var minNumber;
if(number1 < number2){
minNumber = number1;
}else{
minNumber = number2;
}
alert(minNumber)

var number1 = parseFloat(prompt("Enter first number", 2));
var number2 = parseFloat(prompt("Enter first number", 3));
var maxNumber;
if(number1 > number2){
    maxNumber = number1;
}else{
    maxNumber = number2;
}
alert(maxNumber); */


 //-------------------------------


//5*. Написать код, который будет выводить максимум из ТРЁХ чисел

/* var number1 = parseFloat(prompt("Enter first number", 1));
var number2 = parseFloat(prompt("Enter first number", 2));
var number3 = parseFloat(prompt("Enter first number", 3));
var maxNumber;
if(number1 > number2 && number1 > number3){
    maxNumber = number1;
}else if (number2 > number3){
    maxNumber = number2;
}else {
    maxNumber = number3;
}
alert(maxNumber);  */


//-------------------------------


/* 6*. сейчас при клике в поле "result" его цвет меняется на случайный. 
Хочу, чтобы были лишь оттенки жёлтого. 
Для этого настройте каналы rgb(red, green, blue), 
чтобы blue всегда был 0, red от 180 до 255, green от 150 до 255. */

/* const COLOR = (function() {
	return {
  	red : function() {
    	return Math.floor((Math.random() * 255)+180);
    },
    green : function() {
    	return Math.floor((Math.random() * 255)+150);
    },
    blue : function() {
    	return 0;
    }
  };
})();
function getColor(){
	return "rgb(" + COLOR.red() + ", " + COLOR.green() + ", " + COLOR.blue() + ")";
}

var html = document.getElementsByTagName("html")[0];
html.addEventListener("click", function() {
	html.style.backgroundColor = getColor();
}); */


// 3) я даже не буду проверять этот код, потому что он не читабельный

// 5)проверка

// else if(number2 > number1 && number2 > number3)

// избыточна. Ты уже проверил, что number1 не больше, чем number2, раз сейчас работает текущий код, так что number2 > number1 можно убрать