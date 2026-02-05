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

// problem 35 //

let Marks = 85;

if (marks <= 0) {
  console.log("Invalid Marks");
} 

else if (marks > 100) {
  console.log("Marks cannot be more than 100");
} 

else if (marks < 35) {
  console.log("Fail");
} 

else if (marks >= 35 && marks <= 60) {
  console.log("Pass");
} 

else if (marks >= 61 && marks <= 80) {
  console.log("First Class");
} 

else {
  console.log("Distinction");
}


// problem 36 //

let itemPrice = 1200;  
let quantity = 5;       

let total = itemPrice * quantity;  

if (itemPrice <= 0 || quantity <= 0) {
  console.log("Invalid Input");
} 

else if (total > 5000) {
  console.log("You got Free Delivery");
  console.log("Total Bill");
} 

else {
  console.log("Delivery charge 50rs add hoga");
  console.log("Total Bill");
}


// problem 37 //

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

//problem 38 //

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

// problem 39 //

let diStance = 120;  
let ratEPerKm = 6;     

let tOtalFare = diStance * ratEPerKm;  

if (diStance <= 0 || ratEPerKm <= 0) {
  console.log("Invalid Input");
} 

else if (tOtalFare > 500) {
  let discount = tOtalFare * 0.10;       
  let finalFare = tOtalFare - discount;  
  console.log("You got 10% Off");
  console.log("Final Fare:");
} 

else {
  console.log("No Discount, Please Pay Full Amount");
  console.log("Total Fare");
}

// problem 40 //

function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}

checkDriving(16); 
checkDriving(20); 


//problem 41 //

let marks = 85; 

 if (marks >= 90) 
    console.log(" Grade A ");

  else if (marks >= 75) 
    console.log(" Grade B ");

  else if (marks >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 

  // problem 42 //

  let Mitrmandali = ["abhishek", "vaishnavi", "nikita", "saurah", "abhijeet"];

for (let i = 0; i < Mitrmandali.length; i++) {
  if (Mitrmandali[i].length > 4) {
    console.log(Mitrmandali[i]);
  }
}

// problem 43 //

let Arr = [2, 4, 6, 8];
let sum = 0;

for (let i = 0; i < Arr.length; i++) {
  sum += Arr[i];
}
console.log("Sum:", sum);


// problem 44//

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


// problem 45 //

let marKs = 85; 

 if (marKs >= 90) 
    console.log(" Grade A ");

  else if (marKs >= 75) 
    console.log(" Grade B ");

  else if (marKs >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 

  // problem 46 //

  for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 47 //

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


// problem 48 //

let RandomNums = [2, 3, 4, 5];
let totalProduct = 1;

for (let i = 0; i < RandomNums.length; i++) {
  totalProduct *= RandomNums[i];
}
console.log("Product of all numbers:", totalProduct);


// problem 49 //

let numCollection = [12, 15, 7, 24, 33, 50];

for (let i = 0; i < numCollection.length; i++) {
  if (numCollection[i] % 2 !== 0) {
    console.log("Odd number:", numCollection[i]);
  }
}


// problem 50 //

let fruitBasket = ["Apple", "Mango", "Banana"];
let searchFruit = "Mango";

if (fruitBasket.includes(searchFruit)) {
  console.log(searchFruit, "is available ");
} else {
  console.log(searchFruit, "not found");
}

// problem 51 //

function formatName() {
  let input = document.getElementById("name");
  let words = input.value.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1).toLowerCase();
    }
  }
  input.value = words.join(" ");
  document.getElementById("result").innerText = "Formatted!";
}

// problem 52//
function confirmEmail() {
  let e1 = document.getElementById("email1").value;
  let e2 = document.getElementById("email2").value;

  if (e1 === "" || e2 === "") {
    document.getElementById("msg").innerText = "Please fill both emails";
    return false;
  }

  if (e1 !== e2) {
    document.getElementById("msg").innerText = "Emails do not match";
    return false;
  }

  document.getElementById("msg").innerText = "Emails match ";
  return true;
}

// problem 53 //

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


// problem 54 //

function showGender(ele) {
  document.getElementById("msg").innerText = "Selected: " + ele.value;
}


//problem 55 //

function limitText() {
  let text = document.getElementById("bio").value;
  if (text.length > 20) {
    document.getElementById("msg").innerText = "Limit reached (20 chars max)!";
    document.getElementById("bio").value = text.substring(0, 20);
  } else {
    document.getElementById("msg").innerText = text.length + "/20";
  }
}
  

// problem 56 //

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



// problem 57 //

console.log("Hello gys wlc back");


// problem 58 //

for (let i = 0; i <= 10; i++) {
  console.log(i);
}


// problem 59 //

let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
 

// problem 60 //

function sayHello() {
  console.log("Hello Sir");
}

sayHello();
 


// problem 61 //

