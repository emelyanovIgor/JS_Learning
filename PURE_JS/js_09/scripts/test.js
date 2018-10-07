var animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

var rabbit = new Rabbit("Кроль"); //  rabbit.__proto__ == animal

class Rabbit1 {
    eats = true;
    constructor(name) {
        this.name = name;
        this.eats = name;
    }

}
Rabbit1.eats;
let r1 = new Rabbit1('adasfdafs');
let r2 = new Rabbit1('agffjs');
r1.eats !== r2.eats;
r1.name !== r2.name;


var obj = {
    x: 1
}
obj.x;