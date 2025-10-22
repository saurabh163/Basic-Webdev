// problem  01
 
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


///// problem 02 

let age = prompt("18");


age = Number(age);

if (age >= 18) {
    console.log("You can drive.");

} else {
    console.log("You cannot drive yet.");
}



// problem 03 

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 04 


for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {
        console.log(i + " is divisible by 3");    // for loop divide 
        
    } else {
        console.log(i + " is not divisible by 3");
    }
}


// problem 05



  let studentName = "Ravi";
let Age = 17;
let mark = 55;

console.log("Checking eligibility for: " + studentName);

if (Age >= 18 && mark >= 50) {
    console.log("Student can appear for exam");

} else if (Age < 18 && mark >= 50) {  //  logical AND  oprator use for ckeck condition
    console.log("Student too young");

} else if (Age >= 18 && mark < 50) {
    console.log("Student failed");

} else {
    console.log("Student too young and failed");
}



// problem 06

let num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));  // multiplication taber arry solve 
}


// problem 07

let colors = ["Red", "Green", "Blue"];

console.log("Array length is:", colors.length);  // arry lenght proparty use inthis code 



// problem 08

  let aGe = 16; 

if (aGe >= 18) {
    console.log("You are an adult");

} else {
    console.log("You are a minor");
}


// problem 09

let number = [1, 2, 3, 4, 5];

for (let i = 0; i < number.length; i++) {
    console.log(nbrs[i]);
}



// prolem 10

let Numbr = 7;

if (Numbr % 2 === 0) {  //// this line MODULOUS oprator use huwa hai 
    console.log("True");

} else {
    console.log("False");
}


// problem 11

let numbers = [4, 7, 10, 13, 16];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {           // modulous oprator use in code 
        console.log("Number " + numbers[i] + " is Even");

    } else {
        console.log("Number " + numbers[i] + " is Odd");
    }
}



// problem 12

let colour = 500;

if (colour >= 60) {
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


//problem 13

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < nums.length; i++) {

    if (nums[i] % 2 === 0) {
        evenNumbers.push(nums[i]); // .push new element add krne ke liye use hota hai 


    } else {
        oddNumbers.push(nums[i]);
    }
}

console.log("Even numbers:", evenNumbers);
console.log("Odd numbers:", oddNumbers);



///  problem 14

let Number = [12, 45, 67, 23, 89, 5, 34];

let largest = Number[0];  // assume first element is the large number

for (let i = 1; i < Number.length; i++) {  /// i use a Comparison operator 

    if (Number[i] > largest) {
        largest = Number[i];
    }
}

console.log("Largest number is:", largest);


/// problem 15

let N = 12;

if (N % 4 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}


// problem 16 


for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}



// problem 17

let Num = 18;

for (let i = 1; i <= 10; i++) {
    console.log(Num + " x " + i + " = " + (Num * i));
}


///  problem 18

let Numbers = [45, 12, 78, 34, 89, 23, 67];

let max = Numbers[0]; // Assume first element is biggest
let min = Numbers[0]; // Assume first element is smallest

for(let i = 1; i < Numbers.length; i++){
    if(Numbers[i] > max){
        max = Numbers[i];
    }
    if(Numbers[i] < min){
        min = Numbers[i];
    }
}

alert("Maximum number is: " + max + "\nMinimum number is: " + min);



//  problem 19


let umar = 25;

if (umar <= 0) {
    console.log("Invalid Age");

} else if (umar < 7) {
    console.log("Free Ticket");

} else if (umar >= 7 && umar < 18) {
    console.log("Child Ticket 42 Rs");

} else if (umar >= 20 && umar < 60) {
    console.log("Adult Ticket 245 Rs");

} else {
    console.log("Senior Citizen Ticket 50 Rs");
}



// problem  20


let frUits = ["Apple", "mosambi", "Mango"];

for (let i = 0; i < frUits.length; i++) {
    console.log(frUits[i]);
}


// problem 21


for(let i = 1; i < numbers.length; i++){
    if(numbers[i] > max){
        max = numbers[i];
    }
    if(numbers[i] < min){
        min = numbers[i];
    }
}



// // problem 22

