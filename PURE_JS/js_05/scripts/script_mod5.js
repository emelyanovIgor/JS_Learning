// JS_5 *******************

/* 
const car = {
    brand: "LADA",
    color: "green",
    speed: 200,
    move: function() {
        console.log("Я сейчас еду");
    },
    stop: function(){
        console.log("Я остановилась");
    }
}
car.move(); // метод move. функция в объекте
 */



/* 
const add = function(){
    console.log(2 + 2);
};

add();// вызов функции
 */


/*  //FUNCTION EXPRESSION
 const add = function(a, b){
    console.log(a + b);
};

add(10,5);// вызов функции
add(100,200);// вызов функции



//FUNCTION DECORATION

add(10,5);// вызов функции
add(100,200);// вызов функции

function add(a, b){
    console.log(a + b);
}
 */


/* 
 //конструктор, не используется, браузеры не оптимизированы
 const add = new Function("a", "b", "console.log(a + b)");
 add(5,10);
  */

/* divide(100, 10);

function divide(a, b) {
    console.log(a / b);
}
 */



/* 
function divide1(a, b) {
    return a / b;
}

// console.log(divide1(25, 5));
const result = divide1(25, 5);
console.log(result); */

// пишем свою функциюб  суммирует чисел от 1 до n

/* function reduce(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }  
    return sum;
}
console.log(reduce(10)); */
//проверка на то чтобы не вводилась строка
/* function reduce(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }    
    return sum;
}
const number = +prompt();// + приведение к числовому типу данных 
if(!number){
    console.log(reduce(10));
}else {
    console.log("Введите корректное число");
}
 */



//работа с переменными
/* var name = "Ivan"

function foo() {
    var name = "Petro"
    console.log(name);
}

foo();
console.log(name); */



/* function add(x , y) {
    console.log(arguments);
    return x + y;
}

console.log(add(10));
console.log(add(10, 20, 50));
 */



/* function add(x , y) {
    // for (let index in arguments) {
    //     console.log(arguments[index]);
    // }
    console.log(arguments[2]);
    
    //return arguments[0] + arguments[1];
    return x + y;

}

// console.log(add(10));
console.log(add(10, 20, 50, "text")); */

/* 
function add(a , b) {
    b = b || 0; //значение по умолчанию
    console.log(`b = ${b}`)
    return a + b  ;

}
console.log(add(10));
 */

/* function add(a , b) {
    a = a || 100
    b = b || 200;
    return a + b  ;

}
console.log(add(1, 2)); */

/* function add(a = 1 , b = 1) {   //значение по умолчанию ES 6
    return a + b  ;

}
console.log(add()); */


/* function add(a, b) {   //значение по умолчанию ES 6
    b = b || a || 10;
    return a + b  ;

}
console.log(add(10, 0)); */

//самовызывающаяся функция

/* (function() { 
    console.log('It\'s me');

})(); */


/* // возведение в степень
function power(a, b) { 
    let result = 1
    for(let i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}
console.log(power(5, 3)); */

// две функции с одинаковым именем power
/* function power(a, b) { 
    let result = 1
    for(let i = 0; i < b; i++) result *= a;
    return result;
}

function power(){
    return 'hahaha';

}
console.log(power(5, 3)); */



/* (function power(a, b) { 
    let result = 1
    for(let i = 0; i < b; i++) result *= a;
    console.log(result);
    // return result;
})(2, 10);
 */

/* const result = (function power(a, b) { 
    let result = 1
    for(let i = 0; i < b; i++) result *= a;
    return result;
})(2, 10);
console.log(result);
 */


//ошибка
/*  function foo() {
     return "FUNCTION";
 }

 var foo = "VARIABLE" //по одному и тому же имени не может  быть несколько значений
 console.log(foo()); */


/*  ["petya", "misha", "sasha"].forEach(
     function(name, index, arr) {   // callback
     console.log(`Hello ${name}`)   // function

 }); */


/* ["petya", "misha", "sasha"].forEach(
   freetings
   );
   function freetings(name, index, arr) {   // callback
       console.log(`Hello ${name}`)   // function
   
   } */


/* 
["petya", "misha", "sasha"].forEach(greetings);

function greetings(name, index, arr) {   // callback
    if (index === 1) {
        console.log(`Hello ${name}`)   // function
    }
} */

// функция калькулятор

/* function calc(a, b, operation) {
    return operation(a, b)
}
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiplication(x, y) {
    return x * y;
}
function division(x, y) {
    return x / y;
}
console.log(calc(10, 5, add));
console.log(calc(10, 20, subtract)); */


//РЕКУРСИЯ //очень медленно!


/* function factorial( n ) {
    if ( n === 1 ) {  // условие
    return 1;         // выхода
    }
    return n * factorial( n - 1 );
    }
    
    console.log(factorial(5)); */



//factorial через for


/* function factorial( n ) {
    let n = 1;
    for(let i = 0;  i <= n; i++){
        f *= i;
    }
    return f;
}
    console.log(factorial(5)); 
    */



//1 1 2 3 5 8 13 21 34 - числа Фиббоначи (число равно сумме двух предыдущих)
// числа Фиббоначи никто не решает через рекурсию, только на собеседовании
//F(n) = F(n - 1) + F(n - 2) 

/* function fibonnachi( n ) {
    if(n <= 1)
    return 1;
    
    return fibonnachi (n - 1) + fibonnachi (n - 2);
}
    console.log(fibonnachi(8)); //34
 */


// ЗАМЫКАНИЕ

/* const foo = (function(){
    return{             //object
        say: function(){console.log("say");},
        sleep: function(){console.log("sleep");}
    }
})();
foo.say();
foo.sleep(); */


/* const foo = (function(){
    const hello = "Hello everybody!";
    return{             //object
        say: function(){console.log(hello);},
        sleep: function(){console.log("sleep");}
    }
})();
foo.say();
foo.sleep(); */


/* function foo(){
    var counter = 0;
    return console.log(counter++);
}

foo(); // 0
foo();  
*/


const foo = (function () {
    let counter = 0;
    return {             //object
        say: function () { console.log(counter++); },
        sleep: function () { console.log("sleep"); }
    }
})();
foo.say();
foo.say();
foo.say();
