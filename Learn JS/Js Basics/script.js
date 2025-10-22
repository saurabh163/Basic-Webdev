//if-else problem try

let marks = 85; 

 if (marks >= 90) 
    console.log(" Grade A ");

  else if (marks >= 75) 
    console.log(" Grade B ");

  else if (marks >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 

// re-assigment problem try

let Balance = 5000;   
let Withdraw = 3000;  

if (withdraw <= balance) {
    console.log("Transaction Successful");
    balance = balance - withdraw;  
    console.log("Remaining Balance: " + balance);
} else {
    console.log("Insufficient Balance");
}


// login system problem 

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



//atm withdraw problem


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


// variabel revise problem


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


// 2 variable complicate problemm 

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


// result cheqk problem


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


// tiket booking problem 


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

//travel fare problem 


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

// start function problem 


function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}
// function callkrna jaruri hai varna out put nai yet //

checkDriving(16); 
checkDriving(20); 


// chekar function problem 

// function dicliare//
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



//grade calcultor problem 


//fuction dicliiar kel//
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


// function electeic bill calculetor 


//fuction dicliar karne//
function calculateBill(units) {
  let bill = 0;

  if (units <= 0) {
    console.log("Invalid Units");
  } 

  else if (units <= 100) {
    bill = units * 5;
    console.log("Your Bill");
  } 

  else if (units <= 200) {
    bill = units * 7;
    console.log("Your Bill");
  }

  else if (units <= 300) {
    bill = units * 10;
    console.log("Your Bill");
  } 

  else {
    bill = units * 12;
    console.log("Your Bill");
  }
}

// function test karne//
calculateBill(-10);  
calculateBill(80);   
calculateBill(150);  
calculateBill(250);  
calculateBill(400);  


//shoping discount calculate problem

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



// fuction number tyape check

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

let userInput = prompt("Enter a number:");

// Call function with input//
checkNumber(userInput);


// new age chek problem try 

let age = prompt("18");


age = Number(age);

if (age >= 18) {
    console.log("You can drive.");

} else {
    console.log("You cannot drive yet.");
}


//grade check function problem

function checkGrade(marks) {
    let grade;

    if (marks >= 90) {
        grade = "A";

    } else if (marks >= 70) {
        grade = "B";

    } else if (marks >= 50) {
        grade = "C";

    } else {
        grade = "Fail";
    }

    console.log("Your grade is: " + grade);
}

// test the function work//
let studentMarks = 65; 
checkGrade(studentMarks);


// shoping discount problem


function calculateDiscount(billAmount) {
    let discount = 0;

    if (billAmount >= 5000) {
        discount = 0.20;

    } else if (billAmount >= 2000) {
        discount = 0.10;

    } else if (billAmount >= 1000) {
        discount = 0.05;

    } else {
        discount = 0;
    }

    console.log("Original Bill");
    console.log("Discount Applied");
    console.log("Final Price");
}

// Test function  
let myBill = 3200;
calculateDiscount(myBill);

// for loop try  


for (let i = 1; i <= 10; i++) {
    console.log("Number: " + i);
}


// for loop chek even-odd num

let Num = 5;  

for (let i = 1; i <= 10; i++) {
    let result = num * i;

    if (result % 2 === 0) {
        console.log(result + " is EVEN");

    } else {
        console.log(result + " is ODD");
    }
}


// student function and forloop use 

function checkResults(marksList) {

    for (let i = 0; i < marksList.length; i++) {
        let marks = marksList[i];

        if (marks >= 90) {
            console.log("Student " + (i+1) + ": Grade A");

        } else if (marks >= 70) {
            console.log("Student " + (i+1) + ": Grade B");

        } else if (marks >= 50) {
            console.log("Student " + (i+1) + ": Grade C ");

        } else {
            console.log("Student " + (i+1) + ": Fail ");
        }
    }
}

// Test  function
let studentsMarks = [95, 82, 67, 45, 100];
checkResults(studentsMarks);


// labry books short problrm 