let Numbers = [1, 2, 3, 4];
console.log(numbers);
 


// problem 62 //

let fruits = ["apple", "banana", "mango"];
console.log(fruits.length);
 

// problem 63 //

let items = [1, 2];
items.push(3);
console.log(items);



// problem 64 //

let nuM = 7;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}


//  problem 65 //

let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
 

// problem 66 //

function isPositive(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isPositive(5));
console.log(isPositive(-2));
 

// problem 67 //

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// problem 68 //

for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}


// problem 69 //

function sum(a, b) {
  console.log(a + b);
}

sum(5, 3);


// problem 70//

let arry = [10, 20, 30];
console.log(arr[0]);


// problem 71 //

let fruitS = ["apple", "banana", "mango"];

for (let i = 0; i < fruitS.length; i++) {
  console.log(fruitS[i]);
}


// problem 72  //

let NUm = 12;

if (NUm > 10) {
  console.log("Greater than 10");
} else {
  console.log("10 or less");
}
 

// problem 73 //

let nums = [1, 2, 3, 4];

console.log(nums.includes(3));


// problem 74 //

let name = "Saurabh";
console.log(name.length);


// problem 75 //

let city = "nagpur";
console.log(city.toUpperCase());


// problem 76 //

const greet = () => {
  console.log("Hello Sir");
};

greet();


// problem 77 //

let data = [];

if (data.length === 0) {
  console.log(true);
} else {
  console.log(false);
}


// problem 78 //

let nuMS = [1, 2, 3];
nums.reverse();

console.log(nuMS);
 

//problem 79 //

function getLength(arr) {
  return arr.length;
}

console.log(getLength([5, 6, 7, 8]));
 

// problem 80 //

let nbr = 0;

