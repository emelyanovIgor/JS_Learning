/* 
1. Есть такой текст: 
var s = "Recursion is sometimes used humorously in computer science, programming, philosophy, or mathematics textbooks, generally by giving a circular definition or self-reference, in which the putative recursive step does not get closer to a base case, but instead leads to an infinite regress. It is not unusual for such books to include a joke entry in their glossary along the lines of:Recursion, see Recursion.[6]A variation is found on page 269 in the index of some editions of Brian Kernighan and Dennis Ritchies book The C Programming Language; the index entry recursively references itself (recursion 86, 139, 141, 182, 202, 269). The earliest version of this joke was in Software Tools by Kernighan and Plauger, and also appears in The UNIX Programming Environment by Kernighan and Pike. It did not appear in the first edition of The C Programming Language."

Найти все случаи появления комбинаций букв "the". То есть это не обязательно артикль, но и в слове "then" тоже найдётся это сочетание букв.

*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------

/* var s = "Recursion is sometimes used humorously in computer science, programming, philosophy, or mathematics textbooks, generally by giving a circular definition or self-reference, in which the putative recursive step does not get closer to a base case, but instead leads to an infinite regress. It is not unusual for such books to include a joke entry in their glossary along the lines of:Recursion, see Recursion.[6]A variation is found on page 269 in the index of some editions of Brian Kernighan and Dennis Ritchies book The C Programming Language; the index entry recursively references itself (recursion 86, 139, 141, 182, 202, 269). The earliest version of this joke was in Software Tools by Kernighan and Plauger, and also appears in The UNIX Programming Environment by Kernighan and Pike. It did not appear in the first edition of The C Programming Language."
var pattern = /the/gi;

console.log(s.match(pattern)); */

//----------------------------------------------------------------------------------------------------------------------------------------------------------

/* 2. Найти все цифры. */

/* var s ="Recursion is sometimes used humorously in computer science, programming, philosophy, or mathematics textbooks, generally by giving a circular definition or self-reference, in which the putative recursive step does not get closer to a base case, but instead leads to an infinite regress. It is not unusual for such books to include a joke entry in their glossary along the lines of:Recursion, see Recursion.[6]A variation is found on page 269 in the index of some editions of Brian Kernighan and Dennis Ritchies book The C Programming Language; the index entry recursively references itself (recursion 86, 139, 141, 182, 202, 269). The earliest version of this joke was in Software Tools by Kernighan and Plauger, and also appears in The UNIX Programming Environment by Kernighan and Pike. It did not appear in the first edition of The C Programming Language.";
// var s1 = 'the, then, there. therrr, onethere, rrrthe'
var pattern = /\d+/g;

console.log(s.match(pattern)); */

//----------------------------------------------------------------------------------------------------------------------------------------------------------

/* 3. Найти все слова "the". Именно отдельно стоящие слова, а не как в первой задаче. */

/* var s = "Recursion is sometimes used humorously in computer science, programming, philosophy, or mathematics textbooks, generally by giving a circular definition or self-reference, in which the putative recursive step does not get closer to a base case, but instead leads to an infinite regress. It is not unusual for such books to include a joke entry in their glossary along the lines of:Recursion, see Recursion.[6]A variation is found on page 269 in the index of some editions of Brian Kernighan and Dennis Ritchies book The C Programming Language; the index entry recursively references itself (recursion 86, 139, 141, 182, 202, 269). The earliest version of this joke was in Software Tools by Kernighan and Plauger, and also appears in The UNIX Programming Environment by Kernighan and Pike. It did not appear in the first edition of The C Programming Language."
// var s1 = 'the, then, there. therrr, onethere, rrrthe'
// var pattern = /\bThe|the\b/g;
var pattern = /\bthe\b/ig;

console.log(s.match(pattern));
 */
//----------------------------------------------------------------------------------------------------------------------------------------------------------

/* 4. Найти первую "не цифру" */

