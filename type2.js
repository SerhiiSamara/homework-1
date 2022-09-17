// const objC = {
//   z: 5,
// };

// const objB = Object.create(objC);
// objB.y = 2;

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objC);
// console.log(objB);
// console.log(objA);
// console.log(objB.y);
// console.log(objC.z);

// const objD = {
//   d: 5,
// };

// // new O bject();

// console.log(objD.__proto__ === Object.prototype);

const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const myCar = new Car({
  brand: "Audi",
  model: "Q3",
  price: "35000",
});
// console.log(Car);
// console.log(myCar);
// console.dir(Car);

// console.log(Car.prototype);

// Car.prototype.sayHi = function () {
//   console.log("Car.prototype.sayHi -> this", this);
//   console.log("Hello :)");
// };

// console.log(myCar);

// myCar.sayHi();

// const myCar2 = new Car({
//   brand: "BMW",
//   model: "X5",
//   price: "50000",
// });
// console.log(myCar2);

// const myCar3 = new Car({
//   brand: "Audi",
//   model: "A6",
//   price: "65000",
// });
// console.log(myCar3);

class Car1 {
  constructor({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

console.dir(Car1);

const carInstance = new Car1({
  brand: "Audi",
  model: "Q3",
  price: "35000",
});

console.log(carInstance);
