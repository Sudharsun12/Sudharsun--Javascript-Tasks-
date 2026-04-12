// 🧩 Task 1: E-commerce Cart System

let cart1 = [
  {name: "Shirt", price: 500},
  {name: "Shoes", price: 1500}
];

let cart2 = [
  {name: "Watch", price: 2000}
];

// Merge carts
let mergedCart = [...cart1, ...cart2];

// Add new product
mergedCart.push({name: "Bag", price: 1000});

// Remove last product
mergedCart.pop();

// Total price
let total = mergedCart.reduce((sum, item) => sum + item.price, 0);

console.log("Task 1:", mergedCart, "Total:", total);


// 🧩 Task 2: User Profile Management

let user = {
  name: "Naveen",
  role: "Trainee",
  salary: 20000
};

let update = {
  role: "Developer",
  salary: 50000
};

// Merge
let updatedUser = {...user, ...update};

// Destructure
let {name, role, salary} = updatedUser;

console.log(`Task 2: ${name} is now a ${role} earning ${salary}`);


// 🧩 Task 3: Team Score System

function teamScore(teamName, ...scores) {
  let total = scores.reduce((a, b) => a + b, 0);
  let highest = Math.max(...scores);

  console.log("Task 3:");
  console.log("Team:", teamName);
  console.log("Scores:", scores);
  console.log("Total:", total);
  console.log("Highest:", highest);
}

teamScore("Warriors", 50, 60, 70);


// 🧩 Task 4: Nested Data Extraction

let apiData = {
  user: {
    name: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
};

let {
  user: {
    name: userName,
    address: { city, pincode }
  }
} = apiData;

console.log(`Task 4: ${userName} lives in ${city} - ${pincode}`);


// 🧩 Task 5: Array Dashboard

let users = ["A", "B", "C", "D", "E"];

// Remove C & D and add X, Y
users.splice(2, 2, "X", "Y");

// First 3 users
let firstThree = users.slice(0, 3);

// Check B
let hasB = users.includes("B");

// Index of E
let indexE = users.indexOf("E");

console.log("Task 5:", users, firstThree, hasB, indexE);


// 🧩 Task 6: Data Cleaning Tool

let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

let cleanData = messyData.flat(Infinity).filter(
  item => item !== null && item !== undefined
);

console.log("Task 6:", cleanData);


// 🧩 Task 7: Sorting Bug Fix

let prices = [1000, 200, 50, 5000];

// Correct sort
prices.sort((a, b) => a - b);

console.log("Task 7:", prices);

// Explanation:
// Default sort converts numbers to strings → wrong order


// 🧩 Task 8: Analytics Report

let orders = [
  {id:1, amount:100},
  {id:2, amount:200},
  {id:3, amount:300}
];

let revenue = orders.reduce((sum, order) => sum + order.amount, 0);
let avg = revenue / orders.length;

console.log("Task 8:", "Revenue:", revenue, "Average:", avg);


// 🧩 Task 9: Inventory System

let inventory = ["Pen", "Pencil"];

// Add
inventory.push("Book");

// Remove
inventory.pop();

// Update using splice
inventory.splice(1, 1, "Marker");

// Search
let hasPen = inventory.includes("Pen");

// Merge
let newStock = ["Eraser", "Scale"];
let finalInventory = [...inventory, ...newStock];

console.log("Task 9:", finalInventory, hasPen);


// 🧩 Task 10: Interview Challenge

function processData(...data) {
  return data
    .flat(Infinity)
    .filter((v, i, arr) => arr.indexOf(v) === i)
    .sort((a, b) => a - b);
}

console.log("Task 10:", processData(1,2,[3,4],[5,[6]],2,3));