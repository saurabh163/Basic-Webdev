
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



// problem 52 //


let A = [1, 2];
let B = [3, 4];
let result = a.concat(b);
console.log(result);



// problem 53 //

let name = "javascript";
console.log(name.toUpperCase());



// problem 54 //

let students = [
  { name: "Amit", age: 20 },
  { name: "Ravi", age: 25 },
  { name: "Sita", age: 22 }
];

let toTal = students.reduce((sum, s) => sum + s.age, 0);
let avg = toTal / students.length;
console.log("Average age:", avg);



// problem 55 //

let checkNum = 0;

if (checkNum > 0) {
  console.log("Positive Number");
} else if (checkNum < 0) {
  console.log("Negative Number");
} else {
  console.log("Number is Zero");
}


// problem 56 //

let movieTitle = "Avengers";
console.log("Length of movie name:", movieTitle.length);


// problem 57 //

let fiveNums = [2, 4, 6, 8, 10];
let totAl = 0;

for (let i = 0; i < fiveNums.length; i++) {
  totAl += fiveNums[i];
}
console.log("Total Sum:", totAl);


// problem 58 //

let friendList = ["Amit", "Ravi", "Anita", "Sita", "Arjun"];
for (let i = 0; i < friendList.length; i++) {
  if (friendList[i].startsWith("A")) {
    console.log(friendList[i]);
  }
}



// problem 59 //

function findSquare(num) {
  return num * num;
}
console.log(findSquare(6));



// problem 60 //

let luckyNumber = 15;
if (luckyNumber % 3 === 0 && luckyNumber % 5 === 0) {
  console.log("Divisible by both 3 and 5");
} else {
  console.log("Not divisible by both");
}


// problem 61 // 

let colors = ["red", "green", "blue", "yellow"];
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}


// problem 62 //

let marksList = [45, 60, 22, 90, 55];
let min = marksList[0];

for (let i = 1; i < marksList.length; i++) {
  if (marksList[i] < min) {
    min = marksList[i];
  }
}
console.log("Minimum marks:", min);


// problem 63 //

let quote = "Learning JavaScript is fun";
if (quote.includes("JavaScript")) {
  console.log("Word found!");
} else {
  console.log("Word not found!");
}



// problem 64  //

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




/// problem 65 //

function checkResult(marks) {
  
  if (marks <= 0) {
    console.log("Invalid Marks");
  } 

  else if (marks < 35) {
    console.log("Fail");
  } 

  else {
    console.log("Pass");
  }
}

checkResult(0);  
checkResult(25); 
checkResult(60);  



/// problem 66 //

function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}

checkDriving(16); 
checkDriving(20); 



  /// problem 67 // 

  let magicNum = 11;

if (magicNum % 2 === 0) {
  console.log(magicNum, "is Even ");
} else {
  console.log(magicNum, "is Odd ");
}



 // problem 68 //

 let powerA = 55, powerB = 32;

if (powerA > powerB) {
  console.log(powerA, "is stronger ");
} else {
  console.log(powerB, "is stronger ");
}


// problem 69 //

let citizenAge = 19;

if (citizenAge >= 18) {
  console.log(" Eligible for Voting");
} else {
  console.log(" Not Eligible");
}



// problem 70 //

let hobbyLine = "I like to code every day";

if (hobbyLine.includes("code")) {
  console.log("Cool! You’re a coder ");
} else {
  console.log("No coding found ");
}


// problem 71 //

let alpha = 14, beta = 22, gamma = 9;

if (alpha > beta && alpha > gamma) {
  console.log("Alpha is biggest ");
} else if (beta > gamma) {
  console.log("Beta is biggest ");
} else {
  console.log("Gamma is biggest ");
}




/// problem 72 //

let tempValue = -3;

if (tempValue > 0) {
  console.log("Positive ");
} else if (tempValue < 0) {
  console.log("Negative ");
} else {
  console.log("Zero ");
}



 /// problem 73 //

 let examMarks = 42;

if (examMarks >= 40) {
  console.log("Pass ");
} else {
  console.log("Fail ");
}


// probem 74 //

for (let step = 1; step <= 5; step++) {
  console.log("Step number:", step);
}



