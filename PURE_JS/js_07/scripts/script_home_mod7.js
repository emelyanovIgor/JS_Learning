{/* <div>
<div class="colorText">
<button>Button</button>
<p id="paragraph1">I am just paragraph</p>
</div>
<div>
<input/>
</div>
</div> */}

// 1. При клике на кнопку изменить размер шрифта абзаца до 50px.


/* const button = document.getElementsByTagName('BUTTON')[0];
const paragraph = document.getElementById('paragraph1');

button.addEventListener('click', function () {
	paragraph.style.fontSize = '50px';
	console.log('I am BIG paragraph!');
});
 */




// *****************************************************************
/* 2. При наведении указателя мыши на кнопку менять текст кнопки на "Наведён курсор". 
Если мы указатель уводим, то возвращать изначальный текст кнопки. 
Текст, который был там изначально получить в виде переменной из реального текста кнопки,
 а не просто написать "Кнопка". Посмотрите в сторону события 'mouseover' */

/* const button = document.getElementsByTagName('BUTTON')[0];

button.addEventListener('mouseover', function () {
	button.innerHTML = 'Наведён курсор';
});
button.addEventListener('mouseout', function () {
	button.innerHTML = 'Button';
});
 */


// *****************************************************************
/* 3. Имитируем примитивную проверку правильности ввода email адреса. 
Для поля "input" навесить слушатель на событие blur и проверять, если среди введённых символов нет символа "@", 
то через alert() вывести предупреждение, а если символ есть, то ничего не выводим. 

В идеале, если мы снова поменяем текст и там не будет @, то опять выводить alert().
Проверку значения символа можно сделать через indexOf или регулярным выражением.
Также можно воспользоваться событием change - посмотрите, какие условия его выполнения */

/* const button = document.querySelector('input');

button.addEventListener('blur', function () {
	let inputText = this.value

	if (inputText.length == 0) {
		alert('Ничего не введено');
		return false;
	}
	if (inputText.indexOf('@') < 1) {
		alert('Не введен @');
		return false;
	}
}); */




// *****************************************************************
/* 4. Через слушатели "focus" и "blur" менять фон input. 
Например сделать #69F0AE при фокусе и #FF8A80 при потере фокуса.
*/

/* const button = document.querySelector('input');
console.log(button);

button.addEventListener('focus', function () {
	button.style.backgroundColor = '#69F0AE';
});
button.addEventListener('blur', function () {
	button.style.backgroundColor = '#FF8A80';
});
 */





// *****************************************************************
/* 5. При клике на кнопку запускается функция prompt(), которая спрашивает имя пользователя. 
После ввода имени, создаётся абзац, в текст которого записывается имя и этот абзац вставляется ПЕРЕД кнопкой. 
Если пользователь ввёл слово "Stop" или "Escape" в любом регистре, то слушатель события клика по кнопке пропадает.

Слушатели событий можете добавлять разными способами: прямо в разметку через onclick, onfocus, в размету через <script>. 
Или по-разному, чтобы закрепить все варианты.
Для удаления события нужен removeEventListener, погуглите, как он работает */

const button = document.getElementsByTagName('BUTTON')[0];
let paragraph = document.createElement('P');

button.addEventListener('click', askName);

function askName() {
	let name = prompt('Enter your name, please', 'Your name');
	paragraph.textContent = name;
	document.body.insertBefore(paragraph, button);
	if (name.toUpperCase() == "STOP" || name.toUpperCase() == "ESCAPE") {
		button.removeEventListener('click', askName);
	}
}

