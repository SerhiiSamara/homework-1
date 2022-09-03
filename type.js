let cost;
const subscription = "pro";

switch (subscription) {
  case "pro":
    cost = 100;
  // break;

  case "premium":
    cost = 500;
  // break;

  case "free":
    cost = 0;
  // break;

  default:
    console.log("Invalid subscription type");
}

console.log(cost); // 500