if (nbr > 0) {
  console.log("Positive");
} else if (nbr < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// problem 81 //

let a = 10;
let b = 20;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

// problem 82 //

let Colors = ["red", "green", "blue"];

Colors.forEach(function(color) {
  console.log(color);
});


// problem 83 //

let text = "JavaScript";
let Count = text.length;

console.log(Count);


// problem 84 //

function add(a, b) {
  return a + b;
}

console.log(add(4, 6));


// problem 85 //

let numb = 100;
let str = numb.toString();

console.log(str);


// problem 86 //

let Value = true;

console.log(typeof Value);


// problem 87 //

let Items = [1, 2, 3, 4];
items.pop();

console.log(Items);


// problem 88 //

let isOn = false;

isOn = !isOn;

console.log(isOn);



// problem 89 //

let multiplier = 3;

for (let step = 1; step <= 10; step++) {
  console.log(multiplier + " x " + step + " = " + (multiplier * step));
}


// problem 90 //

let firstValue = 15;
let secondValue = 9;

if (firstValue > secondValue) {
  console.log(firstValue);
} else {
  console.log(secondValue);
}


// problem 91 //

let scoreList = [10, 20, 30];
let totalCount = 0;

for (let index = 0; index < scoreList.length; index++) {
  totalCount++;
}

console.log(totalCount);
 

// problem 92 //

let userinput = "";

if (userinput === "") {
  console.log(true);
} else {
  console.log(false);
}


// problem 93 //

let marksText = "80";
let marksNumber = Number(marksText);

console.log(marksNumber);


// problem 94 //

let cityNames = ["Nagpur", "Pune", "Mumbai"];

let lastCity = cityNames[cityNames.length - 1];
console.log(lastCity);


// problem 95 //

let loginName = "user";
let loginPin = "0000";

if (loginName === "user" && loginPin === "0000") {
  console.log("Access Granted");
} else {
  console.log("Access Denied");
}


// problem 96 //

let rollNumbers = [2, 3, 4];
rollNumbers.unshift(1);

console.log(rollNumbers);


// problem 98 //

for (let counter = 1; counter <= 10; counter += 2) {
  console.log(counter);
}
 

// problem 99 //

let tempResult;

if (tempResult === undefined) {
  console.log("Value is undefined");
}
 

// problem 100 //

for (let countdown = 5; countdown >= 1; countdown--) {
  console.log(countdown);
}


// problem 101 //

let testValue = 25;

if (testValue % 5 === 0) {
  console.log("Multiple of 5");
} else {
  console.log("Not a multiple of 5");
}


// problem 102 //

let totalMarks = [60, 70, 80];
let sumMarks = 0;

for (let position = 0; position < totalMarks.length; position++) {
  sumMarks += totalMarks[position];
}

let averageMarks = sumMarks / totalMarks.length;
console.log(averageMarks);


// problem 103 //

let loginStatus = true;
let statusText = loginStatus.toString();

console.log(statusText);


// roblem 104 //

let messageText = "Learning JavaScript is easy";

if (messageText.includes("JavaScript")) {
  console.log(true);
} else {
  console.log(false);
}


// roblem 105 //

let multiply = 3;

for (let step = 1; step <= 10; step++) {
  console.log(multiply + " x " + step + " = " + (multiply * step));
} 


// problem 106 /

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


// problem 107 //

function calculateGrade(marks) {

  if (marks <= 0) {
    console.log("Invalid Marks");
  } 

  else if (marks < 35) {
    console.log("Fail");
  } 

  else if (marks <= 50) {
    console.log("Grade: C");
  } 

  else if (marks <= 75) {
    console.log("Grade: B");
  } 

  else if (marks <= 90) {
    console.log("Grade: A");
  } 

  else if (marks <= 100) {
    console.log("Grade: A+");
  } 

  else {
    console.log("Marks cannot be more than 100");
  }
}

// function use krun output bgn //
calculateGrade(-5);   
calculateGrade(20);   
calculateGrade(40);   
calculateGrade(65);   
calculateGrade(85);   
calculateGrade(95);   
calculateGrade(120);  



// problem 109//

function discount (amount) 
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

  // test function//
calculateDiscount(-200);  

calculateDiscount(300);  

calculateDiscount(800);  

calculateDiscount(2000);  

calculateDiscount(6000);



// problem 110 //

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

// Call function with input//
checkNumber(userInput);


// problem 111 //

for (let stepCount = 1; stepCount <= 3; stepCount++) {
  console.log(stepCount);
}


// problem 112 //

let checkValue = 0;

if (checkValue === 0) {
  console.log("Zero");
} else {
  console.log("Not Zero");
}


// problem 113 //

function addValues(firstNum, secondNum) {
  return firstNum + secondNum;
}

console.log(addValues(4, 6));


// problem 114 //

let sampleText = "Hello";

for (let charIndex = 0; charIndex < sampleText.length; charIndex++) {
  console.log(sampleText[charIndex]);
}


// problem 115 //

let itemCollection = [1, 2, 3, 4];

if (itemCollection.length > 3) {
  console.log(true);
} else {
  console.log(false);
}


//problem 116 //

let scoreValue = 1;
let booleanResult = Boolean(scoreValue);

console.log(booleanResult);


// problem 117 //

let nameList = ["Ram", "Shyam", "Aman"];

let FoundIndex = nameList.indexOf("Shyam");
console.log(FoundIndex);


// problem 118 //

let queueList = [10, 20, 30];
queueList.shift();

console.log(queueList);
 

// problem 119 //

let firstWord = "js";
let secondWord = "js";

if (firstWord === secondWord) {
  console.log("Same");
} else {
  console.log("Different");
}
 

// problem 120 //

let numberSet = [12, 45, 7, 30];
let largestValue = numberSet[0];

for (let idx = 1; idx < numberSet.length; idx++) {
  if (numberSet[idx] > largestValue) {
    largestValue = numberSet[idx];
  }
}

console.log(largestValue);


// problem 121 //

let textLine = "javascript";
let vowelTotal = 0;

for (let pos = 0; pos < textLine.length; pos++) {
  let letter = textLine[pos];

  if ("aeiou".includes(letter)) {
    vowelTotal++;
  }
}

console.log(vowelTotal);



// problem 122 //

let originalText = "hello";
let reversedText = "";

for (let i = originalText.length - 1; i >= 0; i--) {
  reversedText += originalText[i];
}

console.log(reversedText);


// problem 123 //

let wordInput = "madam";
let reversedWord = "";

for (let i = wordInput.length - 1; i >= 0; i--) {
  reversedWord += wordInput[i];
}

if (wordInput === reversedWord) {
  console.log(true);
} else {
  console.log(false);
}


// problem 124 //

let valueBucket = [5, 10, 15];
let totalSum = 0;

for (let step = 0; step < valueBucket.length; step++) {
  totalSum += valueBucket[step];
}

console.log(totalSum);



// problem 125 //

let mixedValues = [1, 2, 2, 3, 1];
let uniqueValues = [];

for (let k = 0; k < mixedValues.length; k++) {
  if (!uniqueValues.includes(mixedValues[k])) {
    uniqueValues.push(mixedValues[k]);
  }
}

console.log(uniqueValues);



// problem 126 //

let factorialNumber = 5;
let factorialResult = 1;

for (let count = 1; count <= factorialNumber; count++) {
  factorialResult *= count;
}

console.log(factorialResult);
 

// problem 127 //

let primeCandidate = 7;
let isPrimeFlag = true;

for (let div = 2; div < primeCandidate; div++) {
  if (primeCandidate % div === 0) {
    isPrimeFlag = false;
    break;
  }
}

console.log(isPrimeFlag);


// problem 128 //

let scoreArray = [10, 40, 30, 20];
let largestScore = -Infinity;
let secondLargestScore = -Infinity;

for (let p = 0; p < scoreArray.length; p++) {
  if (scoreArray[p] > largestScore) {
    secondLargestScore = largestScore;
    largestScore = scoreArray[p];
  } else if (
    scoreArray[p] > secondLargestScore &&
    scoreArray[p] !== largestScore
  ) {
    secondLargestScore = scoreArray[p];
  }
}

console.log(secondLargestScore);
 

// problem 129 //

let sortedCheckList = [1, 2, 3, 4];
let isSortedFlag = true;

for (let i = 0; i < sortedCheckList.length - 1; i++) {
  if (sortedCheckList[i] > sortedCheckList[i + 1]) {
    isSortedFlag = false;
    break;
  }
}

console.log(isSortedFlag);


// problem 130 //

let aValue = 10;
let bValue = 25;
let cValue = 15;

let biggest = aValue;

if (bValue > biggest) {
  biggest = bValue;
}

if (cValue > biggest) {
  biggest = cValue;
}

console.log(biggest);
 

// problem 131 //

let values = [2, -1, 5, -3, 4];
let positiveCount = 0;

for (let i = 0; i < values.length; i++) {
  if (values[i] > 0) {
    positiveCount++;
  }
}

console.log(positiveCount);


// problem 132 //

let inputList = [1, 2, 3];
let reversedList = [];

for (let i = inputList.length - 1; i >= 0; i--) {
  reversedList.push(inputList[i]);
}

console.log(reversedList);


// problem 134 //

let numberBox = [1, 2, 3, 4, 5, 6];
let evenSum = 0;

for (let i = 0; i < numberBox.length; i++) {
  if (numberBox[i] % 2 === 0) {
    evenSum += numberBox[i];
  }
}

console.log(evenSum);


// problem 135 //

let textValue = "level";
let reverseText = "";

for (let i = textValue.length - 1; i >= 0; i--) {
  reverseText += textValue[i];
}

console.log(textValue === reverseText);


// problem 136 //

let MarksList = [60, 70, 80];
let ToTal = 0;

for (let i = 0; i < MarksList.length; i++) {
  ToTal += MarksList[i];
}

let avg = ToTal / MarksList.length;
console.log(avg);


// problem 137 //

let wordData = "javascript";
let vowelCount = 0;

for (let i = 0; i < wordData.length; i++) {
  if ("aeiou".includes(wordData[i])) {
    vowelCount++;
  }
}

console.log(vowelCount);
 

// problem 138 //

let numS = [-2, 4, -1, 5];
let positives = [];

for (let i = 0; i < numS.length; i++) {
  if (numS[i] >= 0) {
    positives.push(numS[i]);
  }
}

console.log(positives);
 

// problem 139 //

let listData = [10, 20, 30];
let searchValue = 20;
let Foundindex = -1;

for (let i = 0; i < listData.length; i++) {
  if (listData[i] === searchValue) {
    Foundindex = i;
    break;
  }
}

console.log(Foundindex);


// problem 140 //

let nameText = "saurabh";
let result =
  nameText[0].toUpperCase() + nameText.slice(1);

console.log(result);


// problem 141 //

let digitList = [1, 2, 3, 4, 5, 6];
let oddTotal = 0;

for (let i = 0; i < digitList.length; i++) {
  if (digitList[i] % 2 !== 0) {
    oddTotal++;
  }
}

console.log(oddTotal);
 

// problem 142 //

let dataBox = [12, 4, 20, 7];
let smallest = dataBox[0];

for (let i = 1; i < dataBox.length; i++) {
  if (dataBox[i] < smallest) {
    smallest = dataBox[i];
  }
}

console.log(smallest);


// problem 143 //

let inputText = "abc123";
let hasDigit = false;

for (let i = 0; i < inputText.length; i++) {
  if (inputText[i] >= "0" && inputText[i] <= "9") {
    hasDigit = true;
    break;
  }
}

console.log(hasDigit);


// problem 144 //

let firstList = [1, 2];
let secondList = [3, 4];

let mergedList = firstList.concat(secondList);

console.log(mergedList);


// problem 145 //

let numberLine = [1, 2, 3, 4];
let removeItem = 3;
let resultList = [];

for (let i = 0; i < numberLine.length; i++) {
  if (numberLine[i] !== removeItem) {
    resultList.push(numberLine[i]);
  }
}

console.log(resultList);


// problem 146 //

let sentenceLine = "I love Niks";
let spaceCount = 0;

for (let i = 0; i < sentenceLine.length; i++) {
  if (sentenceLine[i] === " ") {
    spaceCount++;
  }
}

console.log(spaceCount);



// problem 147 //

let wordSample = "coding";

let resultWord =
  wordSample[0].toUpperCase() +
  wordSample.slice(1, wordSample.length - 1) +
  wordSample[wordSample.length - 1].toUpperCase();

console.log(resultWord);



// problem 148 //

let testArray = [2, 5, 8, 1];
let allPositive = true;

for (let i = 0; i < testArray.length; i++) {
  if (testArray[i] < 0) {
    allPositive = false;
    break;
  }
}

console.log(allPositive);



/// problem 149 //

let numberList = [8, 3, 5, 1];
let smallestVal = Infinity;
let secondSmallestVal = Infinity;

for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] < smallestVal) {
    secondSmallestVal = smallestVal;
    smallestVal = numberList[i];
  } else if (
    numberList[i] < secondSmallestVal &&
    numberList[i] !== smallestVal
  ) {
    secondSmallestVal = numberList[i];
  }
}

