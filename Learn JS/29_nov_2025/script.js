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


