// JS_10 *******************

// ***************************************

//regular expression create 1 method
/* const myString = 'my text'; 
const pattern = /text/;

console.log(myString.match(pattern));
 */

// ***************************************

//regular expression create 2 method
/* const myString = 'my text'; 
const pattern = new RegExp('t');
// const pattern = new RegExp('T');  вернёт null

console.log(myString.match(pattern)); */

// ***************************************

//instanceof
/* const myString = 'my text'; 
const pattern = new RegExp('t');

console.log(pattern instanceof RegExp); // выводит является ли объект pattern экземпляром класса RegExp более приемлем чем typeof
 */

// ***************************************

//FLAGS
/* 
const myString = 'This is my text'; 
const pattern = /t/g;//  глобальный поиск, ищет все g
const pattern = /t/i;//  регистронезависимость, ищет первую Т
const pattern = /t/gi;//  ищет  Т t

console.log(myString.match(pattern));
 */

// ***************************************

//beginning and end of the line

/* 
const myString = 'a is a text'; 
const pattern = /^a/i;//  начинается ли строка с символа а А

console.log(pattern.test(myString));
// console.log(myString.match(pattern));
 */

/*  
const myString = 'This is a text'; 
const pattern = /^This is a text$/;//  ищет строку идентичную шаблону
const pattern = /text$/;//  ищет заканчивается ли строка на text

console.log(pattern.test(myString));// выводит true
console.log(myString.match(pattern));// выводит где начинается подстрока содержащая строку text 
 */

//screen
// const bill = '100.50$, 50$ and 200$.';
// const bill = '100/20';
// const bill = '100\\20';
// const bill = '100$, 50$ and 200$.';
// const bill = '100$, 50$, 100rub and 200$.';
// const bill = '100rub, 50rub, 100rub and rub200';
// const bill = 'London is the capital, then';
// const bill = '100 uah';
// const bill = ' a 100 uah apple';
// const bill = ' Color - Am, colour - GB';
// const bill = 'center, centre';

// const pattern = /\$/g; -  поиск знака $

// const pattern = /\./g; - поиск .(точки)

// const pattern = /\.$/; -  точка в конце

// const pattern = /\//; - поиск слэш

// const pattern = /\\/; - поиск слэш

// const pattern = /\d/g; - поиск одной цифры (0-9)

// const pattern = /\d\d\d/g; - поиск трёхзначной цифры

// const pattern = /\d\d\d\$/g; - поиск трёхзначной цифры с знаком $

// const pattern = /\d{3}\$/g; - поиск трёхзначной цифры с знаком $

// const pattern = /rub\b/g; - поиск rub в конце слова

// const pattern = /\bthe\b/; - поиск   the

// const pattern = /\w/g; - поиск любой цифры, буквы или нижнего подчёркивания

// const pattern = /./g; - поиск любых символов кроме переноса строк

// const pattern = /\S|\s/g; - поиск пробелов или не пробелов (ищет все символы)

// const pattern = /\D|\d/g; - поиск цифр или не цифр (ищет все символы)

// const pattern = /\Ba\B/g; - ищет букву а в слове uah

// const pattern = /colou?r/gi; - ищет Color и  colour
// const pattern = /center|centre/gi; - ищет center и centre
// const pattern = /cent(er|re)/gi;- ищет center и centre

// console.log(bill.match(pattern));

/* 

\n - перенос строки
\s - пробел
\S - не пробел
\t - табуляция горизонтальная 

\b -  граница слова
\B -  не граница слова
\D - поиск не цифры (0-9)
\w - поиск любой цифры, буквы или нижнего подчёркивания
\W  - любая не цифра, буква или нижнее подчёркивание
\? - ноль либо больше совпадений
 */

// ***************************************

// const codes = '063, 093, 073, 067';
// const codes = 'a aa aaa aaab';
// const codes = 'to too tool t toto';

// const pattern = /063|093|073/g; - ищет 063, 093, 073
// const pattern = /0(6|7|9)3/g; - ищет 063, 093, 073
// const pattern = /0\d3/g; - ищет 063, 093, 073
// const pattern = /0[6-9]3/g; - ищет 063, 093, 073
// const pattern = /[6-9]3/g; - ищет 063, 093, 073
// const pattern = /[^123458]3/g; - ищет 063, 093, 073

// const pattern = /a{3}/g; - ищет совпадение где а встречается 3 раза - aaa

//const pattern = /a{2,3}/g; - ищет совпадение где а встречается 2 или 3 раза - aaa

// const pattern = /to{2}/g; - ищет совпадение где  встречается после t 2 буквы oo

// const pattern = /(to){2}/g; - ищет совпадение где  встречается после toto

// const pattern = /to{1,}/g; - ищет совпадение где  встречается после to от 1 и более букв о

// const pattern = /to{0,}/g; - ищет совпадение где  встречается t, to, too

// const pattern = /to+/g; - ищет совпадение где  встречается одно или больше повторений (to, too ) аналог {1,}

// const pattern = /to*/g; - ищет совпадение где  встречается одно или больше повторений предыдущего символа(t, to, too ) аналог {0,}

// const pattern = /to?/g; - ищет совпадение где  встречается либо ноль либо один символ(t, to), аналог {0,1}

// console.log(codes.match(pattern));

// [^123] - не 123
//{from, to} - кол-во повторений от до
// * - ноль или больше повторений предыдущего символа, аналог{1,}
// + - одно или больше повторений, аналог {0,}
// ? - либо ноль либо один, аналог {0,1}
//[A-Z] - все буквы латинского алфавита в верхнем регистре
//[a-z] - все буквы латинского алфавита в нижнем регистре
//[A-z] - все буквы латинского алфавита в верхнем и нижнем регистрах. но между регистрами есть ещё несколько символов, например нижнее подчёркивание

/* const input = document.querySelector("input");
input.addEventListener("blur", function() {
  console.log(input.value.match(/^[a-z\s\-]{1,24}$/i));// - проверка ввода имени в input латинские буквы(1-24) без пробела(\s), без дефиса(\-) 
});
 */

// ***************************************

//  const str = 'Банки "Приват" и "Ощад"';
//  const pattern = /".+"/;  ищет ", любой символ(.), минимум один символ(+) " - "Приват" и "Ощад"
//  const pattern = /".+?"/;  не жадный поиск,  ищет ", любой символ(.), минимум один символ(+) " - "Приват" и "Ощад"

//  console.log(str.match(pattern));

// ***************************************



const tel = document.getElementsByClassName("tel").item(0);
const email = document.getElementsByClassName("email").item(0);

const telClass = tel.getAttribute('class');
const emailClass = email.getAttribute('class');


const telPattern = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
const emailPattern = /^\w+([.\-]\w+)*@\w+([\-]\w+)*\.[A-Za-z]{2,6}$/;

tel.addEventListener("change", function() {
  if (telPattern.test(tel.value)) {
    console.log("OK");
    tel.setAttribute('class', telClass + ' ' + 'OK')
  } else {
    console.log("ERROR");
    tel.setAttribute('class', telClass + ' ' + 'ERROR')
  }
});

email.addEventListener("change", function() {
  if (emailPattern.test(email.value)) {
    console.log("OK");
    email.setAttribute('class', emailClass + ' ' + 'OK')
  } else {
    console.log("ERROR");
    email.setAttribute('class', emailClass + ' ' + 'ERROR')
  }
});

//+38(067)-123-45-67
// text-text@