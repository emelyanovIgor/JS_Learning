// 3. Создать класс Car у которого будут описанные через this поля model, engineVolume, horsePower (модель, объём двигателя, лошадиные силы).
// Значения полей присваивать при создании экземпляра, как это было с примерами выше:
//     var myCar = new Car ("Kopeyka", 1.2, 60);
// также создать переменную скорости this.speed и присвоить ей 0 и this.speedLimit = 140 для ограничения скорости.
//     Среди методов описать info(), move(), stop(), signal().

// *info() выводит на экран 3 переданные характеристики автомобиля.
// *каждый вызов метода move() должен увеличивать текущую скорость данного экземпляра на 50, но не больше, чем лимит.
// Если мы превышаем лимит, то скорость равна лимиту. Выводить на экран текущую скорость
// *stop() делает скорость равной нулю
// *signal() принимает аргументом звук сигнала и количество гудков и через цикл выполняет эти гудки.

class Car {
  constructor(model, engineVolume, horsePower) {
    this.model = model;
    this.engineVolume = engineVolume;
    this.horsePower = horsePower;
    this.speed = 0;
    this.speedLimit = 140;
  }

  // *каждый вызов метода move() должен увеличивать текущую скорость данного экземпляра на 50, но не больше, чем лимит.
  // Если мы превышаем лимит, то скорость равна лимиту. Выводить на экран текущую скорость

  move() {
    this.speed += 50;
    if (this.speedLimit < this.speed) {
      this.speed = this.speedLimit;
    }
    console.log(this.speed);
  }

  info() {
    console.log(`${this.model}, ${this.engineVolume}, ${this.horsePower}`);
  }

  stop() {
    this.speed = 0;
    console.log(this.speed);

  }
  

  // *signal() принимает аргументом звук сигнала и количество гудков и через цикл выполняет эти гудки.

  signal(soundSignal, numberOfRings = 2) {
    while ((numberOfRings -= 1) >= 0) {
      console.log(soundSignal);
    }
  }

  signalTimeout(soundSignal, numberOfRings, timeout) {
    while ((numberOfRings -= 1) >= 0) {
      console.log(soundSignal);
    }
  }
}

let myCar = new Car("Kopeyka", 1.2, 60);
myCar.info();
myCar.move();
myCar.move();
myCar.move();
myCar.stop();
myCar.move();
myCar.move();
myCar.move();
myCar.signal("beep");
