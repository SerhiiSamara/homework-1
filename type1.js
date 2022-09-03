// Imagine you are in a universe where you can just perform the following arithematic operations. Addition(+), Subtraction(-), Multiplication(*), Division(/). You are given given a postfix expression. Postfix expression is where operands come after operator. Each operator and operand are seperated by a space. You need to evaluate the expression.

// For example: 25 45 + is equivalent of 25 + 45, hence the answer would be 70. Instead if you are given 20 40 + 60 *, it is equivalent of (20+40) * 60, hence the answer should be 3600. 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.

// Create a method 'evaluate' that takes a string as input and returns a long resulted in the evaluation. Just concentrate on happy paths. Assume that expression is always valid and division is always an integer division.

// https://www.codewars.com/kata/577e9095d648a15b800000d4/train/javascript

// function postfixEvaluator(string) {
//   let total;
//   const arr = string.split(" ");
//   console.log(arr);

//   if (arr.length === 1) {
//     total = arr[0];
//     console.log(total);
//     return;
//   }

//   if (arr.length === 2) {
//     console.log("Invalid subscription type");
//   }

//   for (let i = 0; i <= arr.length - 1; i += 1) {
//     if (i < -1) {
//       return;
//     }

//     let a = Number(arr[i]);
//     let b = Number(arr[i + 1]);
//     let c = !Number(arr[i + 2]);

//     if (a && b && c) {
//       switch (arr[i + 2]) {
//         case "+":
//           total = a + b;
//           break;

//         case "-":
//           total = a - b;
//           break;

//         case "*":
//           total = a * b;
//           break;

//         case "/":
//           total = (a - (a % b)) / b;
//           break;

//         default:
//           console.log("Invalid subscription type");
//       }

//       arr[i] = total;
//       arr.splice(i + 1, 2);
//       i -= 2;
//     }
//   }
//   console.log(total);

//   return total;
// }

// postfixEvaluator("-1");

// -------------------Не сошлись два ответа. Не понял их результат.------------------------
