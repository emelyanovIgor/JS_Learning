// JS_7 *******************

// ****************************


//const btn = document.querySelector('button');

/* btn.onclick = function(){
    alert('Bye!');
} */

/* btn.addEventListener('click', function(){
    alert('EventListener!');
}) */;



// ****************************
//случайный цвет кнопки при клике

/* btn.addEventListener('click', function(){ 
    // this.style.backgroundColor = 'green';
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${red}, ${green},${blue})`;
}); */



// ****************************

/* const btn = document.querySelector('button');
// click
btn.addEventListener('click', function(){
    console.log('click');
});
// doubleClick
btn.addEventListener('dblclick', function(){
    console.log('dblclick');
});
 */


// ****************************
// const btn = document.querySelector('BUTTON');
/* btn.addEventListener('contextmenu', function(event){
    console.log(event);
}); */

/* btn.addEventListener('mousedown', function(event){
    console.log(event.type);
});

btn.addEventListener('mouseup', function(event){
    console.log(event.type);
}); */

 
// ****************************
//изменение цвета при перемещении курсора мыши
/* document.body.width = '1024px';
document.body.hight = '100px';

document.body.addEventListener('mousemove',  changeColor);

function changeColor(event){
document.body.style.backgroundColor = `rgb(${event.clientX  / 4}, 0, 0)`;
} */


// ****************************

/* 
const input = document.querySelector('input');
const p = document.querySelector('p');


input.addEventListener('keyup', function(event){
    p.textContent = this.value
});
 */

 // ****************************
/*  const input = document.querySelector('input');
 input.addEventListener('focus',  function(){
     this.setAttribute('class', 'normal')

 });

 input.addEventListener('blur',  function(){
     if (this.value){
        this.setAttribute('class', 'correct')
     }else{
        this.setAttribute('class', 'error')
     }

}); */


 // ****************************

/*  const a = document.getElementsByTagName('a').item(0);
 a.addEventListener('click', function(event) {
     event.preventDefault();
     location.href = 'http://dark-world.ru/'
 }); */


  // ****************************
  const div = document.querySelector('DIV');
  const p = document.querySelector('P');
  const span = document.querySelector('SPAN');

  div.addEventListener('click', function(event) {
      console.log('DIV');

  });
  
  p.addEventListener('click', function(event) {
    console.log('P');

  }, true);
  
  span.addEventListener('click', function(event) {
    event.stopPropagation();
    console.log('SPAN');

  });