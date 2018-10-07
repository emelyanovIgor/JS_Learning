// JS_4 *******************

//const students = ["Vova", "Max",,,,,, "Natalia"]; //пример разреженного массива
//                  0        1       2

// console.log(students.length); //8
//console.log(students[5]);// undefined
// console.log(students[100]);// undefined



/* const students = ["Vova", "Max", "Natalia", "Michael"];
students[1] = "Artem";
students[3] = "Olena";
students[100] = "Andreas";


console.log(students);
console.log(students.length); */

/* const arr = new Array(100); //construct array. не рекомендуется использоватть
const arr = new Array(10, 20, 30); //construct array. не рекомендуется использоватть 

console.log(arr);  */


/* const arr = new Array(10, 20, 30); //construct array. не рекомендуется использоватть 
for (let i = 0; i <= arr.length-1; i++){
    arr[i];
}
console.log(arr); */


// OPTIMIZATION
/* const arr = new Array(10, 20, 30); //construct array. не рекомендуется использоватть 
const l = arr.length; // сейчас оптимизацию выполняет браузер!
for (let i = 0; i <= l-1; i++){
    arr[i];
}
console.log(arr); */


//["a", "b",,,,,,,,,"k"] // браузер не оптимизирует!
//.length - всегда на 1 больше макс. индекса!



/* const fruits = ["Orange", "Apple"];
fruits.push("Lemon", "Pear");//добавляет елементы в конец массива
console.log(fruits);


fruits.pop();//удаляет елементы из конца массива
console.log(fruits); */


/* const fruits = ["Orange", "Apple"];

console.log(fruits.push("Lemon", "Pear"));// выводит кол-во элементов
 */


/* const fruits = ["Lemon","Orange", "Apple"];
//fruits.shift();// удаляет первый элемент
fruits.unshift("Apricot", "Banana");//добавляет  первый элемент
console.log(fruits);
 */




/* const fruits = ["Lemon","Orange", "Apple", "Apricot", "Banana"];
//                0         1         2         3         4 

//fruits.slice(1, 3);
//console.log(fruits.slice(1, 3)); // вырезает элементы с массива

fruits.splice(1, 2, "Cherry"); // удалить элементы и поменять их на другие или удалить/вставить элементы с массива
console.log(fruits); // удалить элементы и поменять их на другие или удалить/вставить элементы с массива
*/



/* const fruits = ["Lemon", "Orange", "Apple", "Apricot", "Banana", "Orange"];

// for (i = 0; i < fruits.length; i++) {
//     if (fruits[i] === "Orange") {
//         console.log(i);
//     }
// }

console.log(fruits.indexOf("Orange", 1));// поиск элементов  */


/* const fruits = ["Lemon", "Orange", "Apple", "Apricot", "Banana", "Orange"];
const students = ["Vova", "Max", "Natalia"];
//const all = fruits + students;// два массива выводятся одной СТРОКОЙ
const all = fruits.concat(students);// объединение двух массивов

console.log (all); 
 */

/* const num = [10, 20, 30, 40, 50];


//console.log (num.reverse()); //РАЗВОРАЧИВАЕТ МАССИВ
console.log (num.join(" -- ")); //каждый елемент добавляется в строку, склетвается и выводится. Можно менять вид разделителя  */




//.join через for

/* const num = [10, 20, 30, 40, 50];

let str = ' ';
const separator = ' * ';

for (let i = 0; i < num.length; i++) {
    if (i == num.length - 1) {
        str += num[i];
        break;
    }
    str += num[i] + separator;
}

console.log(str); */


/* const num = [50, 10, -3, 75, 0, 1, 20];


//console.log(num.sort()); //сортирует массив по Юникоду 
console.log(num.sort(function (a, b) {
        return a - b; //b - a сортировка в обратном порядке
    }
));
 */



/*  const numbers = [50, 10, -3, 75, 0, 1, 20];
  numbers.forEach(function(number, index){
     console.log("current element is " + number);
 }); 
 */



//.forEach через for

//  function forEach(callback){
//      for(let i = 0; i <  num.length; i++){
//         callback(num[i], i, num),
//      }
//  }



/* const numbers = [50, 10, 0, 1, 20];
let sum = 0;

 numbers.forEach(function(number, index){
     sum = sum + number;// сумма всех чисел массива
}); 

console.log(sum); */


