// JS_9 *******************

// ***************************************
/* const Car = {
  weight: 1000,
  color: 'black',
  carType: 'sedan',
  brand: 'Lada',
  price: 0,
  getInfo: function(){return this.price}
}
Car.price = 100;
Car.getInfo = function(){return this.brand} //перезаписали price

console.log(Car.getInfo()); */

// ***************************************

/* const Car = {
  weight: 1000,
  color: 'black',
  carType: 'sedan',
  brand: 'Lada',
  price: 0,
};

const Bus = Object.create(Car);
Bus.move = function(speed) {
  console.log('Я еду со скоростью ' + speed);
};

Bus.move(100);
Car.move(50);
 */

// ***************************************
// CALL|APPLY
/* const Car = {
  weight: 1000,
  color: 'black',
  carType: 'sedan',
  brand: 'Lada',
  price: 0,
  move: function(speed) {
  console.log(this.brand);
  console.log('Я еду со скоростью ' + speed);
}
};

const Bus = {
  weight: 8000,
  color: 'white',
  carType: '',
  brand: 'Bogdan',
  price: 0,
  capacity: 60
};

Car.move.call(Bus, 50);
Car.move.apply(Bus, [50]); */

// ***************************************
/* function User(name){
this.userName = name; 
}
// console.log(new User('Ivan').userName);

const user1 = new User ('Ivan');
const user2 = new User ('Alexander');

// console.log(user1.userName);
// console.log(user2.userName);

function greeting(message, time) {
  console.log(`${message} ${time}, ${this.userName}${'.'}`);

}
greeting.apply(user1, ['Good', 'day']); */

// ***************************************
// BIND

/* const Films = {
  videos:['Die Hard', 'Inception', 'Godzilla'],
  watch: function(){
    console.log('I\'AM WATCHING ' + this.videos[2] + ' MOVIE!');
  }
}

const btn = document.querySelector('button');
// btn.videos = ['Die Hard', 'Inception', 'Godzilla']   //так никто не делает
btn.addEventListener('click', Films.watch.bind(Films)); */

// ***************************************
/* function Worker(position) {
  const salary = 5000;

  this.myPosition = position; 
  this.saySalary = function(requester) {
    if (requester == "wife") {
      return salary / 5;
    }
  };
}

function Manager(position){
  Worker.apply(this, [position]);
  this.manage = function(){
    return `I\'AM MANAGER ON ${this.myPosition}`; 
  }; 
}

const manager1 = new Manager('CE O');
console.log(manager1.manage());
 */

// ***************************************
// PROTOTYPE

/* function Animal () {
  console.log('NEW ANIMAL WAS CREATED');
  console.log(++Animal.prototype.counter);
}

Animal.prototype.counter = 0;

Animal.prototype.sleep = function(){
  console.log('SLEEPING');
}

const cat1 = new Animal ();
const cat2 = new Animal (); */

// ***************************************
/* function Animal () {
  console.log('NEW ANIMAL WAS CREATED');
}

Animal.prototype.sleep = function(){
  console.log('SLEEPING');
}

function Cat() {
  console.log('NEW CAT WAS CREATED');
}

Cat.prototype = Object.create(Animal.prototype);

const myCat = new Cat();
myCat.sleep();  */


// ***************************************
// ES6

/* class Food  {
  constructor(caloricity){
    this._calories = caloricity;

  }
  info(){
    console.log(this._calories);
  }
}

const beef = new Food(200); 
// beef.info();
console.log(beef.calories); */

// ***************************************
/* class Food  {
  constructor(caloricity){
    this.calories = caloricity;

  }
  info(){
    console.log(this.calories);
  }
}

class Fruit extends Food {
  constructor(caloricity){
    super(caloricity);//вызов конструктора родителя

  }
}
const apple = new Fruit(100);
apple.info() 
 */

// ***************************************
// GET SET

class Worker {
  constructor() {
    this.s = 0;
  }
  get salary() {
    return this.s / 5;
  }
  set salary(a) {
    this.s = a;
  }
}

const myWorker = new Worker();
myWorker.salary = 1000;
console.log(myWorker.salary);
