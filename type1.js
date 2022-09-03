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