/// problem 75 //

let pocketMoney = [50, 100, 75, 25];
let totalCash = 0;

for (let i = 0; i < pocketMoney.length; i++) {
  totalCash += pocketMoney[i];
}

console.log("Total Pocket Money:", totalCash);



// problem 76 //

let roomTemp = 32;

if (roomTemp > 30) {
  console.log("Too Hot ");
} else {
  console.log("Nice and Cool ");
}



// problem 77 //

let userPassword = "hello123";

if (userPassword.length >= 8) {
  console.log("Strong Password ");
} else {
  console.log("Weak Password ");
}



/// problem 78 //

let finalMarks = 82;

if (finalMarks >= 75) {
  console.log("Distinction ");
} else if (finalMarks >= 40) {
  console.log("Pass ");
} else {
  console.log("Fail ");
}



/// problem 79 //

let rectLength = 10;
let rectWidth = 6;
let rectArea = rectLength * rectWidth;

console.log("Rectangle Area:", rectArea);


// problem 80 //

let fruitsList = ["Apple", "Banana", "Mango", "Orange"];
let lastFruit = fruitsList[fruitsList.length - 1];

console.log("Last fruit is:", lastFruit);



// problem 81 //

for (let num = 1; num <= 10; num++) {
  if (num % 2 === 0) {
    console.log("Even number:", num);
  }
}



/// problem 82 ///

let userMinutes = 5;
let seconds = userMinutes * 60;

console.log(userMinutes, "minutes =", seconds, "seconds");



/// problem 83 //

let enteredName = "";

if (enteredName === "") {
  console.log("Name is empty ");
} else {
  console.log("Welcome,", enteredName);
}


// problem 84 //

let bonusPoints = 40;

if (bonusPoints % 10 === 0) {
  console.log("Perfect multiple of 10 ");
} else {
  console.log("Not a multiple ");
}



//  problem 85 //

let smallNote = "JavaScript is easy";
let charCount = smallNote.length;

console.log("Total characters:", charCount);



//  problem 86  //

let testNum = 12;

if (testNum % 2 === 0 && testNum % 3 === 0) {
  console.log("Divisible by both 2 and 3 ");
} else {
  console.log("Not divisible ");
}


// problem 87 //

