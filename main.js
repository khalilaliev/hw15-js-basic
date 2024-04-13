"use strict";

/// Level 1 ///

// -task-1- //

function showDelay(msg) {
  setTimeout(() => {
    console.log(msg);
  }, 1000);
}

showDelay("Hello world!");

// -task-2- //

function repeat(msg) {
  const idOfInterval = setInterval(() => {
    console.log(msg);
  }, 2000);
  setTimeout(() => {
    clearInterval(idOfInterval);
  }, 6000);
}

repeat("Hello from task 2!");

// -task-3- //

function repeat(msg) {
  let id = setTimeout(() => {
    console.log(msg);
    id = setTimeout(repeat, 1000);
    clearTimeout(id);
  }, 1000);
}
repeat("Hello from recursive setTimeout!");

// -task-4- //

function boom(count) {
  const boomInterval = setInterval(() => {
    if (count > 0) {
      console.log(count--);
    } else if (count === 0) {
      console.log("Boom!!");
      clearInterval(boomInterval);
    }
  }, 1000);
}
boom(5);

/// Level 2 ///

const sayHi = () => console.log("Hello from task level 2!");

const delay = (fn, sec) => {
  return () => setTimeout(fn, sec * 1000);
};

const delayedSayHi = delay(sayHi, 5);
sayHi();
delayedSayHi();

/// Level 3 ///

// -task-1- //

class Timer {
  constructor() {
    this.count = 0;
    this.id = null;
  }
  start() {
    this.id = setInterval(() => {
      if (this.id !== null && this.id !== undefined) {
        console.log("Counter:", ++this.count);
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.id);
    this.count = 0;
  }
  pause() {
    clearInterval(this.id);
    console.log("Paused");
    // setTimeout(() => {
    //   // this.start;
    // }, 2000);
  }
  show() {
    console.log(`Timer resetted ${this.count}`);
  }
}

const timer = new Timer();
timer.start();

setTimeout(() => {
  timer.pause();
}, 5000);

setTimeout(() => {
  timer.start();
}, 7000);

setTimeout(() => {
  timer.stop();
  timer.show();
}, 9000);

// Level 3 //

const customers = {
  "Katy Perry": [
    { name: "Borsh", time: 5000 },
    { name: "Vareniki", time: 1000 },
    { name: "Uzvar", time: 500 },
  ],
  "Cristiano Ronaldo": [
    { name: "Soup", time: 7000 },
    { name: "Porridge", time: 1000 },
    { name: "Water", time: 100 },
  ],
  "Jason Statham": [
    { name: "Fried potatoes", time: 6000 },
    { name: "Steak", time: 10000 },
    { name: "Juice", time: 100 },
  ],
};

function cook(customers) {
  for (const customerName in customers) {
    const dishes = customers[customerName];
    const time = dishes.reduce((max, dish) => {
      return dish.time > max.time ? dish : max;
    }, dishes[0]).time;

    setTimeout(() => {
      const dishesName = dishes.map((dish) => dish.name).join(", ");
      console.log(
        `Dear visitor ${customerName}, your dishes ${dishesName} are ready to be served!`
      );
    }, time);
  }
}
cook(customers);
