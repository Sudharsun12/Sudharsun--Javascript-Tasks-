// TASK 1
let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
];

let total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
console.log("Cart Total:", total);

let expensive = cart.filter(item => item.price > 1000);
console.log("Expensive Products:", expensive);

let names = cart.map(item => item.name.toUpperCase());
console.log("Uppercase Names:", names);


// TASK 2
let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
];

let failed = students.filter(s => s.marks < 50);
console.log("Failed Students:", failed);

let distinction = students.some(s => s.marks > 80);
console.log("Any Distinction:", distinction);

let allPassed = students.every(s => s.marks > 35);
console.log("All Passed:", allPassed);

let firstFail = students.find(s => s.marks < 50);
console.log("First Failed:", firstFail);


// TASK 3
let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
];

let updated = employees.map(emp => ({
  ...emp,
  salary: emp.salary * 1.1
}));
console.log("Updated Salaries:", updated);

let highSalary = employees.filter(emp => emp.salary > 30000);
console.log("High Salary Employees:", highSalary);

let totalSalary = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log("Total Salary:", totalSalary);

let sorted = [...employees].sort((a, b) => b.salary - a.salary);
console.log("Sorted by Salary:", sorted);


// TASK 4
let products = ["Laptop", "Mobile", "Tablet", "Camera"];

console.log("Mobile Exists:", products.includes("Mobile"));

let lower = products.map(p => p.toLowerCase());
console.log("Lowercase:", lower);

console.log("Tablet Index:", products.indexOf("Tablet"));

console.log("Joined String:", products.join("-"));


// TASK 5
let dob = new Date("2003-01-01");
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
console.log(`Age: You are ${age} years old`);


// TASK 6
let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
];

let inputUser = "admin";
let inputPass = "1234";

let user = users.find(u => u.username === inputUser && u.password === inputPass);

if (user) {
  console.log("Login:", "Login Success ✅");
} else {
  console.log("Login:", "Invalid Credentials ❌");
}


// TASK 7
let numbers = [10, 15, 20, 25, 30];

let evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

console.log("Any Odd:", numbers.some(n => n % 2 !== 0));

console.log("All Even:", numbers.every(n => n % 2 === 0));

console.log("First > 20:", numbers.find(n => n > 20));


// BONUS
let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
];

let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((acc, o) => acc + o.amount, 0);

console.log("Delivered Revenue:", revenue);

let pending = orders.filter(o => o.status === "pending");
console.log("Pending Orders:", pending);

console.log("Any Order > 1000:", orders.some(o => o.amount > 1000));

let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);
console.log("Sorted Orders:", sortedOrders);

// ===== Task 1 =====
// Cart Total: 3400
// Expensive Products: [ { name: 'Shoes', price: 1500, qty: 1 } ]
// Uppercase Names: [ 'SHIRT', 'SHOES', 'CAP' ]

// ===== Task 2 =====
// Failed Students: [
//   { name: 'Bala', marks: 45 },
//   { name: 'Divya', marks: 30 }
// ]
// Any Distinction: true
// All Passed: false
// First Failed: { name: 'Bala', marks: 45 }


// ===== Task 3 =====
// Updated Salaries: [
//   { name: 'A', salary: 27500 },
//   { name: 'B', salary: 44000 },
//   { name: 'C', salary: 16500 },
//   { name: 'D', salary: 55000 }
// ]
// High Salary Employees: [
//   { name: 'B', salary: 40000 },
//   { name: 'D', salary: 50000 }
// ]
// Total Salary: 130000
// Sorted by Salary: [
//   { name: 'D', salary: 50000 },
//   { name: 'B', salary: 40000 },
//   { name: 'A', salary: 25000 },
//   { name: 'C', salary: 15000 }
// ]

// ===== Task 4 =====
// Mobile Exists: true
// Lowercase: [ 'laptop', 'mobile', 'tablet', 'camera' ]
// Tablet Index: 2
// Joined String: Laptop-Mobile-Tablet-Camera

// ===== Task 5 =====
// Age: You are 23 years old

// ===== Task 6 =====
// Login: Login Success ✅

// ===== Task 7 =====
// Even Numbers: [ 10, 20, 30 ]
// Any Odd: true
// All Even: false
// First > 20: 25

// ===== Bonus =====
// Delivered Revenue: 2500
// Pending Orders: [ { id: 2, amount: 1500, status: 'pending' } ]
// Any Order > 1000: true
// Sorted Orders: [
//   { id: 1, amount: 500, status: 'delivered' },
//   { id: 2, amount: 1500, status: 'pending' },
//   { id: 3, amount: 2000, status: 'delivered' }
// ]