function borrowBooks(userLimit, booksRequested) {
    let borrowed = 0;

    for (let i = 0; i < booksRequested.length; i++) {
        let req = booksRequested[i];

        if (req <= 0) {
            console.log("Request " + (i+1) + ": Invalid request");

        } else if (borrowed + req > userLimit) {
            console.log("Request " + (i+1) + ": Request denied (limit exceeded)");
            
        } else {
            borrowed += req;
            console.log("Request " + (i+1) + ": Borrowed " + req + " books ");
            console.log("Now total borrowed: " + borrowed);
        }

        console.log("--------------------------------");
    }
}

// Test function 
let limit = 5; 
let requests = [2, 0, 3, 1, 2];
borrowBooks(limit, requests);



//exam scoring problem 


function calculateScore(answers) {
    let score = 0;

    for (let i = 0; i < answers.length; i++) {
      
        if (answers[i] === "correct") {
            score += 4;
            console.log("Q" + (i+1) + ": Correct (+4)");

        } else if (answers[i] === "wrong") {
            score -= 1;
            console.log("Q" + (i+1) + ": Wrong (-1)");

        } else {
            console.log("Q" + (i+1) + ": Invalid Answer (No marks)");
        }
        console.log("Current Score: " + score);
        console.log("-------------------------");
    }

    console.log("Final Score = " + score);

    if (score < 0) {
        console.log("Better luck next time");

    } else {
        console.log("Good job");
    }
}

// Test function
let studentAnswers = ["correct", "wrong", "correct", "wrong", "wrong", "correct"];
calculateScore(studentAnswers);



//grocery bill

function generateBill(items) {
    let grandTotal = 0;

    console.log("------ Grocery Bill ------");

    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        let total = item.quantity * item.price;
        grandTotal += total;

        console.log(
            item.name + " - " + item.quantity + " × ₹" + item.price + " = ₹" + total
        );
    }

    console.log("--------------------------");
    console.log("Grand Total = ₹" + grandTotal);

    // Apply discount
    let discount = 0;
    if (grandTotal > 1000) {
        discount = grandTotal * 0.1;
        console.log("10% Discount Applied = ₹" + discount);

    } else if (grandTotal >= 500) {
        discount = grandTotal * 0.05;
        console.log("5% Discount Applied = ₹" + discount);

    } else {
        console.log("No Discount Applied");
    }

    let finalAmount = grandTotal - discount;
    console.log("Final Payable Amount = ₹" + finalAmount);
}

// Test function

let cart = [
    { name: "Rice", quantity: 2, price: 60 },
    { name: "Oil", quantity: 1, price: 150 },
    { name: "Milk", quantity: 5, price: 40 },
    { name: "Sugar", quantity: 3, price: 50 }
];

generateBill(cart);


// posotive negative num problem

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


// voting elagibility problem

function checkVoting(ages) {

    for (let i = 0; i < ages.length; i++) {
        let age = ages[i];

        if (age >= 18) {
            console.log("Person " + (i+1) + ": Eligible to Vote");

        } else {
            console.log("Person " + (i+1) + ": Not Eligible");
        }
    }
}

checkVoting([12, 18, 25, 16, 40]);


// Multiplication revise

function multiplicationTable(num) {

    for (let i = 1; i <= 10; i++) {
        console.log(num + " × " + i + " = " + (num * i));
    }
}

multiplicationTable(5); 



//  some of number loop problem


function sumOfNumbers(N) {
    let sum = 0;

    for (let i = 1; i <= N; i++) {
        sum += i;  
    }

    console.log("Sum of numbers from 1 to " + N + " = " + sum);
}

sumOfNumbers(10);  


// even odd number problem 

function countEvenOdd(N) {
    let evenCount = 0; 
    let oddCount = 0;  

    for (let i = 1; i <= N; i++) {

        if (i % 2 === 0) {
            console.log(i + " is Even");
            evenCount++;
            
        } else {
            console.log(i + " is Odd");
            oddCount++;
        }
    }

    console.log("Total Even Numbers");
    console.log("Total Odd Numbers");
}

countEvenOdd(10); 

// revers count problem

function reverscounting(){
  for(let i = 10; i >= 1; i--){
    console.log(i);
  }
}

reverscounting();

// big maltipication problem

function bigMultiplicationTable(num) {
  
    for (let i = 1; i <= 20; i++) {
        console.log(num + " × " + i + " = " + (num * i));
    }
}

bigMultiplicationTable(7);