console.log(secondSmallestVal);


// problem 150 //

let textData = "HeLLo";

let upperCount = 0;

for (let i = 0; i < textData.length; i++) {
  if (textData[i] >= "A" && textData[i] <= "Z") {
    upperCount++;
  }
}

console.log(upperCount);


// problem 151 //

let numSeries = [1, 2, 1];
let isSame = true;

for (let i = 0; i < numSeries.length / 2; i++) {
  if (numSeries[i] !== numSeries[numSeries.length - 1 - i]) {
    isSame = false;
    break;
  }
}

console.log(isSame);



// problem 152 //

let messageLine = "I Love Niks";

let resultLine = messageLine.split(" ").join("-");

console.log(resultLine);


// problem 153 //

let dataValues = [2, 3, 4];
let productResult = 1;

for (let i = 0; i < dataValues.length; i++) {
  productResult *= dataValues[i];
}

console.log(productResult);


// problem 154 //

let numbErs = [10, 200, 5];
let longestNum = numbErs[0];

for (let i = 1; i < numbErs.length; i++) {
  if (
    numbErs[i].toString().length >
    longestNum.toString().length
  ) {
    longestNum = numbErs[i];
  }
}

console.log(longestNum);


// problem 155 //

let wordText = "JavaScript";
let startLetter = "J";