let markS = 85; 

 if (markS >= 90) 
    console.log(" Grade A ");

  else if (markS >= 75) 
    console.log(" Grade B ");

  else if (markS >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 



  // problem 22

let numBer = [1, 2, 3, 4, 5];

for (let i = 0; i < numBer.length; i++) {
    console.log(nbrs[i]);
}


//   // problem 22


for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


//   // problem 23

let Colors = ["Red", "Green", "Blue"];

console.log("Array length is:", Colors.length);



// problem 24

let AGe = 16;
let hasID = true;

if (AGe >= 18 && hasID === true) {
    console.log("You can enter");

} else {
    console.log("Access Denied");
}



// problem 25

let NUm = 7;

for (let i = 1; i <= 10; i++) {
    console.log(NUm + " x " + i + " = " + (NUm * i));
}



// problem 26

let a = 39;
let b = 25;
let operation = "add";

if (operation === "add") {
    console.log("Result is:", a + b);

} else if (operation === "sub") {
    console.log("Result is:", a - b);

} else {
    console.log("Invalid Operation");
}


// problem 27 

let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


// problem 28

let cities = ["Delhi", "Mumbai", "Kolkata", "Nagpur"];

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}


// problem 29

let Nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let EvenNumbers = [];
let OddNumbers = [];

for (let i = 0; i < Nums.length; i++) {

    if (Nums[i] % 2 === 0) {
        EvenNumbers.push(Nums[i]); 


    } else {
        OddNumbers.push(Nums[i]);
    }
}

console.log("Even numbers:", EvenNumbers);
console.log("Odd numbers:", OddNumbers);


// problem 30 

let value = -9;

if (value > 0) {
    console.log("value is Positive");

} else if (value < 0) {
    console.log("value is Negative");

} else {
    console.log("value is Zero");
}


// problem 31  ////  this problem a arry length proprty 

let Fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

console.log("First fruit:", fruits[0]); 

console.log("Last fruit:", fruits[fruits.length - 1]); 

console.log("Middle fruit:", fruits[2]);


// problem 32 /// arry lenghth problem 

let students = ["Aman", "Saurabh", "Riya", "Kunal", "Priya"];

console.log("Total students:", students.length); 

console.log("First student:", students[0]); 

console.log("Last student:", students[students.length - 1]); 




// problem 33  


function sumArray(numbers) {
    let sum = 0; //this variable store a sum of number 

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // they sad all number add in sum
    }

    return sum; // they sad final result ki sum
}

// use function call
let Result = sumArray([6, 5, 7, 8]);
console.log("Sum of array is:", result);



// problem 34  //// print even number with use of arry 


let NuMber = [5, 12, 7, 8, 3, 10]; 

for (let i = 0; i < Number.length; i++) { // how many total munber in the arr 

    if (Number[i] % 2 === 0) { // check number with modulas oprator
        console.log("Even number:", Number[i]);
    }
}



// problem 35 ../// arry proble 



let NumberS = [10, 20, 30, 40, 50]; // i create a one arry

for (let i = 0; i < NumberS.length; i++) { //  how many numberin arry (total lenghth )
    console.log("Numbers at index", i, "is:", NumberS[i]);
}



// problem 36  ///// if else 

let Score = parseInt(prompt("Enter your marks"));

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




// problem 37 //  // student grde pass chek problem if else




  let StudentName = "Ravi";
  let score = 89;   

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



// problem 38 .// 

let Mark = [50, 75, 45, 87, 45];

console.log("Students Result:");

for (let i = 0; i < Mark.length; i++) {

    if (Mark[i] >= 40) {
        console.log("Student " + (i+1) + ": Pass (Mark = " + Mark[i] + ")");
        
    } else {
        console.log("Student " + (i+1) + ": Fail (Mark = " + Mark[i] + ")");
    }
}




// problem 39 //arr se even number print problem

let numbeRs = [1,2,3,4,5,6,7,8,9,10];

console.log("Even numbers in the array:");

for (let i = 0; i < numbeRs.length; i++) {

    if (numbeRs[i] % 2 === 0) {   
        console.log(numbeRs[i]);
    }
}




// problem 40 // // student exam de sakte ki nai chek with if-else

  let Studentname = "Ravi";
let AgE = 17;
let MArk = 55;

console.log("Checking eligibility for: " + Studentname);

if (AgE >= 18 && MArk >= 50) {
    console.log("Student can appear for exam");

} else if (AgE < 18 && MArk >= 50) {
    console.log("Student too young");

} else if (AgE >= 18 && MArk < 50) {
    console.log("Student failed");

} else {
    console.log("Student too young and failed");
}


//  problem 41  //// forloop divide 

for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {
        console.log(i + " is divisible by 3");
        
    } else {
        console.log(i + " is not divisible by 3");
    }
}




// problem 42 //// forloop even odd number 

for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}


// problem 43 ///// arr   use krun possitive nigetive number print karana 

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



