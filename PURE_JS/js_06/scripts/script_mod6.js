// JS_6 *******************

// ****************************

// .getElementById

/* 
const paragraph = document.getElementById('myId1') ;
console.log(paragraph);
 */

// ****************************

/* const paragraphs = document.getElementsByTagName('p') ;
for(let i = 0; i < paragraphs.length; i++){
    console.log(paragraphs[i]);
} */


// ****************************

// .item

/* const paragraphs = document.getElementsByTagName('p') ;
for(let i = 0; i < paragraphs.length; i++){
    console.log(paragraphs.item(i));
} */


// ****************************
// .getElementsByClassName

/* const containers = document.getElementsByClassName('class1');
// console.log(containers);
console.log(containers.item(0).children.item(1));//обращение к 1 из дочерних эл. коллекции containers
 */

/* const container = document.getElementsByClassName('class1').item(0);
// console.log(containers);
console.log(containers.children.item(1));//обращение к 1 из дочерних эл. коллекции containers
 */


// ****************************

//  querySelectorAll
//  querySelector

/*  const elements = document.querySelectorAll('div > p');
 console.log(elements); */

/*  const elements = document.querySelector('#myId');
 console.log(elements);
 */
/* const elements = document.querySelector('h1 + p');
console.log(elements);
*/
/* const elements = document.querySelectorAll('h1 ~ p');
console.log(elements); */



// ****************************
//  .childNodes
/* const container = document.getElementsByClassName('class1').item(0);
console.log(container.childNodes); */



// ****************************


/* const container = document.getElementsByTagName('DIV').item(0);
//  console.log(container);
// container.style.width = '100px';
container.addEventListener('click', getstyle);
function getstyle() {
   console.log(container.style.width = '100px'); //изменение ширины по клику на элемент
} */

/* const container = document.getElementsByTagName('DIV').item(0);

container.addEventListener('click', getStyle);

function getStyle() {
const container = document.getElementsByTagName('DIV').item(0);
    console.log(container.style.width);//по клику выводит ширину элемента 
} */


// ****************************
/* 
const container = document.getElementsByTagName('DIV').item(0);

container.addEventListener('click', changeWidth);

function changeWidth() {
const container = document.getElementsByTagName('DIV').item(0);
  let width = parseInt(container.style.width);
  width = width + 50 + 'px'; //увеличивает по клику ширину на 50px
  container.style.width = width;
} */

// ****************************


/* const divStyles = {
    width: '100px',
    height: '100px',
    border: '5px solid red',
    borderRadius: '50%'
};

const container = document.getElementsByTagName('DIV').item(0);

for(let key in divStyles) {
    container.style[key] = divStyles[key]; //рисуем круг
}
 */

// ****************************
//.getAttribute
//.setAttribute

/*  const divStyles = {
    width: '100px',
    height: '100px',
    border: '5px solid red',
    borderRadius: '50%'
};

const container = document.getElementsByTagName('DIV').item(0);

for(let key in divStyles) {
    container.style[key] = divStyles[key]; //рисуем круг
}

// container.setAttribute('class', 'newClass');//перезаписываем класс
container.setAttribute('class', container.getAttribute('class') + ' newClass'); //добавляем ещё один класс
console.log(container.getAttribute('class')); */



// ****************************
//.dataset

/* const div = document.querySelector('DIV');

console.log(div.dataset); */

/* 
const img = document.getElementsByTagName('img');

for (let index = 0; index < img.length; index++) {
    console.log(img.item(index).dataset.taste);
}
 */


// ****************************
//.textContent
//.innerHTML


// const p = document.getElementsByTagName('p'); 

/* const p = document.querySelector('p');//идентичный первой строчке

console.log(p.textContent);//содержимое р
console.log(p.innerHTML);// содержимое р вместе с внутренней разметкой
 */

/*  const p = document.querySelectorAll('p');//идентичный первой строчке

const text = p.item(0).textContent;
const formatedText = p.item(0).innerHTML;
p.item(1).textContent = text;//добавляем текст в пустой абзац
p.item(2).innerHTML = formatedText;//добавляем форматированный текст в пустой абзац
 */

// ****************************
 //.outerHTML
 //.appendChild
 //.parentElement
/* const husbandList = ['Пиво', 'Рыба', 'Сосиски'];
const wifeList = document.getElementsByTagName('li');

for(let i = 0; i < wifeList.length; i++){
    wifeList.item(i).textContent = husbandList[i];

}

const h3 = document.createElement('h3');
h3.textContent = 'Список продуктов';
const body = document.body;
//body.appendChild(h3);//добавляет элемент в конец
body.insertBefore(h3, wifeList.item(0).parentElement);//добавляет элемент в начало 

// console.log(wifeList.item(0).outerHTML);//позволяет видеть всё содержимое включая дочерние элементы */



// ****************************


const husbandList = ['Пиво', 'Рыба', 'Сосиски'];
const wifeList = document.getElementsByTagName('ol').item(0);

wifeList.removeChild(wifeList.children[1]);