console.log(wordText.startsWith(startLetter));
 

// problem 156 //

let startNum = 1;
let endNum = 5;
let rangeList = [];

for (let i = startNum; i <= endNum; i++) {
  rangeList.push(i);
}

console.log(rangeList);


// problem 157 //

let firstData = 5;
let secondData = 10;

let tempStore = firstData;
firstData = secondData;
secondData = tempStore;

console.log(firstData, secondData);



// problem 158 //

let sampleWord = "banana";
let targetLetter = "a";
let countTimes = 0;

for (let i = 0; i < sampleWord.length; i++) {
  if (sampleWord[i] === targetLetter) {
    countTimes++;
  }
}

console.log(countTimes);


// problem 159 //

let Age = prompt("18");


age = Number(Age);

if (Age >= 18) {
    console.log("You can drive.");

} else {
    console.log("You cannot drive yet.");
}


// problem 160//

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

  // test function//
calculateDiscount(-200);  

calculateDiscount(300);  

calculateDiscount(800);  

calculateDiscount(2000);  

calculateDiscount(6000);



/// problem 161 //

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 162 //

for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {
        console.log(i + " is divisible by 3");  
    } else {
        console.log(i + " is not divisible by 3");
    }
}


// problem 163 //

let studentName = "Ravi";
let AGe = 17;
let mark = 55;

console.log("Checking eligibility for: " + studentName);

if (AGe >= 18 && mark >= 50) {
    console.log("Student can appear for exam");

} else if (AGe < 18 && mark >= 50) { 
    console.log("Student too young");

} else if (AGe >= 18 && mark < 50) {
    console.log("Student failed");

} else {
    console.log("Student too young and failed");
}


// problem 164 //

let Num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(Num + " x " + i + " = " + (Num * i)); 
}


// problem 165 //

let Color = ["Red", "Green", "Blue"];

console.log("Array length is:", Color.length);


// problem  166  //

let N = 12;

if (N % 4 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}


// problem 167 //

let inputValue = 4567;
let digitCount = 0;

while (inputValue > 0) {
  inputValue = Math.floor(inputValue / 10);
  digitCount++;
}

console.log(digitCount);


// problem 168 //

let originalNum = 121;
let tempNum = originalNum;
let reverseNum = 0;

while (tempNum > 0) {
  reverseNum = reverseNum * 10 + (tempNum % 10);
  tempNum = Math.floor(tempNum / 10);
}

console.log(originalNum === reverseNum);
 

// problem 169 //

let wordArray = ["hi", "hello", "bye"];
let totalLength = 0;

for (let i = 0; i < wordArray.length; i++) {
  totalLength += wordArray[i].length;
}

let avgLength = totalLength / wordArray.length;
console.log(avgLength);



// problem 170 //

let numericList = [1, 2, 3];
let stringList = [];

for (let i = 0; i < numericList.length; i++) {
  stringList.push(numericList[i].toString());
}

console.log(stringList);
 

// problem 171 //

