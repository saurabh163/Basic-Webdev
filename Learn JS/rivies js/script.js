
// problem 01 //

let nUm = -5;

if (num > 0) {
  console.log("Number is Positive");
} else {
  console.log("Number is Negative");
}


// problem 2 //

let age = 16;

if (age >= 18) {
  console.log("You are an Adult");
} else {
  console.log("You are a Minor");
}



 // problem 03 //

 let num = 11;

if (num % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}




// problem 04 //

let a = 10;
let b = 25;

if (a > b) {
  console.log("a is greater");
} else {
  console.log("b is greater");
}



// problem 05 //

let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome Back!");
} else {
  console.log("Please Login");
}




///  problem 06 //

let marks = 33;

if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}




 /// problem 07 //


 let total = 600;

if (total > 500) {
  console.log("You got 10% discount!");
} else {
  console.log("No discount available");
}



//problem 08 //


let Num = 0;

if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Number is Zero");
}


// problem 09 //


let correctPassword = "12345";
let userInput = "12345";

if (userInput === correctPassword) {
  console.log("Login Successful ");
} else {
  console.log("Incorrect Password ");
}


// problem 10 //

let year = 2024;

if (year % 4 == 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}



// problem 11 //


let Marks = 72;

if (marks >= 90) {
  console.log("Grade: A");

} else if (marks >= 75) {
  console.log("Grade: B");

} else if (marks >= 50) {
  console.log("Grade: C");

} else {
  console.log("Fail");
}



// problem 12 // 

let Age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("You can vote ");
} else {
  console.log("You cannot vote ");
}


// problem 13 //

let chintuHomework = false;

if (chintuHomework) {
  console.log("Good job Chintu ");

} else {
  console.log("Chintu go do your homework ");
}


// problem 14//

let babluMarks = 80;

if (babluMarks >= 60) {
  console.log("Bablu gets samosa treat ");

} else {
  console.log("No samosa for Bablu ");
}


// problem 15 //

let gudduAge = 13;
let hasPermissionSlip = true;

if (gudduAge >= 12 && hasPermissionSlip) {
  console.log("Guddu can go to picnic ");
} else {
  console.log("Stay home Guddu ");
}


// problem 16 //

let pappuBattery = 15;

if (pappuBattery < 20) {
  console.log("Pappu, charge your phone ");

} else {
  console.log("Battery is fine ");
}


// problem 17 //

let montyAge = 15;
let withParents = false;

if (montyAge >= 18 || withParents) {
  console.log("Monty can watch movie ");

} else {
  console.log("Monty not allowed ");
}


//  problem 18 //

let buntyWifi = false;
let buntyMobileData = true;

if (buntyWifi || buntyMobileData) {
  console.log("Bunty is online ");

} else {
  console.log("Bunty is offline ");
}


// problem 19 //

let pinkyMoney = 40;
let iceCreamPrice = 35;

if (pinkyMoney >= iceCreamPrice) {
  console.log("Pinky bought ice-cream ");

} else {
  console.log("Pinky needs more money ");
}



// problem 20 //

let lalluRuns = 25;
let lalluCatch = true;

if (lalluRuns > 20 && lalluCatch) {
  console.log("Lallu selected in cricket team ");

} else {
  console.log("Try again next time Lallu ");
}


// problem 21 //

let ovenTemp = 180;
let cakeTime = 30;

if (ovenTemp >= 180 && cakeTime >= 30) {
  console.log("Cake is ready ");

} else {
  console.log("Wait thoda aur Dolly ");
}


// problem 22 //

let rajuBattery = 100;
let chargingPlugged = false;

if (rajuBattery < 30 && !chargingPlugged) {
  console.log("Raju plug in your charger ");
  
} else {
  console.log("All good Raju ");
}



// problem 23 //

let numbRs = [10, 20, 30, 40, 50];

for (let i = numbRs.length - 1; i >= 0; i--) {
    console.log(numbRs[i]);
}


// problem 24 //

function validateEmail() {
  let email = document.getElementById("email").value;
  if (!email.includes("@")) {
    document.getElementById("msg").innerText = "Invalid email!";
    return false;
  } else {
    document.getElementById("msg").innerText = "Valid email!";
    return true;
  }
}



// problem 25 //

