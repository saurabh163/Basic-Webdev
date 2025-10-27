
// check field empty //

function checkEmpty() {
  let name = document.getElementById("username").value;
  if (name === "") {
    document.getElementById("message").innerText = "Please enter your name!";
    return false; // form will not submit 

  } else {
    document.getElementById("message").innerText = "Form submitted!";
    return true;
  }
}




// check mail 


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



//  password length //
 
function validatePassword() {
  let password = document.getElementById("pass").value;
  if (password.length < 6) {
    document.getElementById("output").innerText = "Password too short!";
    return false;
  }
  document.getElementById("output").innerText = "Password accepted!";
  return true;
}



// conform password match //

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


// number input validation //

function checkNumber() {
  let value = document.getElementById("num").value;
  if (isNaN(value)) {
    document.getElementById("result").innerText = "Only numbers allowed ";
    return false;
  } else {
    document.getElementById("result").innerText = "Valid number ";
    return true;
  }
}



/// select option validation //

function checkSelect() {
  let city = document.getElementById("city").value;
  if (city === "") {
    document.getElementById("msg").innerText = "Please select a city";
    return false;
  }
  document.getElementById("msg").innerText = "City selected: " + city;
  return true;
}



// fields required check //

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



// check age //

function checkAge() {
  let age = document.getElementById("age").value;
  if (age < 18) {
    document.getElementById("msg").innerText = "You must be 18 or older";
    return false;
  }
  document.getElementById("msg").innerText = "Welcome to form and form validation";
  return true;
}



// check email//


function checkEmailEnd() {
  let email = document.getElementById("email").value;
  if (!email.endsWith(".com")) {
    document.getElementById("msg").innerText = "Email must end with .com";
    return false;
  }
  document.getElementById("msg").innerText = "Valid email!";
  return true;
}



// username withaut space //

function noSpace() {
  let u = document.getElementById("user").value;
  if (u.includes(" ")) {
    document.getElementById("show").innerText = "No spaces allowed in username";
    return false;
  }
  document.getElementById("show").innerText = "Username looks good";
  return true;
}



 // mobile number must be 10 Digits //

 function checkPhone() {
  let num = document.getElementById("phone").value;
  if (num.length !== 10) {
    document.getElementById("msg").innerText = "Phone must be 10 digits";
    return false;
  }
  document.getElementById("msg").innerText = "Phone valid!";
  return true;
}



// check box check //

function checkBox() {
  let box = document.getElementById("agree");
  if (!box.checked) {
    document.getElementById("msg").innerText = "Please accept the terms";
    return false;
  }
  document.getElementById("msg").innerText = "Thank you";
  return true;
}




// sshow password toggel //

function togglePass() {
  let p = document.getElementById("pass");
  if (p.type === "password") {
    p.type = "text";
  } else {
    p.type = "password";
  }
}



// live characters count //

function countChar() {
  let text = document.getElementById("text").value;
  document.getElementById("count").innerText = text.length + " characters";
}



///  charactor  numbers name //

function checkName() {
  let name = document.getElementById("name").value;
  if (name.length < 3) {
    document.getElementById("msg").innerText = "Name must be at least 3 letters!";
    return false;
  }
  document.getElementById("msg").innerText = "Name looks good!";
  return true;
}


/// if mail @ and '.' validation//

function checkEmail() {
  let email = document.getElementById("email").value;
  if (email.includes("@") && email.includes(".")) {
    document.getElementById("output").innerText = "Valid email!";
    return true;
  } else {
    document.getElementById("output").innerText = "Invalid email!";
    return false;
  }
}



/// Show alert on successful submission  //


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


// disseble submit if password short //

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



// text input limite //

function limitText() {
  let text = document.getElementById("bio").value;
  if (text.length > 20) {
    document.getElementById("msg").innerText = "Limit reached (20 chars max)!";
    document.getElementById("bio").value = text.substring(0, 20);
  } else {
    document.getElementById("msg").innerText = text.length + "/20";
  }
}
  


// show select gender //

function showGender(ele) {
  document.getElementById("msg").innerText = "Selected: " + ele.value;
}



// highlighte empty files //

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



// convert name input //

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



/// check  2 email mathch for submite //

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


