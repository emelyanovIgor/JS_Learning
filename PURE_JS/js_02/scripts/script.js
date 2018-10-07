// JS_2 *******************
//ES6. CONST is not used with var, let is used

/*const DEFAULT_PET_NAME = "Barsik";
let petName = prompt("What is your cat's name ?", DEFAULT_PET_NAME);
console.log("Your cat's name is " + petName);*/

/*let num = 10 / 'text';
alert(typeof num);*/

// alert (Math.pow(10, 2)); //degree of number

/*alert (Math.pow(1000, 1000)); //Infinity
alert (Math.pow(-1000, 1001)); //-Infinity*/

/*
alert (Math.pow(4, 0.5)); //Square root
alert (Math.pow(10, -3)); //10 divided by 1 to 3 degrees
alert (Math.pow(10, -3)); //NaN*/

/*
let num = new Number();
alert (num); //NaN*!/
console.log(num);
*/

/*
let number2 = 20;
// number2 += 1;//number2+1
// number2++;
alert (number2++)// 20;
alert (++number2)// 21;
*/

/*let numbers = 10 % 6; // remainder of the division, 4
alert(numbers);

10|6
-6|1
----
4

12|6
-6|2
----
0*/

/*var num = 10.2;//rounding of a number, 10
alert (Math.round(num));

var num = 10.999;//rounding of a number, 10
alert (Math.floor(num));

var num = 10.000;//rounding of a number, 11
alert (Math.ceil(num));*/

/*
let a = 0.1, b = 0.2; //result 0.30000000000000004 not 0.3
alert(a + b);

let a = 0.1, b = 0.2; //result 0.3
alert((a * 10 + b * 10) / 10);*/

/*alert(
   Math.floor( 10 * Math.random() + 1) //numbers from 1 to 10
);*/

/*alert(
    Math.floor( (20 - 10 + 1) * Math.random() + 10) //numbers from 10 to 20
);*/

//or

/*
let min = 10;
let max = 20;
alert(
    Math.floor( (max - min + 1) * Math.random() + min) //numbers from 10 to 20
);
*/

/*
//undefined
var num;
alert(num);
num = 'text';*/

//var obj = null; //Zeroing, stub

//var str = 'text'; //simple string
//var str = 'subway station "Petrivka"'; //quoted text
/*
var str = 'subway station \'Petrivka\''; //quoted text
alert(str);*/

/*
var a = 10; b = 20;
var sum = "The sum of the number " + a + "+" + b + " is " + (a + b) + "!";
alert(sum);*/

//EC6 and higher
/*
var a = 10; b = 20;
var sum = `The sum of the number ${a} and ${b} is ${a + b}!`;
alert(sum);*/

/*
var str = 'text' + 20 + 30;//text2030
alert(str);*/

//var str = 'text' / 20;//NaN
/*
var str = '100' / 20;//5
alert(str);*/

/*
var address = 'C:\\\\users\\nodejs\\table';//C:\\users\nodejs\table
// \ - screen
// \n - line break
// \t - tabulation
alert(address);*/

// var str = 'text';
// alert(str.length);//symbols quantity through property length

/*
var str = 'text';
alert(str[2]);//symbols number*/

/*
var str = new String('t e x t');
console.log(str);//symbols number via object new String*/

/*
var str = new String('t e x t');
console.log(str);//symbols number via object new String*/

/*
var str = 'text';
alert(str.toUpperCase());//string in uppercase via method .toUpperCase*/

/*var str = 'TEXT';
alert(str.toLowerCase());//string in lowercase via method .toLowerCase*/

/*var str = 'text';
alert(str.indexOf('t',2));//search 't' from the second symbol*/

/*
var str = '   text   ';
alert(str.trim());//removes spaces at the beginning and at the end
*/

/*var a = parseInt(prompt()); //pulls the whole part of the string
alert(a);*/

/*var a = parseFloat(prompt()); //pulls the fractional part of the string
alert(a);*/

//alert(true && true);
//alert(20 >= 18 && 1000 >100); operator and
alert(15 >= 18 || 1000 >100); //operator or