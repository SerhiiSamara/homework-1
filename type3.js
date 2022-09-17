// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getPriceInfo() {
//     return `${this.name} costs ${this.price}`;
//   }
// }

// class Meal extends Product {
//   constructor(name, price) {
//     super(name, price);
//   }

//   setDiscount(discoumt) {
//     return (this.discoumt = discoumt);
//   }

//   getDiscount() {
//     const bill = this.price * this.discoumt;
//     return bill;
//   }
// }

// class Drink extends Product {
//   constructor(alk) {
//     this.alk = alk;
//   }
// }

// const mango = new Product("Mango", 200);
// console.log(mango.getPriceInfo());

// const gaspacho = new Meal("Gaspacho", 300);
// console.log(mango);
// console.log(gaspacho);

// console.log(gaspacho.setDiscount(0.1));
// console.log(gaspacho.getDiscount());

// const nums = [-90, 45, 0, 16, -18, 24, -67, 43];

// function culculateMinusPlus(array) {
//   return array.reduce(
//     (acc, item) => {
//       if (item > 0) {
//         return { plus: acc.plus + item, minus: acc.minus };
//       } else {
//         return { plus: acc.plus, minus: acc.minus + item };
//       }
//     },
//     { plus: 0, minus: 0 }
//   );
// }

// console.log(culculateMinusPlus(nums));

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = body.firstElementChild;
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const listItems = list.children;
// console.log(listItems);