function checkMatch() {
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;

  if (p1 !== p2) {
    document.getElementById("msg").innerText = "Passwords do not match";
    return false;
  }
  document.getElementById("msg").innerText = "Passwords match ";
  return true;
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



// problem 27  //

function togglePass() {
  let p = document.getElementById("pass");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}



// problem 28  //

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



// problem 29 //

function highlightEmpty() {
  let n = document.getElementById("n");
  let e = document.getElementById("e");
  let valid = true;

  if (n.value === "") {
    n.style.border = "2px solid red";
    valid = false;
  } else {
    n.style.border = "2px solid green";
  }

  if (e.value === "") {
    e.style.border = "2px solid red";
    valid = false;
  } else {
    e.style.border = "2px solid green";
  }

  return valid;
}


// problem 30 //

function checkPass() {
  let pass = document.getElementById("pass").value;
  let btn = document.getElementById("btn");

  if (pass.length < 6) {
    document.getElementById("msg").innerText = "Too short!";
    btn.disabled = true;
  } else {
    document.getElementById("msg").innerText = "Looks strong!";
    btn.disabled = false;
  }
}   

// problem 31 //

let buntyMaths = 80;
let buntyScience = 70;
let buntyEnglish = 90;

let totalMarks = buntyMaths + buntyScience + buntyEnglish;
let averageMarks = totalMarks / 3;

console.log("Bunty’s total marks:", totalMarks);
console.log("Bunty’s average marks:", averageMarks);


// problem 32 //

let pinkyName = "Pinky";
let pinkyAge = 17;

let sentence = pinkyName + " is " + pinkyAge + " years old.";
console.log(sentence);



// problem 33 ///

let gardenLength = 12;
let gardenWidth = 8;

let area = gardenLength * gardenWidth;

console.log("Chintu’s garden area is:", area, "square meters 🌿");



// problem 34 //

let babluName = "bablu the great";
let upperName = babluName.toUpperCase();
let shortName = babluName.slice(0, 5);

console.log("Full name in caps:", upperName);
console.log("Short name:", shortName);



// problem 35 //

function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}
checkEvenOdd(9);



// // problem 36 //

let numbers = [5, 8, 2, 9, 1];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}
console.log("Largest:", largest);


// problem 37 //

let str = "hello";
let reversed = str.split("").reverse().join("");
console.log(reversed);



// problem 38 //


let arr = [true, false, true, true, false];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === true) {
    count++;
  }
}
console.log("True count:", count);



// problem 39 //


let person = { name: "Amit", age: 22, city: "Pune" };

for (let key in person) {
  console.log(key + ":", person[key]);
}


// problem 40 //

let word = "computer";
if (word.includes("a")) {
  console.log("Contains 'a'");
} else {
  console.log("Does not contain 'a'");
}



// problem 41 //

function getEven(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(getEven([2, 5, 7, 8, 10]));



// problem 42 //

let user = { name: "Ravi", age: 21 };
user.country = "India";
console.log(user);



// problem 43 //

let Str = "javascript";
let Count = 0;
let vowels = "aeiou";

for (let i = 0; i < Str.length; i++) {
  if (vowels.includes(Str[i])) {
    Count++;
  }
}
console.log("Vowels:", Count);


// problem 44 //

let Arr = [2, 4, 6, 8];
let sum = 0;

for (let i = 0; i < Arr.length; i++) {
  sum += Arr[i];
}
console.log("Sum:", sum);



// problem 45 //

let Numbers = [2, 4, 6];
let doubled = numbers.map(num => num * 2);
console.log(doubled);



// problem 46 //

let users = [
  { name: "Amit", age: 20 },
  { name: "Ravi", age: 25 },
  { name: "Sita", age: 19 }
];

let names = users.map(user => user.name);
console.log(names);



// problem 47 //

let aRr = [3, 6, 9, 12, 15];
let even = aRr.filter(num => num % 2 === 0);
console.log(even);

// problem 48 /

let MArks = [80, 75, 90, 85];
let tOtal = MArks.reduce((sum, val) => sum + val, 0);
console.log("Total:", tOtal);



// problem 49 //

function squareArray(arr) {
  return arr.map(num => num * num);
}
console.log(squareArray([2, 3, 4]));



// problem 50 //

let nums = [5, 10, 15, 20];
let allPositive = nums.every(n => n > 0);
console.log(allPositive);



// problem 51 //

let numS = [2, 5, 12, 8, 15];
let first = numS.find(n => n > 10);
console.log(first);
