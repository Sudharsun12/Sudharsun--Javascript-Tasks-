// ===============================
// 🔹 Task 1: Order System (setTimeout)
// ===============================
console.log("Order placed");

setTimeout(() => {
  console.log("Preparing food");
}, 2000);

setTimeout(() => {
  console.log("Food ready");
}, 4000);

setTimeout(() => {
  console.log("Delivered");
}, 5000);


// ===============================
// 🔹 Task 2: Digital Clock (setInterval)
// ===============================
let count = 0;

let clock = setInterval(() => {
  let time = new Date().toLocaleTimeString();
  console.log("Current Time:", time);

  count++;
  if (count === 10) {
    clearInterval(clock);
    console.log("Clock stopped");
  }
}, 1000);


// ===============================
// 🔹 Task 3: Callback Hell Simulation
// ===============================
function loginUser(callback) {
  setTimeout(() => {
    console.log("User Logged In");
    callback();
  }, 1000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("User Data Fetched");
    callback();
  }, 1000);
}

function getUserPosts() {
  setTimeout(() => {
    console.log("User Posts Fetched");
  }, 1000);
}

// Callback Hell Flow
loginUser(() => {
  getUserData(() => {
    getUserPosts();
  });
});


// ===============================
// 🔹 Task 4: Fake API Promise
// ===============================
function getProducts() {
  return new Promise((resolve, reject) => {
    let success = true; // change to false to test error

    setTimeout(() => {
      if (success) {
        resolve([
          { name: "Shirt", price: 500 },
          { name: "Shoes", price: 1500 }
        ]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

// Using Promise
getProducts()
  .then((data) => {
    console.log("Products:", data);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request Completed");
  });


  // Task 1
//Order placed
//Preparing food (after 2s)
//Food ready (after 4s)
//Delivered (after 5s)

// Task 2
//Current Time: XX:XX:XX (prints every second)
//Clock stopped (after 10 sec)

// Task 3
//User Logged In
//User Data Fetched
//User Posts Fetched

// Task 4
//Products: [{name: "Shirt", price: 500}, {name: "Shoes", price: 1500}]
//Request Completed