
// one click text show 

const msg = document.getElementById("msg");
const btn = document.getElementById("showBtn");

btn.addEventListener("click", function() {
  msg.style.display = "block";
});


// bg colour change //

const Btn = document.getElementById("bgBtn");

Btn.addEventListener("click", function() {
  document.body.style.backgroundColor = "pink";
});



// randombg color chnge  //

const colors = ["red", "green", "blue", "orange", "purple", "pink", "yellow"];
const BtN = document.getElementById("BgBtn");

BtN.addEventListener("click", function() {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});




// show result //

const result = document.getElementById("sum");
const bTn = document.getElementById("addBtn");

bTn.addEventListener("click", function() {
  result.innerText = "Result: " + (5 + 10);
});



// input box text show //

const nameInput = document.getElementById("name");
const btN = document.getElementById("showName");
const output = document.getElementById("output");

btN.addEventListener("click", function() {
  output.innerText = " hello guys " + nameInput.value + " 👋";
});



// font text color change //

const text = document.getElementById("text");
const bTN = document.getElementById("colorBtn");

bTN.addEventListener("click", function() {
  text.style.color = "blue";
});


// incrice numbe //

let count = 0;
const BTN = document.getElementById("incBtn");
const display = document.getElementById("count");

BTN.addEventListener("click", function() {
  count++;
  display.innerText = count;
});