// array problem

function findLargestNumber(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    console.log("The largest number is: " + largest);
}

// Test arr
findLargestNumber([12, 45, 7, 89, 23, 56]);



// 10 revies problem ivariable if-else for loop

//problem 1 variable kause krke sum krna

 let a = 10;
 let b = 20;
 let sum = a + b;
   console.log("Sum =", sum);

// problem 2 even odd number chek krna 

  let num = 7;

    if (num % 2 === 0) {
      console.log("Even");

}   else {
      console.log("Odd");
}

// problem 3 bada number print krna 

let x = 15;
let y = 25;

 if (x > y) {
    console.log("Largest =", x);
} else {
    console.log("Largest =", y);
}

// problem 4 for loop se number print 

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// problem 5 multiplya krke tabel print kkrna 

for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}


// problem 6 for loop reverse number print

for (let i = 10; i >= 1; i--) {
  console.log(i);
}


// problem 7 positeve negative number check if-else

let numb = -3;

  if (numb > 0) {
    console.log("Positive");

} else if (numb < 0) {
    console.log("Negative");

} else {
    console.log("Zero");
}


//problem 8 even number print with for loop

for (let i = 1; i <= 20; i++) {

  if (i % 2 === 0) {
    console.log(i);
  }
}


// problem 9 for loop sum problem 

let Sum = 0;

for (let i = 1; i <= 10; i++) {
  Sum += i; // iska mtlb ki sum hone ke bad sum + i ki value //
}

console.log("Sum =", sum);


// problem 10 factrial of a number with for loop 

let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i; // iska mtlb ki aane wali value ko multiply i se krna //
}

console.log("Factorial =", fact);

// arr   use krun possitive nigetive number print karana 

let arr = [2, -5, 0, 8, -1];

for (let i = 0; i < arr.length; i++) {

    if (arr[i] > 0) {
        console.log(arr[i] + " is Positive");

    } else if (arr[i] < 0) {
        console.log(arr[i] + " is Negative");
        
    } else {
        console.log(arr[i] + " is Zero");
    }
}

// forloop even odd number 

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}

// forloop divide 

for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {
        console.log(i + " is divisible by 3");
        
    } else {
        console.log(i + " is not divisible by 3");
    }
}

// student exam de sakte ki nai chek with if-else

  let studentName = "Ravi";
let Age = 17;
let mark = 55;

console.log("Checking eligibility for: " + studentName);

if (Age >= 18 && mark >= 50) {
    console.log("Student can appear for exam");

} else if (Age < 18 && mark >= 50) {
    console.log("Student too young");

} else if (Age >= 18 && mark < 50) {
    console.log("Student failed");

} else {
    console.log("Student too young and failed");
}



//arr se even number print problem

let numbers = [1,2,3,4,5,6,7,8,9,10];

console.log("Even numbers in the array:");

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {   
        console.log(numbers[i]);
    }
}

// student pass fail check krna with arr

let Mark = [35, 60, 25, 80, 55];

console.log("Students Result:");

for (let i = 0; i < Mark.length; i++) {

    if (Mark[i] >= 40) {
        console.log("Student " + (i+1) + ": Pass (Mark = " + Mark[i] + ")");
        
    } else {
        console.log("Student " + (i+1) + ": Fail (Mark = " + Mark[i] + ")");
    }
}


// student grde pass chek problem if else

  let StudentName = "Ravi";
  let score = 68;   

     console.log("Student: " + StudentName);
     console.log("score: " + score);

if (score >= 90) {
     console.log("Grade: A");
     console.log("Status: Pass");

} else if (score >= 75) {
     console.log("Grade: B");
     console.log("Status: Pass");

} else if (score >= 50) {
     console.log("Grade: C");
     console.log("Status: Pass");

} else if (score >= 35) {
     console.log("Grade: D");
     console.log("Status: Pass");

} else {
     console.log("Grade: None");
     console.log("Status: Fail");
}


// if else problem

let Score = parseInt(prompt("Enter your marks:"));

if (Score > 100 || Score < 0) {
    console.log("Invalid Marks");

  } else if (Score >= 90) {
    console.log("Grade A");

} else if (Score >= 75) {
    console.log("Grade B");

} else if (Score >= 50) {
    console.log("Grade C");

} else if (Score >= 33) {
    console.log("Grade D");

} else {
    console.log("Fail");
}