/* var s = "Recursion is sometimes used humorously in computer science, programming, philosophy, or mathematics textbooks, generally by giving a circular definition or self-reference, in which the putative recursive step does not get closer to a base case, but instead leads to an infinite regress. It is not unusual for such books to include a joke entry in their glossary along the lines of:Recursion, see Recursion.[6]A variation is found on page 269 in the index of some editions of Brian Kernighan and Dennis Ritchies book The C Programming Language; the index entry recursively references itself (recursion 86, 139, 141, 182, 202, 269). The earliest version of this joke was in Software Tools by Kernighan and Plauger, and also appears in The UNIX Programming Environment by Kernighan and Pike. It did not appear in the first edition of The C Programming Language."
var pattern = /^\D/;

console.log(s.match(pattern)); */

//----------------------------------------------------------------------------------------------------------------------------------------------------------

/* 5. Найти все случаи, когда в тексте встречаются подряд идущие символы "in" или "on". */

/* var s ="Recursion is sometimes used humorously in computer science, programming, philosophy, or mathematics textbooks, generally by giving a circular definition or self-reference, in which the putative recursive step does not get closer to a base case, but instead leads to an infinite regress. It is not unusual for such books to include a joke entry in their glossary along the lines of:Recursion, see Recursion.[6]A variation is found on page 269 in the index of some editions of Brian Kernighan and Dennis Ritchies book The C Programming Language; the index entry recursively references itself (recursion 86, 139, 141, 182, 202, 269). The earliest version of this joke was in Software Tools by Kernighan and Plauger, and also appears in The UNIX Programming Environment by Kernighan and Pike. It did not appear in the first edition of The C Programming Language.";
var pattern = /in|on/g;

console.log(s.match(pattern)); */

//----------------------------------------------------------------------------------------------------------------------------------------------------------
/* 6. Создать в HTML поле ввода <input placeholder="Введите ваше имя">

Создать массив, куда добавлять то, что вводит пользователь.

Повесить слушатель на событие "change". 

Когда оно отрабатывает, проверять содержимое input и, если оно в массиве отсутствует, то записывать в массив, 
иначе выдавать сообщение, что такое имя уже есть в базе

с помощью регулярного выражения убедиться, что пользователь ввёл только буквы. Для кириллицы проверка [А-ЯЁа-яё] */

/* let nameArr = [];
let fieldName = document.querySelector("input");
let pattern = /^[А-ЯЁа-яё]+$/;

fieldName.addEventListener("change", function readInput() {
  if (pattern.test(fieldName.value)) {
    console.log("NAME IS CORRECT");
  } else {
    console.log("ENTER CORRECT NAME");
    return false;
  }
  if (nameArr.indexOf(fieldName.value) === -1) {
    nameArr.unshift(fieldName.value);
    console.log("ELEMENT IS ADDED");
    console.log(nameArr);
  } else {
    console.log("ELEMENT EXISTS IN DB");
    return false;
    // console.log(nameArr);
  }
}); */

/* let nameArr = [];
let fieldName = document.querySelector("input");
let pattern = /^[А-ЯЁа-яё]+$/;

fieldName.addEventListener("change", function readInput() {
  if (pattern.test(fieldName.value)) {
    for (let i = 0; i <= nameArr.length; i++) {
      if (fieldName.value == nameArr[i]) {
        console.log("THE NAME ALREADY PRESENT IN THE DB");
        return false;
      }
    }

    nameArr.push(fieldName.value);
    console.log(nameArr);

    fieldName.value = "";
  } else {
    console.log("ENTER YOUR NAME USING CYRILLIC ALPHABET");
  }
});
 */

//----------------------------------------------------------------------------------------------------------------------------------------------------------

/* 
7. Есть HTML

<p>Ваша задолженность составляет 1000 грн</p>

Необходимо найти в нём число и выделить его жирным шрифтом, то есть обрамить тегом <b></b> или <strong></strong>.
 И перезаписать отображаемый абзац с обычным текстом, на новый абзац. 
 Предлагаю вспомнить свойство innerHTML и также применить функцию replace(), которая может использовать регулярки. 
 */


let pattern = /10{0,}/g;
let paragraph = document.getElementsByTagName("p").item(0);

paragraph.innerHTML = paragraph.textContent.replace(pattern, '<b>' + paragraph.textContent.match(pattern) + '</b>');
