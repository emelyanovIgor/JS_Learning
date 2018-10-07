/* 1. Создать массив favouriteFilms из 3-х любимых фильмов. Добавить в него ещё фильмы такими способами:
Один фильм добавить, указав индекс через квадратные скобки, вроде arr[10] = 'text';, только используя правильные индексы
Один добавить через метод push()   
Вывести весь массив через console.log() */


/* const favouriteFilms = ["Braveheart", "The Boondock Saints", "Knockin' On Heaven's Door"];

favouriteFilms[3] = "Wasabi";
favouriteFilms.push("One Flew Over the Cuckoo's Nest");

console.log(favouriteFilms); */


// * * * * * * * * * * 

/* 2. Создать массив с планетами, включая Плутон. Удалить Плутон методом pop()
Вывести все планеты по одной, перебрав массив в цикле for() */

/* const planets = ["Меркурий", "Венера", "Земля", "Марс", "Юпитер", "Сатурн", "Уран", "Нептун", "Плутон"];

planets.pop(8);
for (let i = 0; i < planets.length; i++) {
    planets[i];
    console.log(planets[i]);
}
 */

// * * * * * * * * * * 

// 3. Перебрать массив с планетами в обратном порядке (от Нептуна до Меркурия) тоже циклом for()

/* const planets = ["Меркурий", "Венера", "Земля", "Марс", "Юпитер", "Сатурн", "Уран", "Нептун", "Плутон"];

planets.pop(8);
for (let i = planets.length - 1; i >= 0; i--) {
    console.log(planets[i]);
} */


// * * * * * * * * * * 


/* 4. Есть массив средних температур по шкале Цельсия по Киеву за каждый месяц года 
[-3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3]. 
К вам в гости приехал американец и просит перевести эти температуры в Фаренгейт. 
Используя метод forEach() или метод map() выведите на экран новый массив с этими же температурами, но по Фаренгейту. 
Формула перевода температур успешно находится с помощью сайта гугл.ком (F = (C*1.8) + 32) */


/* const temp = [-3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3];
let far = 0;

temp.forEach(function (number, index) {
    far = (number * 1.8) + 32;
    console.log(parseFloat(far).toFixed(2));
});
 */


// * * * * * * * * * * 

/* 5. Наш неугомонный американец мыслит немного альтернативно и ему не очевидно, что в течении года бывают отрицательные температуры. 
Докажите, что температура в Киеве бывает ниже нуля, используя методы some() или every(). 
В первом варианте вы будете искать есть ли холодные месяцы, а во втором проверяете все ли месяцы тёплые. 
Подходы противоположные, но результат один. */

// some() -  будете искать есть ли холодные месяцы
// every() - проверяете все ли месяцы тёплые


/* const temp = [-3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3];
let negative = 0;

negative = temp.some(function (value) {
    return value < 0;
});
if (negative === true) {
    console.log(negative + "\nВ Киеве все же бывают холодные месяцы :-(");
} */


// * * * * * * * * * * 


/* 6. Создать объект с именем address с полями userName, country, city, street. 
Заполнить их через переменные. Значения этих переменных получить через prompt(), 
как это сделано в примере по ссылке https://jsfiddle.net/u3uwbukg/
Через цикл for in вывести на экран всю информацию о пользователе. */

/* var name = prompt("Enter your name", "Igor");
var country = prompt("Enter your country", "Ukraine");
var street = prompt("Enter your street", "Vasylkivska");
var obj = {
    userName: name,
    country: country,
    street: street,
}
for (var key in obj) {
    console.log("Ключ: " + key + "," + " значение: " + obj[key]);
}
 */

// * * * * * * * * * *


/*  7. Разверните массив без метода reverse(). 
 Если сможете, то сделайте это не используя создание дополнительных массивов, 
 а управляя лишь элементами одного и того же массива
 */

// bad variant

/* const arrNumb = [10, 11, 12, 13, 14, 15];
console.log(arrNumb);
// console.log(favouriteFilms.reverse());
for (let i = arrNumb.length - 1; i >= 0; i--){
    console.log(arrNumb[i]);
} */

/* const arrNumb = [10, 11, 12, 13, 14, 15];

for (let i = arrNumb.length - 1; i >= 0; i--) {
    arrNumb.push(arrNumb[i]);
}
for (let i = 0; i < arrNumb.length; i++) {
    arrNumb.shift(arrNumb[i]);
}
console.log(arrNumb); */


// * * * * * * * * * *

/* 
8. Используя массив температур из задания 4 и метод reduce() 
выведите среднюю температуру за год по Цельсию
 */

/* const temp = [10, 10, 10];
let sum = 0;
let averTemp = 0;
sum = temp.reduce(function (accum, number) {
    return accum + number;
}, 0);
averTemp = sum / temp.length;
console.log(averTemp);

// parseFloat(far).toFixed(2)
 */


 // * * * * * * * * * *





/* 
Есть такой код: https://jsfiddle.net/x4rkcyu0/
Если кто пробовал оплачивать банковской картой в интернете, то возможно видели окошко из цифр, которое открывается 
при вводе cvv-кода. Цифры там расположены в 4 ряда и 3 столбца и каждый раз они в разных позициях.
Текущий код создаёт что-то похожее, но цифры одинаковые. 


Потому что в 34-й строке мы получаем элемент массива по индексу 1, 
а надо, чтобы индекс был от 0 до 9. Используя только счётчики циклов и наши константы сделайте так, чтобы в 34-й строке
передавались из numbers[] корректные элементы.
в комментариях к функции написаны примерные варианты, как должно стать. */