//for loop problem

let m = parseInt(prompt("Enter a number:"));

let evenSum = 0;
let oddSum = 0;

for (let i = 1; i <= m; i++) {
    if (i % 2 === 0) {
        evenSum += i;   // ye even number add krnar
        
    } else {
        oddSum += i;    // ha odd number add krar 
    }
}

console.log("Sum of even numbers: " + evenSum);
console.log("Sum of odd numbers: " + oddSum);

// for loop 

for (let i = 1; i <= 50; i++) {

    if (i % 2 === 0) { // % this is modulus operator 
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// or oprator use

let s = 10;

if (s > 5 || s < 3) {  // || or oprater iska use do condition ko chek krke output deta hai
    console.log("Condition True");

} else {
    console.log("Condition False");
}


// arr se input and output nikalna 

let arry = [];

for (let i = 0; i < 5; i++) { // this line tell her to 5 numbers input

  let num = parseInt(prompt("Enter number:"));
  arr.push(num);
}

console.log("Array elements are:");
for (let n of arry) {   // this line to print the numbers
  console.log(n);
}


// arr sum 

let Arr = [10, 20, 30, 40, 50];
let totl = 0;

for (let num of Arr) {
  totl += num;
}

console.log("totl of array elements =", totl);


// maximum number find in arry

let are = [12, 45, 2, 67, 34];
let maxNum = arr[0];

for (let num of are) {

  if (num > maxNum) {
    maxNum = num;
  }
}

console.log("Maximum number is:", maxNum);



// arr revorse 

let A = [1, 2, 3, 4, 5];

console.log("Original array:", A);
console.log("Reversed array:", A.reverse());



// count even and odd in arr

let ARR = [10, 21, 32, 43, 54];

let evenCount = 0;
let oddCount = 0;

for (let num of ARR) {

  if (num % 2 === 0) { // remainder oprator chek 
    evenCount++;
  } else {

    oddCount++;
  }
}

console.log("Even numbers:", evenCount);
console.log("Odd numbers:", oddCount);


// wether chek with if else


  let temp = parseFloat(prompt("Enter the current temperature in Celsius:"));

if(temp >= 30){
    alert("It’s hot! Wear light clothes");

} else if(temp >= 20 && temp < 30){
    alert("Nice weather! Enjoy");

} else {
    alert("It’s cold! Wear warm clothes");
}


// even odd chek with if else 

  let N = parseInt(prompt("Enter a number:"));

if(N % 2 === 0){
    alert("Number is even");
    
} else {
    alert("Number is odd");
}

//temprature chek

let Temp = parseFloat(prompt("Enter temperature in °C:"));

if(Temp >= 30){
    alert("It’s hot");

} else if(Temp >= 20){
    alert("Nice weather");

} else {
    alert("It’s cold");
}
   


//  if else try  

let vay = 16; // yaha tum khud age badal ke check kar sakte ho

if (vay >= 18) {
    console.log("You are eligible to vote");

} else {
    console.log("You are not eligible to vote");
}




// arrye problem solve 


function findMax(numbers) {
    let max = numbers[0]; // guess the fist numbr is a big number 

    for (let i = 1; i < numbers.length; i++) { // use a for loop

        if (numbers[i] > max) {
            max = numbers[i]; // the mennig is if big numbar mila to add kr dena 
        }
    }

    return max;  // the line is return a big number 
}

let result = findMax([2, 7, 4, 9, 1]); // i creat aar for a final call
console.log("Largest number is:", result);



// if else problem 

let number = 7; 

if (number % 2 === 0) {   // modulos operator use  for divide 
    console.log("Even number");

} else {
    console.log("Odd number");
}


// arry problem

let Numbers = [10, 20, 30, 40, 50]; // i create a one arry

for (let i = 0; i < Numbers.length; i++) { // total lenght how number in arry
    console.log("Numbers at index", i, "is:", Numbers[i]);
}


// print even number with use of arry 

let Number = [5, 12, 7, 8, 3, 10]; 

for (let i = 0; i < Number.length; i++) { // how many total munber in the arr 

    if (Number[i] % 2 === 0) { // check number with modulas oprator
        console.log("Even number:", Number[i]);
    }
}


// all number sum with help of arry

function sumArray(numbers) {
    let sum = 0; //this variable store a sum of number 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // they sad all number add in sum
    }

    return sum; // they sad final result ki sum
}

// use function call
let Result = sumArray([2, 4, 6, 8]);
console.log("Sum of array is:", result);


// arr even odd number 

let NBR = [2, 5, 8, 7, 10, 3]; 

let EvenCount = 0; // this for even number count
let OddCount = 0;  // this for odd number count

for (let i = 0; i < NBR.length; i++) {

    if (NBR[i] % 2 === 0) { // modulor oprator for chek number 
        EvenCount++;

    } else {
       OddCount++;
    }
}

console.log("Even numbers count:", EvenCount);
console.log("Odd numbers count:", OddCount);


//arr lenghth  que 

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First fruit:", fruits[0]); 

console.log("Last fruit:", fruits[fruits.length - 1]); // in this problem i use a arry length proprty 

console.log("Middle fruit:", fruits[2]);


// one more lenghth que

let students = ["Aman", "Saurabh", "Riya", "Kunal", "Priya"];

console.log("Total students:", students.length); // the lenghth in this arrr is 5

console.log("First student:", students[0]); 

console.log("Last student:", students[students.length - 1]); 


// largest numbe find with if else

  let S = 15;
let Ni = 20;

if (a > b) {
    console.log("a is greater");

} else if (b > a) {
    console.log("b is greater");

  } else {
    console.log("Both are equal");
}



// if else 

  let Aage = 16; 

if (Aage >= 18) {
    console.log("You are an adult");

} else {
    console.log("You are a minor");
}


// iff  else 

  let nbr = 11;

if (nbr % 2 === 0) { // modulor oprator
    console.log("Even");

} else {
    console.log("Odd");
}



// smalest value 

let value = [15, 7, 22, 3, 18];
let smallest = value[0]; // this line is for fst number assum is small 

for (let i = 1; i < value.length; i++) {

    if (value[i] < smallest) {
        smallest = value[i]; // in this case small valu find to update value 
    }
}

console.log("Smallest value is:", smallest);



// arry que 

let Fruits = ["sef", "kel", "aamba", "santra"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



// are que 

let colors = ["Red", "Green", "Blue", "Yellow", "rasian color"];

let firstColor = colors[0]; // this line code give as fist element in the arr
let lastColor = colors[colors.length - 1]; // this line code give as last index use  last elemet acess krta hai

console.log("First color is:", firstColor);
console.log("Last color is:", lastColor);



// if else

  let Mrk = 72;

if (Mrk >= 90 && Mrk <= 100) {
    console.log("Grade: A+");

} else if (Mrk >= 75 && Mrk < 90) {
    console.log("Grade: A");

} else if (Mrk >= 60 && Mrk < 75) {
    console.log("Grade: B");

} else if (Mrk >= 45 && Mrk < 60) {
    console.log("Grade: C");

} else if (Mrk >= 33 && Mrk < 45) {
    console.log("Grade: D");

} else if (Mrk >= 0 && Mrk < 33) {
    console.log("Grade: Fail");
    
} else {
    console.log("Invalid Marks");
}


// arry remaind

let nbrs = [1, 2, 3, 4, 5];

for (let i = 0; i < nbrs.length; i++) {
    console.log(nbrs[i]);
}


// tru false 

let nambr = 8;

if (nunambrm > 10) {
    console.log("True");

} else {
    console.log("False");
}


// true false 


let Numbr = 7;

if (Numbr % 2 === 0) {  /// in this line modulos oprator use huwa hai 
    console.log("True");

} else {
    console.log("False");
}



// own create problem


let hate = 10;
let love = 20;

if (a === b) {
    console.log("True");

} else {
    console.log("False");
}




// problem 01

let cities = ["nagpur", "Mumbai", "shegao", "wardha"];

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}



// problem 02

let Value = 120;

if (Value >= 100) {
    console.log("True");

} else {
    console.log("False");
}



// problem 03

let colour = 100;

if (colour >= 90) {
    console.log("Grade A");

} else if (colour >= 75) {
    console.log("Grade B");

} else if (colour >= 50) {
    console.log("Grade C");

} else if (colour >= 33) {
    console.log("Grade D");

} else {
    console.log("Fail");
}





// problem  04 
 
let NBRS = [12, 45, 67, 23, 89, 5, 34];

let largest = NBRS[0];  // assume the first element is a large number

for (let i = 1; i < NBRS.length; i++) {  /// i use a Comparison operator 

    if (NBRS[i] > largest) {
        largest = NBRS[i];
    }
}

console.log("Largest number is:", largest);




// problem 05 

let numbErs = [2, 7, 8, 11, 14, 21, 30];

let evencount = 0;

for (let i = 0; i < numbErs.length; i++) {
    if (numbErs[i] % 2 === 0) { /// modulos oprator use in the problem
        evencount++;
    }
}

console.log("Total even numbErs are:", evencount);




// problem 06

let nuMbers = [3, 6, 9, 12, 15, 18];

for (let i = 0; i < nuMbers.length; i++) {

    if (nuMbers[i] % 2 !== 0) { // modulos oprator use
        console.log(nuMbers[i]);
    }
}



// problem 01

let fruIts = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First fruit is:", fruIts[0]);
console.log("Last fruit is:", fruIts[fruIts.length - 1]);




//problem 02

let numbRs = [10, 20, 30, 40, 50];

for (let i = numbRs.length - 1; i >= 0; i--) {
    console.log(numbRs[i]);
}



// problem 03 

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < nums.length; i++) {

    if (nums[i] % 2 === 0) {
        evenNumbers.push(nums[i]); // pushh for new element add krne ke liye 

    } else {
        oddNumbers.push(nums[i]);
    }
}

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);