/// problem 42 ///// factrial of a number with for loop 

let n = 5;
let fact = 1;

for (let i = 1; i <= n; i++) {
  fact *= i; // iska mtlb ki aane wali value ko multiply i se krna //
}

console.log("Factorial =", fact);




// problem 43 ///for loop sum problem 

let Sum = 0;

for (let i = 1; i <= 10; i++) {
  Sum += i; // iska mtlb ki sum hone ke bad sum + i ki value //
}

console.log("Sum =", sum);



//problem 44 //// even number print with for loop

for (let i = 1; i <= 20; i++) {

  if (i % 2 === 0) {
    console.log(i);
  }
}



// problem 45 ////  for loop reverse number print

for (let i = 10; i >= 1; i--) {
  console.log(i);
}





// problem 46 //// multiplya krke tabel print krna 

for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + (5 * i));
}




/// problem 47 ///   bada number print krna 

let x = 15;
let y = 25;

 if (x > y) {
    console.log("Largest =", x);
} else {
    console.log("Largest =", y);
}




/// problem 48 /// function arry 

function findLargestNumber(numbers) {
    let largest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
      
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    console.log("The largest number is: " + largest);
}

// Test arr function 
findLargestNumber([12, 45, 7, 89, 23, 56]);




/// problem 49 ///big maltipication problem

function bigMultiplicationTable(num) {
  
    for (let i = 1; i <= 20; i++) {
        console.log(num + " × " + i + " = " + (num * i));
    }
}

bigMultiplicationTable(7);






/// problem 50   /// // revers counting 

function reverscounting(){
  for(let i = 10; i >= 1; i--){
    console.log(i);
  }
}

reverscounting();


// problem 51   ///even odd function

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



/// problem 51 ////  some of number loop problem


function sumOfNumbers(N) {
    let sum = 0;

    for (let i = 1; i <= N; i++) {
        sum += i;  
    }

    console.log("Sum of numbers from 1 to " + N + " = " + sum);
}

sumOfNumbers(10);  



// problem 52 //function multiplicationTable(num) {

    for (let i = 1; i <= 10; i++) {
       { console.log(num + " × " + i + " = " + (num * i));
    }
}

multiplicationTable(5); 




// problem 53 ///voting elagibility problem

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



// problem 54 //posotive negative num problem

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




//  problem 55 /////grocery bill

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
}



// problem 56 ////exam scoring problem 


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






// problem 57  ///// labry books short problrm 


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




/// problem 58 /// / student function and forloop use 

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



/// problem 59// for loop chek even-odd num

let NUM = 5;  

for (let i = 1; i <= 10; i++) {
    let result = NUM * i;

    if (result % 2 === 0) {
        console.log(result + " is EVEN");

    } else {
        console.log(result + " is ODD");
    }
}
 

// problem 60 /// shoping discount problem


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



//// problem 61 // //grade check function problem

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


// problem  62 // / new age chek problem try 

let AGE = prompt("18");


AGE = Number(AGE);

if (AGE >= 18) {
    console.log("You can drive.");

} else {
    console.log("You cannot drive yet.");
}



/// problem  63 // fuction number tyape check

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




/// problem 64 ///  / start function 


function checkDriving(age) {

  if (age < 18) {
    console.log("You cannot drive");
  
  } else {

    console.log("You can drive");
  }
}
// call function for testing 

checkDriving(16); 
checkDriving(20); 


// problem 65 // truthy false 

let isRaining = false;

if (isRaining) {
    console.log("Take an umbrella");
} else {
    console.log("Enjoy the sunshine");
}


// problem 66 ///  simple fruit arry

let fruiTS = ["Apple", "Banana", "Mango"];
console.log(fruiTS);



// problem 67 // arr and if else mix 

let nuMBRrs = [5, 10, 15];

if (nuMBRrs.length > 2) {
    console.log("Array has more than 2 elements");
} else {
    console.log("Array has 2 or fewer elements");
}



/// problem  68 /// true false with Variable


let aGE = 20;
let isAdult = aGE >= 18;

if (isAdult) {
    console.log("You are an adult");
} else {
    console.log("You are a minor");
}

// problem 69 /// Positive - Negative

let NuM = 8;

if (NuM > 0) {
    console.log("Positive number");
} else {
    console.log("Negative number");
}





// problem 70 //// tiket booking problem 


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




// problem 72 // 
 
let userName = "Saurabh";
let userAge = 20;