let dataSet = [0, 1, 0, 2, 3];
let cleanList = [];

for (let i = 0; i < dataSet.length; i++) {
  if (dataSet[i] !== 0) {
    cleanList.push(dataSet[i]);
  }
}

console.log(cleanList);


// problem 172 //

let testText = "Hello";

let onlyLetters = true;

for (let i = 0; i < testText.length; i++) {
  if (
    !(testText[i] >= "A" && testText[i] <= "Z") &&
    !(testText[i] >= "a" && testText[i] <= "z")
  ) {
    onlyLetters = false;
    break;
  }
}

console.log(onlyLetters);


// problen 173 //

let firstArr = [1, 2, 3];
let secondArr = [2, 3, 4];
let commonList = [];

for (let i = 0; i < firstArr.length; i++) {
  if (secondArr.includes(firstArr[i])) {
    commonList.push(firstArr[i]);
  }
}

console.log(commonList);


// problem 174 //

let baseText = "Hi";
let repeatedText = "";

for (let i = 0; i < 3; i++) {
  repeatedText += baseText;
}

console.log(repeatedText);



// problem 175  //

let keyList = ["name", "age"];
let valueList = ["Amit", 25];
let resultObject = {};

for (let i = 0; i < keyList.length; i++) {
  resultObject[keyList[i]] = valueList[i];
}

console.log(resultObject);


// problem 176 //

let valueArray = [0, 0, 5, 3];
let firstNonZero = null;

for (let i = 0; i < valueArray.length; i++) {
  if (valueArray[i] !== 0) {
    firstNonZero = valueArray[i];
    break;
  }
}

console.log(firstNonZero);


// problem 178 //

let textWord = "coding";
let consonantCount = 0;

for (let i = 0; i < textWord.length; i++) {
  if (
    !"aeiou".includes(textWord[i]) &&
    textWord[i] >= "a" &&
    textWord[i] <= "z"
  ) {
    consonantCount++;
  }
}

console.log(consonantCount);


// problem 179 //

let givenNum = 123;
let reversedNum = 0;

while (givenNum > 0) {
  reversedNum = reversedNum * 10 + (givenNum % 10);
  givenNum = Math.floor(givenNum / 10);
}

console.log(reversedNum);



// problem 180 //

let lineText = "I love JS";
let charCount = 0;

for (let i = 0; i < lineText.length; i++) {
  if (lineText[i] !== " ") {
    charCount++;
  }
}

console.log(charCount);



// problem 181 //

let fullName = "Saurabh Lanjewar";
let nameParts = fullName.split(" ");

let initials =
  nameParts[0][0] + nameParts[1][0];

console.log(initials);



// problem  182 //

let mixedData = [1, 2, 3];
let allNumbers = true;

for (let i = 0; i < mixedData.length; i++) {
  if (typeof mixedData[i] !== "number") {
    allNumbers = false;
    break;
  }
}

console.log(allNumbers);


// problem 183 //

let dataList = [10, 20, 30, 40, 50];

let middleIndex = Math.floor(dataList.length / 2);
console.log(dataList[middleIndex]);



// problem 184 //

let sentenceData = "JavaScript is fun";

let WordArray = sentenceData.split(" ");

console.log(WordArray);



// problem 185 //

let numbersPack = [1, 4, 7, 8, 9, 10];
let lastEven = null;

for (let i = numbersPack.length - 1; i >= 0; i--) {
  if (numbersPack[i] % 2 === 0) {
    lastEven = numbersPack[i];
    break;
  }
}

console.log(lastEven);



// problem 186 //

let numList = [2, -3, 4, -1];
let negativeTotal = 0;

for (let i = 0; i < numList.length; i++) {
  if (numList[i] < 0) {
    negativeTotal++;
  }
}

console.log(negativeTotal);


// problem 187 //

let TextValue = "hello";

let isLower = TextValue === TextValue.toLowerCase();
console.log(isLower);


// problem 188 //

let evenNums = [2, 3, 4, 5, 6];
let sumEven = 0;

for (let i = 0; i < evenNums.length; i++) {
  if (evenNums[i] % 2 === 0) {
    sumEven += evenNums[i];
  }
}

console.log(sumEven);


// problem 189 //

let MessageLine = "I love coding";

let newLine = MessageLine.replaceAll(" ", "-");
console.log(newLine);



// problem 190 //

let ScoreList = [10, 20, 30];
let tOtal = 0;

for (let i = 0; i < ScoreList.length; i++) {
  tOtal += ScoreList[i];
}

let average = tOtal / ScoreList.length;
console.log(average);


// problem 191 //

let checkNum = 25;

if (checkNum % 5 === 0) {
  console.log(true);
} else {
  console.log(false);
}


// problem 192 //


let sentenceValue = "javascript is cool";

let resultText =
  sentenceValue[0].toUpperCase() +
  sentenceValue.slice(1);

