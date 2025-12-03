//problem 01 //

function isEmpty(arr) {
  if (arr.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEmpty([]));        
console.log(isEmpty([10, 20]));  

// problem 02 //

function findNumber(arr, num) {
  if (arr.includes(num)) {
    return true;
  } else {
    return false;
  }
}

console.log(findNumber([1,2,3], 2)); 
console.log(findNumber([1,2,3], 5)); 


/// problem 03 //

function isFirstEven(arr) {
  if (arr[0] % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isFirstEven([4,5,6])); 
console.log(isFirstEven([3,4,6])); 

// problem 04 //

function isBig(arr) {
  if (arr.length > 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isBig([1,2,3]));             
console.log(isBig([1,2,3,4,5,6]));       


// problem 05 //

function checkSum(arr) {
  let sum = arr.reduce((a,b) => a + b, 0);

  if (sum > 20) {
    return true;
  } else {
    return false;
  }
}

console.log(checkSum([5,5,5,5]));  
console.log(checkSum([3,4,2]));    


// problem 06 //

function hasHello(arr) {
  if (arr.includes("hello")) {
    return true;
  } else {
    return false;
  }
}

console.log(hasHello(["hi","hello"])); 
console.log(hasHello(["hi","bye"]));   

// problem 07 //

function checkLast(arr) {
  let last = arr[arr.length - 1];

  if (last > 50) {
    return true;
  } else {
    return false;
  }
}

console.log(checkLast([10,20,60])); 
console.log(checkLast([10,20,30])); 

// problem 08 //

function allPositive(arr) {
  for (let num of arr) {
    if (num < 0) {
      return false;
    }
  }
  return true;
}

console.log(allPositive([1,2,3]));     
console.log(allPositive([1,-1,3]));    

// problem 09 //

function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}

checkDriving(16); 
checkDriving(20); 


// prolem 10 //

let distance = 120;  
let ratePerKm = 6;     

let totalFare = distance * ratePerKm;  

if (distance <= 0 || ratePerKm <= 0) {
  console.log("Invalid Input");
} 

else if (totalFare > 500) {
  let discount = totalFare * 0.10;       
  let finalFare = totalFare - discount;  
  console.log("You got 10% Off");
  console.log("Final Fare:");
} 

else {
  console.log("No Discount, Please Pay Full Amount");
  console.log("Total Fare");
}


// problem 11 //

 for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 12 //

let value = [10, 20, 30, 40, 50];

for (let i = value.length - 1; i >= 0; i--) {
    console.log(value[i]);
}


// problem 13 //

let fruit = ["Apple", "Bnana", "Mango"];

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}


// problem 14 //

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}

/// problem 15 //

let num = 9;

if (num % 2 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}

// problem 16 //

let subjects = ["Math", "Science", "English"];
let favSubject = "Science";

if (subjects.includes(favSubject)) {
    console.log(favSubject + " is one of your favorite subjects!");
} else {
    console.log(favSubject + " is not in your subject list.");
}


// problem 17 //

let isLogged = false;

if (isLogged) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in to continue.");
}

// problem 18 //

let temperature = 32;

if (temperature > 30) {
    console.log("It's a hot day");
} else {
    console.log("The weather is cool");
}


// problem 19 //

for (let step = 1; step <= 5; step++) {
  console.log("Step number:", step);
}


// problem 20//

let colors = ["red", "green", "blue", "yellow"];
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

// problem 21 ///

let marksList = [45, 60, 22, 90, 55];
let min = marksList[0];

for (let i = 1; i < marksList.length; i++) {
  if (marksList[i] < min) {
    min = marksList[i];
  }
}
console.log("Minimum marks:", min);


// problem 22 //

let numArray = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log("Even:", evenCount, "Odd:", oddCount);


// problem 23 //

let nUm = -5;

if (num > 0) {
  console.log("Number is Positive");
} else {
  console.log("Number is Negative");
}


// problem 24 //

let correctPassword = "12345";
let userInput = "12345";

if (userInput === correctPassword) {
  console.log("Login Successful ");
} else {
  console.log("Incorrect Password ");
}


// problem 25 //

let numbers = [10, 20, 30, 40, 50];

for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}

// problem 26 //

function allCheck() {
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let p = document.getElementById("password").value;

  if (n === "" || e === "" || p === "") {
    document.getElementById("alert").innerText = "All fields are required!";
    return false;
  }
  document.getElementById("alert").innerText = "Form submitted successfully!";
  return true;
}


// problem 27 //

function togglePass() {
  let p = document.getElementById("pass");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}


// problem 28 //

function showAlert() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  if (u === "" || p === "") {
    alert("Please fill all fields!");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

//problem 29 //

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}
checkEvenOdd(9);

// problem 30 //

let arr = [true, false, true, true, false];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === true) {
    count++;
  }
}
console.log("True count:", count);

// problem 31 // 

function getEven(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(getEven([2, 5, 7, 8, 10]));


// problem 32 //

let Balance = 5000;   
let Withdraw = 3000;  

if (withdraw <= balance) {
    console.log("Transaction Successful");
    balance = balance - withdraw;  
    console.log("Remaining Balance: " + balance);
} else {
    console.log("Insufficient Balance");
}

//  problem 33 //

let username = "admin";   

let password = "1234";    

if (!username || !password) {
  console.log("Please enter username and password!");
} 

else if (username === "admin" && password === "1234") {
  console.log("Login Successful ");
} 

else if (username !== "admin") {
  console.log("Invalid Username ");
} 

else if (password !== "1234") {
  console.log("Invalid Password ");
}


// problem 34 //

let balance = 5000;

let withdraw = 2000; 

if (!withdraw) {
  console.log("Please enter valid amount....!");
} 

else if (typeof withdraw !== "number" || withdraw <= 0) {
  console.log("Invalid Amount");
} 

else if (withdraw > balance) {
  console.log("Insufficient Balance");
} 

else {
  balance = balance - withdraw;
  console.log("Transaction Successful");
  console.log("Remaining Balance");
}