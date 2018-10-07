// JS_8 *******************

// ****************************

// funtion(){} SyntaxError

// ****************************

// console.log(a); ReferenceError
// var a  = 100;

// ****************************

/* var foo = 100; TypeError
foo(); */

// ****************************

//new Array(100000000000); RangeError значение массива больше чем макс. (макс = 10 в 32 степени)

// ****************************
//window.onerror

/* window.onerror = function(message, url, line) {
    console.log('WAS ERROR');
    console.log(message);
    console.log(url);
    console.log(line);

    return true;
}
foo();
console.log('TEXT');  */


// ****************************
//try/catch/finally

/* try {
  foo();
} catch (error) {
  console.log(error);
} finally {
  console.log("FINALLY");
}

console.log("TEXT"); */

// ****************************

/* function Database() {}

Database.prototype.connect = function(name) {
    if (name != 'mybase')
    throw  name + ' db is not found';
};

Database.prototype.close = function() {
    console.log('closed');
	
};

const database = new Database();
const dbname = 'products';


try {
	database.connect('products');
} catch(e) {
	console.error(e);
} finally {
	database.close();
}


console.log('TEXT'); */

// ****************************

/* function Database() {
    console.log('DB object was created');
}
 
Database.prototype.connect = function (name) {
    if (name != 'pirogy') {
        throw new ReferenceError(name + ' database is not found');
    }
};

Database.prototype.close = function () {
    console.log('conection was closed');
};

const database = new Database();

try {
    database.connect('bulochki');

} catch{
    console.log(e);
} finally {
    database.close();
}

console.log('FINISH'); */

// ****************************

/* const element = document.createElement('div');

try {
    try {
        element = 'div';
    } catch (e) {
        if (e instanceof TypeError) {
            throw 'Assignment to constant'
        }
    } finally {
        console.log('finally');
    }
    console.log('after finally');
} catch (e) {
    console.log(e);
} */

// ****************************
// Date()

/* const myDate = new Date();
console.log(myDate); */

// смотрим время выполнения скрипта
/* const myDate1 = Date.now(); //время в милисекундах

for(let i = 0; i < 1000; i++) {
    const element = document.createElement('div');
    document.body.insertBefore(element, document.body.children[0]);
}

const myDate2 = Date.now();
console.log(myDate2 - myDate1); */

/* const myDate1 = new Date(2000, 0).getTime(); //время в милисекундах между 01.01.2000 и 01.01.1970
console.log(myDate1);
 */

/* const myDate1 = new Date(2018, 8, 3);//03.09.2018
console.log(myDate1); */

/* const myDate1 = new Date(2018, 7, 24);//когда было 24 июля в 2018
console.log(myDate1.getDay());
 */

/* const myDate1 = new Date(2018, 7, 24).getDay();
switch (myDate1) {
   case 1:
   case 2:
   case 3:
   case 4:
   case 5:
       console.log('GO TO THE WORK');
       break;
   case 0:
   case 6:
       console.log('DAY OFF');
       break;
}
*/

// ****************************
// setTimeout(), setInterval()

/* let start = Date.now();
let finish = 0;

setTimeout(() => {
    finish = Date.now();
    console.log(finish - start);
}, 1000);

setTimeout(() => {console.log(2)},  );

console.log(3); */

/* setTimeout(function(a) {
    console.log('TEXT')
    console.log('a')

}, 3000, 10); */

// задежка выполнения - 1, потом 2
/* setTimeout(function () {
    console.log('1');

    setTimeout(function () {
        console.log('2');
    }, 1000);

}, 1000); */

/* const test = setTimeout(function () {
    console.log('ПРОХОДИТЕ');
}, 1000);

const userAge = +prompt();

if (userAge < 18) {
    clearTimeout(test);
} */

// двигающийся квадрат

/* const div = document.createElement('DIV');
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'blue';
div.style.position = 'absolute';
div.style.left = '0px';

const interval = setInterval (function() {
   let x = parseInt(div.style.left); 
    if (x > 200) {
        clearInterval(interval);
    } else {
        x += 10;
    }
    div.style.left = x + 'px';
}, 1000);

document.body.appendChild(div);
 */

// ****************************
//callback hell

/* function foo(cb) {
  return cb();
}

foo(function() {
  console.log("ПРИШЁЛ НА МЕДОСМОТР");
  const today = new Date("August 30, 2018 09:15:00").getDay();
  if (today >= 1 && today <= 5) {
    setTimeout(function() {
      console.log("ВЗЯЛ КАРТОЧКУ");
      setTimeout(function() {
        console.log("ПРОШЁЛ ЛОРА");
        setTimeout(function() {
          console.log("ПРОШЁЛ ОКУЛИСТА");
          setTimeout(function() {
            console.log("ПРОШЁЛ ПСИХИАТРА");
            setTimeout(function() {
              console.log("ГОДЕН");
            }, 2000);
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }
});
 */

// ****************************
//Promise()

/* const promise = new Promise((resolve, reject) => {
  console.log("ПРИШЁЛ НА МЕДОСМОТР");
  const today = new Date("August 30, 2018 09:15:00").getDay();

  if (today >= 1 && today <= 5) {
    resolve();
  }

  reject();
});
promise
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log("ВЗЯЛ КАРТОЧКУ");
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log("ПРОШЁЛ ЛОРА");
        resolve();
      }, 2000);
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        console.log("ГОДЕН");
        resolve();
      }, 2000);
    });
  })

  .catch(err => {
    console.log(err);
  });
 */

/* new Promise(function(good, bad) {
  console.log("hi1");
  setTimeout(function() {
    if (confirm("are you okay?")) {
      good();
    }

    bad();
  }, 1000);
})
  .then(function() {
    return confirm("go to drink?");
  })
  .then(function(answer) {
    console.log(answer);
  })
  .catch(function(err) {
    console.log(err);
  });

console.log("hi2"); */



new Promise(function(ok, notOk) {
  setTimeout(function() {
    if (confirm("How are you?")) {
      ok();
    }
    notOk();
  }, 1000);
}).then(
  function() {
    console.log("GO DRINK BEER");// отработает для ok
  },
  function() {
    console.log("GO DRINK VODKA");//отработает для notOk
  }
);
