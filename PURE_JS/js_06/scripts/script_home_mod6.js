/* 1. 

<div>
<div>
<p>One</p>
<p>Two</p>
</div>
<div>
<p>abc</p>
<p>DEF</p>
</div>
</div>

Необходимо найти и вывести через console.log() 2й абзац, т.е. <p>Two</p>. 
Менять разметку нельзя, т.е. нельзя добавлять в неё классы или id или ещё что-то. 
Пользуйтесь методами getElementsByTagName или querySelector, а также их свойством children. 
Не забывайте, что некоторые из методов вернут массив, а значит доступ к результату должен быть через квадратные скобки и индекс. */

/* let paragraph = document.getElementsByTagName("P");
console.log(paragraph[1]);
 */



//***********************************************************************

/* 2. В той же разметке с теми же условиями сделайте текст абзаца <p>abc</p> в верхнем регистре, 
чтобы "abc" превратилось в "ABC". 
Т.е. в итоге абзац станет <p>ABC</p>. 
Для этого дополнительно воспользуйтесь свойствами textContent или innerHTML. 
Вспоминает, как у строк менять регистр. */


/* let paragraph = document.getElementsByTagName("DIV")[2].children[0];
let register = (paragraph.innerHTML).toUpperCase();
paragraph.innerHTML = register;

console.log(register);
 */



//***********************************************************************

/* 3. Есть разметка:
<div>
<div>
<p id="one" class="two">One</p>
<p class="two">Two</p>
</div>
<div>
<p id="four">Four</p>
<p name="five">Five</p>
</div>
</div>

Найти и вывести в консоль текст элемента с id="four" */


/* let four = document.getElementById("four");
console.log(four.textContent); */




//***********************************************************************

/*  4. Элементам с классом "two" поменять размер шрифта на "30px". 
 Какое свойство меняет шрифт можете просто загуглить, мы им не пользовались */

/* let paragraph = document.getElementsByClassName("two");
for (let i = 0; i < paragraph.length; i++) {
	console.log(paragraph[i].outerHTML);
	let font = paragraph[i].style.fontSize = '30px';
}
 */


//***********************************************************************
// 5. Элементу(ам) с name="five" изменить цвет текста на красный

/* let paragraph = document.getElementsByName('five');

for (let i = 0; i < paragraph.length; i++) {
	let fiveToRed = paragraph[i].style.color = 'red';
	console.log(fiveToRed);
}
 */




//***********************************************************************
/* 6. Как вы заметили, для красоты не хватает элемента с текстом "Three". 
Создайте такой абзац и вставьте после <p class="two">Two</p>. */


/* let divFind = document.getElementsByTagName('div')[1];
let createParagraph = document.createElement('p');

createParagraph.textContent = 'Three';
divFind.appendChild(createParagraph);

console.log(divFind); */







//***********************************************************************
/* 7. Поменяйте фон этих абзацев
<p id="four">Four</p>
<p name="five">Five</p>
на жёлтый. 
Для этого найдите их родительский "div" и меняйте фон его дочерним элементам. */


/* let divFour = document.getElementsByTagName('DIV')[2];
let fourToRed = divFour.style.backgroundColor = 'yellow'; */
// console.log(divFour);


/* let divFour = document.getElementsByTagName('DIV')[2];
// let fourToRed = divFour.style.backgroundColor = 'yellow';
let children = divFour.children;
// console.log(children);

for (let i = 0; i < children.length; i++) {
	childrenToYellow = children[i].style.backgroundColor = 'yellow'
	console.log(children[i]);
} */
