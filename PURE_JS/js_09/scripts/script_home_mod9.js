/* 1.  Создать класс Calculator в стиле ES6. То есть

class ClassName {
constructor(){
}
foo1() {
}
foo2() {
}
}

При создании экземпляра класса в него мы помещаем два числа и операнд в виде строки: const myCalc = new Calculator(10, 30, "+"). 
У калькулятора должен быть метод result, чтобы я мог написать console.log(myCalc.result()) и мне отобразился результат. 
Вы можете написать его через switch/case, можете оформить в виде callback-функций и тогда надо писать 
const myCalc = new Calculator(10, 30, function(a, b){return a + b}). 
А можете через функцию eval(). */

// VAR1

 class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }
  result(_operation = this.operation) {
    switch(_operation) {
      case '+': return this.a + this.b;
      break;
      default: return this.a;
    }
  }
}

const myCalculator = new Calculator(10, 15, '+');
console.log(myCalculator.result());


// VAR1


// class Calculator {
//
// 	constructor(num1, num2, operator) {
// 		this.number1 = num1;
// 		this.number2 = num2;
// 		this.operatorX = operator;
// 	}
//
// 	result() {
// 		return eval(`${this.number1} ${this.operatorX} ${this.number2}`);
// 	}
// }
//
// const myCalc = new Calculator(10, 6, '+');
// console.log(myCalc.result());

// let bu = 2;
//
// class Calculator {
//
// 	constructor(num1, num2, operator) {
// 		this.number1 = num1;
// 		this.number2 = num2;
// 		this.operatorX = operator;
// 		this.bu = 3;
// 	}
//
// 	result() {
// 		return this.operatorX(this.number1, this.number2);
// 	}
//
//     print1() {
//         console.log(bu);
//     }
//
//
//     print2() {
//         console.log(this.bu);
//     }
// }
//
// const myCalc = new Calculator(10, 6, (a, b) => (2 * a + b ** 2));
// console.log(myCalc.result());
// myCalc.print1();
// myCalc.print2();


// -----------------------------------------------------------------------------

/* 2. Создать класс Bender у которого будет переменная "wasted". 
При создании экземпляра мы присваиваем ей значение true или false в виде const myBender = new Bender(true);
то есть то, что мы помещаем в new Bender должно присвоиться в "wasted".
У класса есть два метода: bend() и say(), написанные в прототипе. 
Если wasted === true, то при вызове bend() будет сообщение в консоль "не могу работать", а для say() сообщение "Kiss my shiny metal ass".
Если wasted === false, то bend() выдаст "сгибаю", а say() выдаст "Привет".
 */


class Bender {
    constructor(wasted) {
        this.wasted = wasted;
    }

    bend() {
        if (this.wasted) {
            console.log('не могу работать');
        } else {
            console.log('сгибаю');
        }
    }

    say() {
        if (this.wasted) {
            console.log('Kiss my shiny metal ass');
        } else {
            console.log('Привет');
        }
    }
}
// Bender.prototype.bend = function() {
//    if (this.wasted) {
//        console.log('не могу работать');
//     } else {
//        console.log('сгибаю');
//     }
// }
//
// Bender.prototype.say = function() {
//    if (this.wasted) {
//        console.log('Kiss my shiny metal ass');
//     } else {
//        console.log('Привет');
//     }
// }

        const newBenderTrue = new Bender(true);
        const newBenderFalse = new Bender(false);
        newBenderTrue.bend();
        newBenderTrue.say();
        newBenderFalse.bend();
        newBenderFalse.say();