//.join через .forEach



/* const numbers = [50, 10, 0, 1, 20];
let str = ' ';
const separator = ' * ' ;


 numbers.forEach(function(number, index){
    if(index == numbers.length - 1){
        str = str + number;
        return;
    } 
    str = str + number + separator; 
}); 
console.log(str); */

//отдельно  функция


/* 

 numbers.forEach(join);
 
 function(number, index){
    if(index == numbers.length - 1){
        str = str + number;
        return;
    } 
    str = str + number + separator; 
} 

console.log(str);
*/

// возведение в квадрат через .forEach

/* const numbers = [50, 10, 0, 1, 20];
numbers.forEach(function(num) {
    console.log(num * num)
            // Math.pov(num, 2);
            // num ** 2;    
}); */


/* //отсортировывает числа из массива с помощью .filter()

const arr = [5, "element", 10, "the", true ];

const result = arr.filter(
    function (value) {
    return (typeof value === "number");
}    
);
console.log(result);
 */


/*  // проверяет все елементы на условие, возвращает true or false
const numbers = [50, 10, 0, 1, 20, "abc"];
console.log(numbers.every(function (value) {
    return typeof value === "number";
})); */


/*  // проверяет какой либо елемент на условие, возвращает true or false
 const numbers = [50, 10, 0, 1, 20];
 console.log(numbers.some(function (value) {
     return typeof value === "number";
 }));
  */



/* // получаем новый массив с уже обработанными элементами
 const numbers = [50, 10, 0, 1, 20];
 console.log(numbers.map(function (value) {
     return value * value;
 }));

 console.log(numbers); */



//  получаем факториал с помощью  .reduce()

/* const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.reduce(function(accumulator, value) {
    return accumulator * value

}, 1));
 */




// многомерные массивы

/*  const coords = [[10, 20], [20, 50], [100, 120]];
                 //  0         1          2
            //    0    1     0    1    0     1    
console.log(coords[1][1]);            
 */

// перебор многомерного массива через for

/* const coords = [[10, 20], [20, 50], [100, 120]];

for(let i = 0; i < coords.length; i++){
    for (let j = 0; j < coords[i].length; j++) {
        console.log(coords[i][j]);    
    }
} */
 

// создание многомерного массива через for

/* const arr = [];

for(let i = 0; i < 3; i++){
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i].push(j *j);
    }
}
console.log(arr);  */


/* 
//ОБЪЕКТЫ

const obj = {
    brand: "BMW",
    color: "black",
    engineVol: 3.5,
    move: function(){alert("START")}
};
//obj.length = 4.5; // добавление свойства
//obj.brand = "KamaZ";// перезапись свойства


//console.log(obj["color"]);
// console.log(obj.color);
// console.log(obj.color);
// console.log(obj.move());
console.log(obj);
 */




/* //вывод ключей(свойств)

const obj = {
    brand: "BMW",
    color: "black",
    engineVol: 3.5,
    move: function(){alert("START")}
}

for(let key in obj){

//console.log(key);//вывод ключей(свойств)
console.log(obj[key]);//вывод значений ключей(свойств)
}
 */


/* const obj = {
    brand: "BMW",
    color: "black",
    engineVol: 3.5,
    info: function(){
        console.log(obj.brand);
    }
};

obj.info(); */




/* const obj = {
    brand: "BMW",
    color: "black",
    engineVol: 3.5,
    info: function(){
        console.log(obj.brand);
    }
};
const myObj = obj; //копирование объекта в объект 
myObj.info(); */


/* let a = 10;
let b = a;
a = 0
console.log(a);//0
console.log(b); //10
*/

/* const obj = {
    brand: "BMW",
    color: "black",
    engineVol: 3.5,
    info: function(){
        console.log(obj.brand);
    }
};
const myObj = obj; //копирование объекта в объект 
myObj.brand = "Tavria";
myObj.info();
obj.info(); */



// this  аналог спец. переменной, которая хранит место из которого вызвана функция

let obj = {
    brand: "BMW",
    info: function(){
        console.log(this.brand);
    }
};
const myObj = obj; //копирование объекта в объект 
myObj.brand = "Tavria";
obj = null;

myObj.info();