let tableNum = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${tableNum} × ${i} = ${tableNum * i}`);
}


// problem 88 //

let playerName = "Saurabh";

if (playerName.startsWith("S")) {
  console.log("Name starts with S ");
} else {
  console.log("Name doesn’t start with S ");
}



// problem 89 //

let math = 78, sci = 85, eng = 90;
let avgMarks = (math + sci + eng) / 3;

console.log("Average Marks:", avgMarks);


/// problem 90 //


let favMovies = ["KGF", "Pushpa", "Leo", "Dune", "Batman", "RRR"];

if (favMovies.length > 5) {
  console.log("Big movie list ");
} else {
  console.log("Small movie list ");
}



 // problem 90 /

 let tempCelsius = 30;
let tempFahrenheit = (tempCelsius * 9/5) + 32;

console.log("Temperature in Fahrenheit:", tempFahrenheit);



// problem 91 //

let randomNums = [2, 5, 8, 11, 14];
let evenSum = 0;

for (let i = 0; i < randomNums.length; i++) {
  if (randomNums[i] % 2 === 0) {
    evenSum += randomNums[i];
  }
}
console.log("Sum of even numbers:", evenSum);


// problem 92 //

let userAge = 17;

if (userAge >= 18) {
  console.log("Adult ");
} else {
  console.log("Minor ");
}


// problem93 //

let countryName = "India";

for (let i = 0; i < countryName.length; i++) {
  console.log(countryName[i]);
}


// problem 94 //

let boxValues = [10, 5, 7, 3, 9];
let minValue = boxValues[0];

for (let i = 1; i < boxValues.length; i++) {
  if (boxValues[i] < minValue) {
    minValue = boxValues[i];
  }
}
console.log("Smallest number:", minValue);



// problem 95 //

let magicValue = 45;

if (magicValue % 5 === 0) {
  console.log(magicValue, "is a multiple of 5");
} else {
  console.log(magicValue, "is not a multiple");
}


// problem 96 //

let calcNum = 4;
let square = calcNum * calcNum;
let cube = calcNum * calcNum * calcNum;

console.log("Square:", square, "Cube:", cube);


 // problem 97 //

 let websiteName = "openai.com";

if (websiteName.endsWith(".com")) {
  console.log("This is a .com website ");
} else {
  console.log("Not a .com domain ");
}


// pronblem 98 //

let randomList = [3, 8, 12, 5, 10];
let evEnCount = 0;

for (let i = 0; i < randomList.length; i++) {
  if (randomList[i] % 2 === 0) {
    evEnCount++;
  }
}
console.log("Total even numbers:", evEnCount);


// problem 99 //

let memberAge = 68;

if (memberAge >= 60) {
  console.log("Senior Citizen");
} else {
  console.log("Not a Senior Citizen");
}


/// problem 100 //

let scoreBoard = [22, 45, 67, 89, 34];
let highestScore = scoreBoard[0];

for (let i = 1; i < scoreBoard.length; i++) {
  if (scoreBoard[i] > highestScore) {
    highestScore = scoreBoard[i];
  }
}

console.log("Highest score is:", highestScore);



// problem 101 //

let heroNames = ["Ironman", "Thor", "Hulk", "Loki"];

for (let i = 0; i < heroNames.length; i++) {
  console.log(heroNames[i]);
}


// problem 102 //

let pocketCoins = [10, 20, 30, 40];
let totalCoins = 0;

for (let i = 0; i < pocketCoins.length; i++) {
  totalCoins += pocketCoins[i];
}
console.log("Total coins:", totalCoins);



// problem 103 //

let mountainHeights = [120, 340, 560, 220, 800];
let tallest = mountainHeights[0];

for (let i = 1; i < mountainHeights.length; i++) {
  if (mountainHeights[i] > tallest) {
    tallest = mountainHeights[i];
  }
}
console.log("Tallest mountain height:", tallest);


// problem 104 //

let bookPages = [450, 120, 300, 220];
let smallest = bookPages[0];

for (let i = 1; i < bookPages.length; i++) {
  if (bookPages[i] < smallest) {
    smallest = bookPages[i];
  }
}
console.log("Smallest page count:", smallest);


// problwm 105 //

let numberSet = [3, 6, 8, 11, 20];
let evencOunt = 0;

for (let i = 0; i < numberSet.length; i++) {
  if (numberSet[i] % 2 === 0) {
    evencOunt++;
  }
}
console.log("Total even numbers:", evencOunt);


// problem 106//

let cityList = ["Delhi", "Mumbai", "Chennai", "Pune"];

for (let i = cityList.length - 1; i >= 0; i--) {
  console.log(cityList[i]);
}

// problem 107 //

let marksLst = [70, 80, 90, 60];
let tOtalMarks = 0;

for (let i = 0; i < marksLst.length; i++) {
  tOtalMarks += marksLst[i];
}
let AvgMarks = tOtalMarks / marksLst.length;
console.log("Average Marks:", AvgMarks);


// problem 108 //

let priceList = [10, 20, 30, 40];
let newPrices = [];

for (let i = 0; i < priceList.length; i++) {
  newPrices.push(priceList[i] * 2);
}
console.log("Doubled Prices:", newPrices);


// problem 109 //

let fruitBasket = ["Apple", "Mango", "Banana"];
let searchFruit = "Mango";

if (fruitBasket.includes(searchFruit)) {
  console.log(searchFruit, "is available ");
} else {
  console.log(searchFruit, "not found");
}


// problem 110 //


let subjectMarks = [78, 85, 92, 88, 70];
let totalMarKs = 0;

for (let i = 0; i < subjectMarks.length; i++) {
  totalMarKs += subjectMarks[i];
}
console.log("Total Marks:", totalMarKs);


// problem 111//

let numCollection = [12, 15, 7, 24, 33, 50];

for (let i = 0; i < numCollection.length; i++) {
  if (numCollection[i] % 2 !== 0) {
    console.log("Odd number:", numCollection[i]);
  }
}


// problwm 112 //

let RandomNums = [2, 3, 4, 5];
let totalProduct = 1;

for (let i = 0; i < RandomNums.length; i++) {
  totalProduct *= RandomNums[i];
}
console.log("Product of all numbers:", totalProduct);


/// problem 113 //

let speedList = [50, 120, 75, 200, 90];
let below100 = 0;

for (let i = 0; i < speedList.length; i++) {
  if (speedList[i] < 100) {
    below100++;
  }
}
console.log("Count below 100:", below100);


// problem 114 //

let friendNames = ["Raj", "Simran", "Amit", "Rohit", "Om"];
for (let i = 0; i < friendNames.length; i++) {
  if (friendNames[i].length > 4) {
    console.log(friendNames[i]);
  }
}


// problem 115 //

let cartPrices = [120, 250, 60, 90];
let totalPrice = 0;

for (let i = 0; i < cartPrices.length; i++) {
  totalPrice += cartPrices[i];
}
console.log("Total Price ₹:", totalPrice);


// problem 116 //

let colorList = ["Red", "Blue", "Green", "Yellow"];
let reverseColors = [];

for (let i = colorList.length - 1; i >= 0; i--) {
  reverseColors.push(colorList[i]);
}
console.log("Reversed Array:", reverseColors);


// problem 117 //

let mixValues = [-2, 5, -7, 8, 3, -1];
let positiveCount = 0;

for (let i = 0; i < mixValues.length; i++) {
  if (mixValues[i] > 0) {
    positiveCount++;
  }
}
console.log("Positive numbers count:", positiveCount);


// problem 118 //

let ageList = [12, 18, 25, 30];
let updatedAges = [];

for (let i = 0; i < ageList.length; i++) {
  updatedAges.push(ageList[i] + 10);
}
console.log("After adding 10:", updatedAges);


 // problem 119 //


 let carBrands = ["Tata", "BMW", "Audi", "Kia"];
let searchCar = "Audi";
let foundIndex = -1;

for (let i = 0; i < carBrands.length; i++) {
  if (carBrands[i] === searchCar) {
    foundIndex = i;
    break;
  }
}
console.log("Index of", searchCar, "is:", foundIndex);


 // problem 120 //

let nuMB = 10;

for (let i = 1; i <= 10; i++) {
    console.log(numB + " x " + i + " = " + (numB * i));
}

 // problem 121 //

 for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


 // problem 122 //

 let value = [10, 20, 30, 40, 50];

for (let i = value.length - 1; i >= 0; i--) {
    console.log(value[i]);
}


 // problem 123 //

let fruit = ["Apple", "Bnana", "Mango"];

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

 // problem 124 //

 for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 125 //

let nuMS = 9;

if (nuMS % 2 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}


// problem 126 //

let subjects = ["Math", "Science", "English"];
let favSubject = "Science";

if (subjects.includes(favSubject)) {
    console.log(favSubject + " is one of your favorite subjects!");
} else {
    console.log(favSubject + " is not in your subject list.");
}

// problem 127 // 

let isLogged = false;

if (isLogged) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in to continue.");
}

// problem 128 //


let temperature = 32;

if (temperature > 30) {
    console.log("It's a hot day");
} else {
    console.log("The weather is cool");
}

// problem 129 //

let mathMarks = 85;
let scienceMarks = 90;

if (mathMarks <= 0 || scienceMarks <= 0) {
  console.log("Invalid Marks");
} 

else if (mathMarks < 35 || scienceMarks < 35) {
  console.log("Fail");
} 

else if (mathMarks > 80 && scienceMarks > 80) {
  console.log("Excellent good  Performance");
} 

else {
  console.log("Pass");
}

 // problem 130 //

 function checkNumber(num) {

  num = Number(num);

  if (num > 0) {
    console.log("Number is positive");

  } else if (num < 0) {
    console.log("Number is negative");

  } else {
    console.log("Number is zero");
  }
}

let UserInput = prompt("Enter a number:");

checkNumber(UserInput);



// problem 131 //

function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}

checkDriving(16); 
checkDriving(20); 


// problem 132 //

function checkResults(marksList) {

    for (let i = 0; i < marksList.length; i++) {
        let marks = marksList[i];

        if (marks >= 90) {
            console.log("Student " + (i+1) + "Grade A");

        } else if (marks >= 70) {
            console.log("Student " + (i+1) + "Grade B");

        } else if (marks >= 50) {
            console.log("Student " + (i+1) + "Grade C ");

        } else {
            console.log("Student " + (i+1) + "Fail ");
        }
    }
}

let studentsMarks = [95, 82, 67, 45, 100];
checkResults(studentsMarks);



// problem 133 //

function calculateDiscount(amount) 
{
  if (amount <= 0) {
    console.log("Invalid Amount");
  } 

  else if (amount < 500) {
    console.log("No Discount");
  }

  else if (amount <= 1000) {
    let discount = amount * 0.10;
    console.log("10% Discount Applied");
  }

  else if (amount <= 5000) {
    let discount = amount * 0.20;
    console.log("20% Discount Applied");
  }

  else {
    let discount = amount * 0.30;
    console.log("30% Discount Applied");
  }
}


calculateDiscount(-200);  

calculateDiscount(300);  

calculateDiscount(800);  

calculateDiscount(2000);  

calculateDiscount(6000);



// problem 134 //


function checkResult(marks) {
  
  if (marks <= 0) {
    console.log("Invalid Marks");
  } 

  else if (marks < 35) {
    console.log("Fail");
  } 

  else {
    console.log("Pass");
  }
}

// function calls kiya gaya// 

checkResult(0);  
checkResult(25); 
checkResult(60);  


// problem 135 //

function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}

checkDriving(16); 
checkDriving(20); 


// problem 136 //

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

// problem 137 //

let ticketPrice = 250;
let tickets = 10;

let Total = ticketPrice * tickets;

if (ticketPrice <= 0 || tickets <= 0) {
  console.log("Invalid Input");
}  

else if (total > 2000) {
  let discount = total * 0.10;
  let finalBill = total - discount;
  console.log("You got 10% Discount");
  console.log("Final Bill:");
} 

else {
  console.log("No Discount, Please Pay Full Amount");
  console.log("Total Bill:");
}


// roblem 138 //

let MaRks = 85;

if (MaRks <= 0) {
  console.log("Invalid Marks");
} 

else if (MaRks > 100) {
  console.log("Marks cannot be more than 100");
} 

else if (MaRks < 35) {
  console.log("Fail");
} 

else if (MaRks >= 35 && MaRks <= 60) {
  console.log("Pass");
} 

else if (MaRks >= 61 && MaRks <= 80) {
  console.log("First Class");
} 

else {
  console.log("Distinction");
}

// problem 139 //


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

// problem 140 //

let Balance = 5000;   
let Withdraw = 3000;  

if (withdraw <= balance) {
    console.log("Transaction Successful");
    balance = balance - withdraw;  
    console.log("Remaining Balance: " + balance);
} else {
    console.log("Insufficient Balance");
}


// problem 141//

let marKs = 85; 

 if (marKs >= 90) 
    console.log(" Grade A ");

  else if (marKs >= 75) 
    console.log(" Grade B ");

  else if (marKs >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 


  // problem 142 //

  function checkNumbers(nums) {

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if (n > 0) {
            console.log(n + " is Positive");

        } else if (n < 0) {
            console.log(n + " is Negative");
            
        } else {
            console.log(n + " is Zero");
        }
    }
}

checkNumbers([5, -2, 0, 10, -7]);


// problem 143 //

let randOmNums = [2, 5, 8, 11, 14];
let evenSUm = 0;

for (let i = 0; i < randOmNums.length; i++) {
  if (randOmNums[i] % 2 === 0) {
    evenSUm += randOmNums[i];
  }
}
console.log("Sum of even numbers:", evenSUm);


// problem 144 //

let ArR = [2, 4, 6, 8];
let sUm = 0;

for (let i = 0; i < ArR.length; i++) {
  sUm += ArR[i];
}
console.log("Sum:", sUm);



// problem 145 //



let Mitrmandali = ["abhishek", "vaishnavi", "nikita", "saurah", "abhijeet"];
for (let i = 0; i < Mitrmandali.length; i++) {
  if (Mitrmandali[i].length > 4) {
    console.log(Mitrmandali[i]);
  }
}

