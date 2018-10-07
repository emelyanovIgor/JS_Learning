/* 1.Есть такой код:
<button>Button</button>

const btn = document.getElementsByTagName("button").item(0);
const exp = 2;
let number = 10;

btn.addEventListener("click", function(){ 	
	  number = Math.pow(number, exp);
    new Array(number);
    console.log(number);    
});

если нажимать на кнопку слишком много раз, то мы создадим массив слишком большого размера 
(если помните, то я говорил, что у массивов есть ограничение на размер в 4 с копейками млрд элементов). 

Задача - отловить нашу исключительную ситуацию, правильно обернув нужные моменты в try/catch/finally
 */

//***********************************************************

/* const btn = document.getElementsByTagName("button").item(0);
const exp = 2;
let number = 10;

btn.addEventListener("click", function() {
  // try { 
  //   number = Math.pow(number, exp);
  //   new Array(number);
  //   console.log(number);
  // } catch (error) {
  //   console.log("РАЗМЕР МАССИВА БОЛЕЕ 4 млрд. ЭЛЕМЕНТОВ !!! \n \n" + error);
  // } finally {
  //   console.log("МАССИВ МОЖЕТ БЫТЬ ПЕРЕПОЛНЕН, НЕ НАЖИМАЙТЕ КНОПКУ БОЛЕЕ 3 РАЗ! \n");
  // }
    try {
      number = Math.pow(number, exp);
      new Array(number);
    } catch (error) {
      console.log(error);
    } finally {
      console.log(number);
    }
  }); */

//***********************************************************

/* 2.Для этого кода: 
<input/>

const inp = document.getElementsByTagName("input").item(0);
inp.addEventListener("change", function(){
	
});

сделать так, чтобы через 5 секунд после срабатывания события "change" через alert() выводился текст, который мы ввели в input. 
Подсказка - используйте setTimeout().
Почитайте, при каких условиях работает "change" для input. */

/* const inp = document.getElementsByTagName("input").item(0);
inp.addEventListener("change", function() {
  setTimeout(() => {
    alert(this.value);
  }, 5000);
}); */

//***********************************************************

/* 3.Для вот такого кода: 
<input/>

inp.addEventListener("change", function(){
	setTimeout(function(){  	
    	console.log("слишком мало букв");    
  }, 5000);	
});

сделать проверку: если пользователь ввёл 10 или больше 10-ти символов, то СРАЗУ выводить сообщение, что он молодец и обрывать выполнение setTimeout().
Если он ввёл меньше 10-ти символов, то через 5 секунд ему выведет информацию, что слишком мало букв. */

//***********************************************************

const inp = document.getElementsByTagName("input").item(0);

inp.addEventListener("change", function(){
let numberOfLetters = setTimeout(function(){  	
    	console.log("Слишком МАЛО букв!");    
  }, 5000);	
  
  if (inp.value.length >= 10) {
      console.log("МОЛОДЕЦ!"); 
      clearTimeout(numberOfLetters);
  }
});



//***********************************************************

/* 4.Есть такой код:

const btn = document.getElementsByTagName("button").item(0);
let counter = 0;

btn.addEventListener("click", function(){

	setInterval(function(){
  	counter++;
		console.log("Прошло " + counter + " секунд");
  }, 1000);
  
});

При нажатии на кнопку в консоли выводится информация о том, сколько прошло секунд с момента нажатия.
Сделать так, чтобы на 10-й раз setInterval() завершил свою работу.
Напомню, для остановки есть clearInterval(), нужно применить его правильно */

//***********************************************************

/* const btn = document.getElementsByTagName("button").item(0);
let counter = 0;

btn.addEventListener("click", function() {
  setInterval(function() {
    if (counter === 10) {
      clearInterval();
    } else {
      counter++;
      console.log("Прошло " + counter + " секунд");
    }
  }, 1000);
}); */

/* const btn = document.getElementsByTagName("button").item(0);
let counter = 0;

btn.addEventListener("click", function() {
  console.log("START");
  const int = setInterval(function() {
    counter++;
    console.log("Прошло " + counter + " секунд");
    if (counter == 10) {
      clearInterval(int);
      console.log("STOP");
    }
  }, 1000);
}); */

//***********************************************************
/* 
 5.Есть такой код:

примитивная, но по-своему забавная попытка создать эффект дождя) вроде прикольно смотрится, но даже у меня на достаточно мощном 
компьютере начинает подвисать, если нажать несколько раз на кнопку RAIN.
А всё потому, что у меня один setInterval вызывается в другом при каждом клике. 
И каждый из интервалов создаёт элемент div к каждому из которых присваиваются стили.
выходит, что 10 кликов запустят 10 интервалов, а они породят по 100 интервалов в секунду. 
Даже боюсь запускать это с телефона.

соответственно нужно переделать:
а) добавить кнопку STOP, которая бы очищала наш интервал под названием rain
б) клик на кнопку RAIN удаляет слушатель на этой кнопке, чтобы она не срабатывала несколько раз. 
Кнопка STOP добавляет слушатель кнопке RAIN
в) можно попробовать сделать предварительное создание всех div-ов, чтобы они создавались не на ходу */

/* const html = document.getElementsByTagName("html").item(0);
const btn = document.getElementById("btn");
//my
const btnStop = document.getElementById("btnStop");

const div = document.getElementById("rain_container");
const COLOR = (function() {
  return {
    red: function() {
      return Math.floor(Math.random() * 255);
    },
    green: function() {
      return Math.floor(Math.random() * 255);
    },
    blue: function() {
      return Math.floor(Math.random() * 255);
    }
  };
})();

btn.addEventListener("click", rain);
//my
btnStop.addEventListener("click", rainStop);

function getColor() {
  const white = Math.floor(Math.random() * 100 + 155);
  return "rgb(" + white + ", " + white + ", " + white + ")";
}

function makeRain() {
  const styles = {
    width: "2px",
    height: "12px",
    position: "absolute",
    top: Math.floor(Math.random() * -100) + "px",
    left: Math.floor(Math.random() * 1300) + "px",
    backgroundColor: getColor(),
    display: "none"
  };

  let drop = new makeDrop();
  const interval = setInterval(function() {
    let pos = parseFloat(drop.style.top);
    if (pos > -100 && pos < 1250) {
      drop.style.display = "block";
      drop.style.top = pos + 5 + "px";
    } else if (pos <= -100) {
      drop.style.top = pos + 5 + "px";
    } else {
      drop.style.top = pos + "px";
      div.removeChild(drop);
      drop = null;
      clearInterval(interval);
    }
  }, 10);

  function makeDrop() {
    const drop = document.createElement("div");
    for (let prop in styles) {
      drop.style[prop] = styles[prop];
    }
    div.appendChild(drop);
    return drop;
  }
}

function rain() {
  goRain = setInterval(function() {
    makeRain();
  }, 10);
  btn.removeEventListener("click", rain);
  btnStop.addEventListener("click", rainStop);
}

function rainStop() {
  clearInterval(goRain);

  btn.addEventListener("click", rain);
  btnStop.removeEventListener("click", rainStop);
} */