console.log(resultText);


// problem 193 //

let textline = "I love Niks";

let words = textline.split(" ");
console.log(words.length);


// problem 194 //

let myList = [1, 2, 3];

if (myList.length % 2 === 0) {
  console.log("Even Length");
} else {
  console.log("Odd Length");
}



// problem 195 //

let Values = [3, -2, 5, -1, 4];
let positiveSum = 0;

for (let i = 0; i < Values.length; i++) {
  if (Values[i] > 0) {
    positiveSum += Values[i];
  }
}

console.log(positiveSum);



// problem 196 //

let WordText = "apple";
let firstChar = WordText[0].toLowerCase();

if ("aeiou".includes(firstChar)) {
  console.log(true);
} else {
  console.log(false);
}


// problem 197 //

let baseArray = [2, 4, 6];
let newArray = [];

for (let i = 0; i < baseArray.length; i++) {
  newArray.push(baseArray[i] * 2);
}

console.log(newArray);


// problem 198 //

let myNumbers = [5, 10, 15];

myNumbers.shift();
console.log(myNumbers);


// problem 199 //

let checkWord = "level";
let reversed = checkWord.split("").reverse().join("");

console.log(checkWord === reversed);


// problem 200  //

let sentence = "I love JavaScript coding";
let Words = sentence.split(" ");
let longest = Words[0];

for (let i = 1; i < Words.length; i++) {
  if (Words[i].length > longest.length) {
    longest = Words[i];
  }
}

console.log(longest);


// problem 201 //

let myNum = 50;
let Result = String(myNum);

console.log(Result);


// problem 202 //

let sampleArr = [];

if (sampleArr.length === 0) {
  console.log("Empty Array");
} else {
  console.log("Not Empty");
}


// problem 203 //

let AValue = 5;
let BValue = 10;

let temp = AValue;
AValue = BValue;
BValue = temp;

console.log(AValue, BValue);


// problem 204 //

let inputLine = "HeLLo";
let UpperCount = 0;

for (let i = 0; i < inputLine.length; i++) {
  if (inputLine[i] >= "A" && inputLine[i] <= "Z") {
    UpperCount++;
  }
}

console.log(UpperCount);



 // problem 205 //

 let NumSeries = [2, 3, 4];
let squareList = [];

for (let i = 0; i < NumSeries.length; i++) {
  squareList.push(NumSeries[i] * NumSeries[i]);
}

console.log(squareList);



// poblem 206 //

let InputLine = "HeLLo";
let Uppercount = 0;

for (let i = 0; i < InputLine.length; i++) {
  if (InputLine[i] >= "A" && InputLine[i] <= "Z") {
    upperCount++;
  }
}

console.log(upperCount);


// problem 207 //

let testNum = 7;
let isPrime = true;

if (testNum <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i < testNum; i++) {
    if (testNum % i === 0) {
      isPrime = false;
      break;
    }
  }
}

console.log(isPrime);


// problem 208 //

let SampleText = "javascript";
let VowelCount = 0;

for (let i = 0; i < SampleText.length; i++) {
  if ("aeiou".includes(SampleText[i])) {
    VowelCount++;
  }
}

console.log(VowelCount);


// problem 209 //

let NumberSet = [1, 2, 3];
let reversedArr = [];

for (let i = NumberSet.length - 1; i >= 0; i--) {
  reversedArr.push(NumberSet[i]);
}

console.log(reversedArr);


// problem 210 //

let dataNums = [10, 40, 30, 20];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < dataNums.length; i++) {
  if (dataNums[i] > largest) {
    secondLargest = largest;
    largest = dataNums[i];
  } else if (
    dataNums[i] > secondLargest &&
    dataNums[i] !== largest
  ) {
    secondLargest = dataNums[i];
  }
}

console.log(secondLargest);


// problem 211 //

let sentenceCheck = "Hello.";

console.log(sentenceCheck.endsWith("."));


// problem 212 //

let colorsList = ["red", "blue", "green"];

let ResultText = colorsList.join(", ");

console.log(ResultText);


// problem 213 //

let valueCheck = 15;

if (valueCheck >= 10 && valueCheck <= 20) {
  console.log(true);
} else {
  console.log(false);
}


/// problem 214 //

let numarray = [2, 5, 8, 10];
let isSorted = true;

for (let i = 0; i < numarray.length - 1; i++) {
  if (numarray[i] > numarray[i + 1]) {
    isSorted = false;
    break;
  }
}

console.log(isSorted);


// problem 215 //

let myNumber = 4567;
let DigitCount = 0;

while (myNumber > 0) {
  DigitCount++;
  myNumber = Math.floor(myNumber / 10);
}

console.log(DigitCount);


// problem 216 //

let fruitsArr = ["apple", "banana", "mango"];
let searchItem = "banana";
let foundindex = -1;