if (userAge >= 18) {
    console.log(userName + " is an Adult");
} else {
    console.log(userName + " is a Minor");
}



// problem 73//


let favFood = "gup-chup";

if (favFood === "Salad" || favFood === "Fruits") {
    console.log("You chose a healthy food!");
} else {
    console.log("Try eating something healthier next time!");
}



// // problem 74 ////



let isHomeworkDone = false;

if (isHomeworkDone) {
    console.log("Great job! You finished your homework.");
} else {
    console.log("Please complete your homework soon.");
}




// // // problem 75 ////


let jsProgress = 15;

if (jsProgress >= 80) {
    console.log("You're doing excellent in js!");
} else if (jsProgress >= 50) {
    console.log("Good progress! Keep practicing.");
} else {
    console.log("You need to practice more jS.");
}



// problem 76 //


let subjectList = ["HTML", "CSS", "JS"];

console.log("Subjects you study are:");
console.log(subjectList);





/// problem 77 ///




let favCity = "hinganghat";
let citie = ["hinganghat", "Mumbai", "Pune", "Nagpur"];

if (citie.includes(favCity)) {
    console.log(favCity + " is in the list!");
} else {
    console.log(favCity + " is not in the list!");
}




// problem 78 // 

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



/// problem 79 ///


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



/// problem 80 ///

let marks = 85; 

 if (marks >= 90) 
    console.log(" Grade A ");

  else if (marks >= 75) 
    console.log(" Grade B ");

  else if (marks >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");



  // problem 81 ///

  let temperature = 32;

if (temperature > 30) {
    console.log("It's a hot day");
} else {
    console.log("The weather is cool");
}



// problem 82 // 

let isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome back, user!");
} else {
    console.log("Please log in to continue.");
}



// problem 83 // 

let numbeR = [2, 4, 6, 8, 10];
let findNum = 6;

if (numbeR.includes(findNum)) {
    console.log(findNum + " is found in the array!");
} else {
    console.log(findNum + " is not in the array!");
}


// problem 84 // 


let subjects = ["Math", "Science", "English"];
let favSubject = "Science";

if (subjects.includes(favSubject)) {
    console.log(favSubject + " is one of your favorite subjects!");
} else {
    console.log(favSubject + " is not in your subject list.");
}



// problem 85 //


let nUM = 20;

for (let i = 1; i <= 10; i++) {
    console.log(nUM + " x " + i + " = " + (nUM * i));
}




// problem 86  // 

let nUMs = 9;

if (nUMs % 2 === 0) {
    console.log("Even Number");
    
} else {
    console.log("Odd Number");
}



// problem 87 //


let numB = 7;

for (let i = 1; i <= 10; i++) {
    console.log(numB + " x " + i + " = " + (numB * i));
}



// problem 88 //


for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}



// problem 89 //


let frUiTs = ["Apple", "Bnana", "Mango"];

for (let i = 0; i < frUiTs.length; i++) {
    console.log(frUiTs[i]);
}



// problem 90 // 


let numbRs = [10, 20, 30, 40, 50];

for (let i = numbRs.length - 1; i >= 0; i--) {
    console.log(numbRs[i]);
}




// problem 91 //

let NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let evennumbers = [];
let odDNumbers = [];

for (let i = 0; i < NUMS.length; i++) {

    if (NUMS[i] % 2 === 0) {
        evennumbers.push(NUMS[i]); // pushh for new element add krne ke liye 

    } else {
        odDNumbers.push(NUMS[i]);
    }
}

console.log("Even numbers:", evennumbers);
console.log("Odd numbers:", odDNumbers);


// problem 92 // 

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


// problem 93 // 


let marKS = 85; 

 if (marKS >= 90) 
    console.log(" Grade A ");

  else if (marKS >= 75) 
    console.log(" Grade B ");

  else if (marKS >= 50) 
    console.log(" Grade C ");

  else 
    console.log(" Fail ");
 



  // problem 94 //


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




// problem 95 //


for (let i = 1; i <= 5; i++) {

    if (i % 2 === 0) {
        console.log(i + " is Even");

    } else {
        console.log(i + " is Odd");
    }
}



// problem 96 //


let W = 20;
let G = 10;
let Operation = "add";

if (Operation === "add") {
    console.log("Result is:", W + G);  

} else if (Operation === "sub") {
    console.log("Result is:", W - G);

} else {
    console.log("Invalid Operation");
}


// problem 97  // 

let nuMB = 9;

for (let i = 1; i <= 10; i++) {
    console.log(numB + " x " + i + " = " + (numB * i));
}