/// problem 04 


let frUits = ["Apple", "Bnana", "Mango"];

for (let i = 0; i < frUits.length; i++) {
    console.log(frUits[i]);
}




// problem 05 

let numS = -15;

if (numS > 0) {
    console.log("True Number is Positive");

} else if (numS < 0) {
    console.log("True Number is Negative");

} else if (numS === 0) {
    console.log("True  Number is Zero");

} else {
    console.log("False Invalid Input");
}



// problem 06 

let agE = 45;

if (agE <= 0) {
    console.log("Invalid Age");

} else if (agE < 5) {
    console.log("Free Ticket");

} else if (agE >= 5 && agE < 18) {
    console.log("Child Ticket 50 Rs");

} else if (agE >= 18 && agE < 60) {
    console.log("Adult Ticket 100 Rs");

} else {
    console.log("Senior Citizen Ticket 70 Rs");
}


// problem 07

let nUms = 9;

if (nUms % 2 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}




//if-else problem try

let markS = 85; 

 if (markS >= 90) 
    console.log(" Grade A ");

  else if (markS >= 75) 
    console.log(" Grade B ");

  else if (markS >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 



  // // login system problem 

let usernaMe = "saurabh";   

let passwOrd = "@niks";    

if (!username || !password) {
  console.log("Please enter username and password!");
} 

else if (username === "saurabh" && password === "niks") {
  console.log("Login Successful ");
} 

else if (username !== "saurabh") {
  console.log("Invalid Username ");
} 

else if (password !== "niks") {
  console.log("Invalid Password ");
}


//// forloop even odd number 

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}



// variables and if else

let W = 20;
let G = 10;
let operation = "add";

if (operation === "add") {
    console.log("Result is:", W + G); ///IN THIS CODE USE Arithmetic operators 

} else if (operation === "sub") {
    console.log("Result is:", W - G);

} else {
    console.log("Invalid Operation");
}


//// re-assigment problem try

let BalanCe = 5000;   
let WIthdraw = 3000;  

if (WIthdraw <= BalanCe) {
    console.log("Transaction Successful");

    balance = BalanCe - WIthdraw;  
    console.log("Remaining BalanCe: " + BalanCe);
    
} else {
    console.log("Insufficient BalanCe");
}




///   even odd 
let nUMs = 6;

if (nUMs % 2 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}



// for loop 

let numB = 7;

for (let i = 1; i <= 10; i++) {
    console.log(numB + " x " + i + " = " + (numB * i));
}
