/* 1. Создать функцию double(), которая будет принимать в качестве аргумента число и удваивать его. 
Удвоенное число либо пусть функция возвращает через return, либо сразу выводит через console.log. Например
double(5) выдаст 10. */

/* let num = prompt("Введите первое число", "4");
function double(a) {
    return a * 2;
}
console.log(double(num));


 */
//*---------------------------


/* 2. Создать функцию bye(), которая через prompt() будет спрашивать имя пользователя и прощаться с ним, 
выводя на экран "До свидания, <здесь будет имя>" */


/* function bye(name) {
    name = prompt("Как Ваше имя", "Egor");
    return ("До свидания, " + name + "!");
    //    return "До свидания, " + prompt("What is your name?");
}
console.log(bye()); */


//*---------------------------


/* 3. Доработать наш пример из лекции с функцией calc(). 
На уроке у нас были callback-функции add(), multiply() и subtract(). 
Написать ещё и функции для деления, деления по модулю, возведения первого числа в степень второго.
Ну и естественно, вызвать функцию calc() с этими всеми коллбэк-функциями и двумя числами, 
над которыми будут производиться действия. */


/* function calc(a, b, operation) {
    return operation(a, b)
}

function divide(x, y) {
    return x / y;
}
function remainder(x, y) {
    return x % y;
}
function exponentiation(x, y) {
    return Math.pow(x, y);
    //return x ** y; //экспериментальная технология,(ECMAScript 7).Cпецификация этой технологии ещё не стабилизировалась
}

console.log(calc(14, -2, divide));
console.log(calc(5.5, 2, remainder));
console.log(calc(5, 5, exponentiation));
 */


/* 4. Написать функцию для подсчёта сложных процентов. 
Первый аргумент - это деньги на счету, 
второй - размер процента, 
третий - срок банковского вклада в годах. 

Функция возвращает конечную сумму на счету с учётом, что в конце года происходит начисление процентов. 

Если срок не завершён, то проценты прибавляются к деньгам на счёте и в следующем году уже считается процент этой суммы. 
То есть у нас ежегодная капитализация */




/*  let sum = 0;


sum = (100000 * (Math.pow((1 + 11 / 100), 5))).toFixed(4);

console.log(sum); */


/* function compoundInterest(money, percent, term) {
    money = prompt("Введите деньги на счету", 10000);
    percent = prompt("Введите размер процента", 5);
    term = prompt("Введите срок банковского вклада в годах", 10);
    compoundInterest = (money * (Math.pow((1 + percent / 100), term))).toFixed(3);
    return compoundInterest;
}
console.log(compoundInterest()); */


    /* function deposit(money, percent, term) {
        var result = money;
      for (i = 1; i <= term; i++) {
          money += money * percent / 100;
        result += money;
      }
      return result;
    }
    
    console.log("You can take back your money - " + deposit(100, 10, 8).toFixed(2) + " $"); */

/* 
    function deposit(money, percent, term) {
        for (i = 1; i <= term; i++) {
            money += money * percent / 100;
        }
        return money;
      }
      
      console.log("You can take back your money - " + deposit(1000, 12, 2).toFixed(2) + " $"); */