for (let i = 0; i < fruitsArr.length; i++) {
  if (fruitsArr[i] === searchItem) {
    foundindex = i;
    break;
  }
}

console.log(foundindex);


// problem 217 //

let worddata = "Hello";
let newWord = worddata.slice(0, -1);

console.log(newWord);


// problem 218 //

let numberArr = [1, 3, 7, 8];
let hasEven = false;

for (let i = 0; i < numberArr.length; i++) {
  if (numberArr[i] % 2 === 0) {
    hasEven = true;
    break;
  }
}

console.log(hasEven);


// problem 219 //

let textSample = "HELLO";

let Resul = textSample.toLowerCase();
console.log(Resul);


// problem 220 //

let tableNum = 5;

for (let i = 1; i <= 10; i++) {
  console.log(tableNum + " x " + i + " = " + (tableNum * i));
}


// problem 221 //

let DataNums = [3, 5, 8, 9];
let firstEven = null;

for (let i = 0; i < DataNums.length; i++) {
  if (DataNums[i] % 2 === 0) {
    firstEven = DataNums[i];
    break;
  }
}

console.log(firstEven);


// problem 222 //

let NumList = [1, 2, 3];
let strList = [];

for (let i = 0; i < NumList.length; i++) {
  strList.push(String(NumList[i]));
}

console.log(strList);


// problem 223 //

let Item = [1, 2, 2, 3];
let uniqueItems = [];

for (let i = 0; i < Item.length; i++) {
  if (!uniqueItems.includes(Item[i])) {
    uniqueItems.push(Item[i]);
  }
}

console.log(uniqueItems);


// problem 224 //

let Sentence = "Hello World";

console.log(Sentence.includes(" "));


// problem 225 //

let numValue = 5;
let fact = 1;

for (let i = 1; i <= numValue; i++) {
  fact *= i;
}

console.log(fact);


// problem 226 //

let Number = [5, 2, 9, 1];
let Max = Number[0];
let Min = Number[0];

for (let i = 1; i < Number.length; i++) {
  if (Number[i] > Max) Max = Number[i];
  if (Number[i] < Min) Min = Number[i];
}

console.log(Max, Min);


// problem 227 //

let boolArr = [true, false, true];
let trueCount = 0;

for (let i = 0; i < boolArr.length; i++) {
  if (boolArr[i] === true) {
    trueCount++;
  }
}

console.log(trueCount);


// problem 228 //

let word = "Hi";
let times = 3;
let Results = "";

for (let i = 0; i < times; i++) {
  Results += word;
}

console.log(Results);


// problem 229 //

let numss = [5, 9, 3];
let Largest = nums[0];
let index = 0;

for (let i = 1; i < numss.length; i++) {
  if (numss[i] > Largest) {
    Largest = numss[i];
    index = i;
  }
}

console.log(index);


// problem 230 //

let celsius = 25;
let fahrenheit = (celsius * 9) / 5 + 32;

console.log(fahrenheit);


// problem 231 //

let Text = "";

console.log(Text.length === 0);


// problem 232 //

let numberData = 123;
let sum = 0;

while (numberData > 0) {
  sum += numberData % 10;
  numberData = Math.floor(numberData / 10);
}

console.log(sum);


// problem 233 //

let TextData = "hello";
let Reversed = "";

for (let i = TextData.length - 1; i >= 0; i--) {
  Reversed += TextData[i];
}

console.log(Reversed);


// problem 234  //

let CheckValue = 16;
let isPerfectSquare = false;

for (let i = 1; i * i <= CheckValue; i++) {
  if (i * i === CheckValue) {
    isPerfectSquare = true;
    break;
  }
}

console.log(isPerfectSquare);


// problem 235 //

let numData = 24831;
let evenDigitCount = 0;

while (numData > 0) {
  let digit = numData % 10;
  if (digit % 2 === 0) {
    evenDigitCount++;
  }
  numData = Math.floor(numData / 10);
}

console.log(evenDigitCount);


// problem 236 //

let arrOne = [1, 2, 3];
let arrTwo = [2, 3, 4];
let common = [];

for (let i = 0; i < arrOne.length; i++) {
  if (arrTwo.includes(arrOne[i])) {
    common.push(arrOne[i]);
  }
}

console.log(common);


// problem 237 //

let inputStr = "javascript";
let resultStr = "";

for (let i = 0; i < inputStr.length; i++) {
  if (!"aeiou".includes(inputStr[i])) {
    resultStr += inputStr[i];
  }
}

console.log(resultStr);
 

// problem 238 //

let dataArr = [1, 2, 3, 2];
let hasDuplicate = false;

for (let i = 0; i < dataArr.length; i++) {
  for (let j = i + 1; j < dataArr.length; j++) {
    if (dataArr[i] === dataArr[j]) {
      hasDuplicate = true;
      break;
    }
  }
}

console.log(hasDuplicate);


