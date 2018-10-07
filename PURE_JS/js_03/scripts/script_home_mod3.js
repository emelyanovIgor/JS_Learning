/* 1. Используя prompt() спросить у посетителя какой напиток он будет пить
 и, в зависимости от выбора, проверить через switch какой напиток выбран 
 и вывести в соответствии с выбором различные фразы вида "вы выбрали " + userDrink + ". Отличный выбор". 
 Например для алкогольных напитков одну фразу, для других - другую. 
 Не забываем про default и возможность использовать несколько case для одного результата. */

/* const drink = prompt('What would you like to drink?');
switch (drink) {
  case 'Tea':
  case 'Coffe':
  case 'Juice':
  case 'Water':
    alert(`You have chosen a ${drink}. Great choice.`);
    break;
  case 'Beer':
  case 'Wine':
  case 'Whiskey':
  case 'Gin':
    alert(`You have chosen an alcoholic drink ${drink}. Do you already have 18?`);
    break;
  default:
    alert('You have chosen an unknown drink!');
}
 */

/*  2. Через цикл for и несколько операторов if (или другим путём, если придумаете как) 
 узнать сколько чисел от 0 до 100 делятся без остатка на 3, сколько на 5, а сколько на 3 и на 5 одновременно. 
 Вывести эти количества на экран после цикла. Вспоминаем про оператор деления с остатком % */


/* let sum3 = 0;
let sum5 = 0;
let sum3And5 = 0;
//let sum3 = sum5 = sum3And5= 0; // по цепочке никто не присваивает)
for (let i = 1; i <= 100; i+=1) {
    if (i % 3 == 0){
       sum3++;
    }
    if (i % 5 == 0){
       sum5++;
    }
    if (i % 3 == 0 && i % 5 == 0){
       sum3And5++;
    }
} 
console.log(sum3);
console.log(sum5);
console.log(sum3And5); */



/* 3. Создать переменную isEven, которая изначально равна false. 
Через цикл while(!isEven) с помощью prompt() просить пользователя ввести чётное число. 
Когда он введёт чётное, то присвоить переменной isEven true. 
Не забываем делать приведение типов и вспоминаем, как определять чётность чисел. */


/* let isEven = false;
while (!isEven) {
	let number = +prompt('Введите четное число');
  if (number % 2 == 0){
    isEven = true; 
    console.log(isEven);
  }else {
    console.log("Вы ввели нечетное число!");
  }
} */


/* Всё вроде ок, но солнце движется куда-то за пределы страницы и его не остановить. 
Надо с этим разобраться. У нас есть закомментированный if(). 
Раскомментируйте его и добавьте условие, чтобы солнце останавливалось, если:
- отойдёт от левого края на 320px, ИЛИ
- отойдёт от верхнего края на 480px

дополнительное задание: добавить постепенное уменьшение размера, если знаете как или сможете разобраться) 
хотя, того, что есть в коде уже достаточно, чтобы сделать задание, ничего особо гуглить не надо, а просто посмотреть, 
как реализованы моменты со цветом и позиционированием */


(function () {
  const sun = {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    backgroundColor: "rgb(255, 255, 0",
    position: "absolute",
    top: "10px",
    left: "10px"
  }

  const body = document.body;
  const elem = document.createElement("div");

  for (let attr in sun) {
    elem.style[attr] = sun[attr];
  }

  body.appendChild(elem);

  let color = 255, top = 10, left = 10; //width = 100, height = 100;
  const interval = setInterval(function () {
    color -= 0.1;
    top = 0.2;
    left = 0.2;
    // width = 0.04;
    // height = 0.04;
    elem.style.backgroundColor = "rgb(255," + Math.ceil(color) + ",0)";
    elem.style.top = parseFloat(elem.style.top) + top + "px";
    elem.style.left = parseFloat(elem.style.left) + left + "px";
    //elem.style.width = parseFloat(elem.style.width) - width + "px";
    //elem.style.height = parseFloat(elem.style.height) - height + "px";


    if (parseFloat(elem.style.left) >= 320 || parseFloat(elem.style.top) >= 480) {
      clearInterval(interval);
    }
  }, 10);
})();