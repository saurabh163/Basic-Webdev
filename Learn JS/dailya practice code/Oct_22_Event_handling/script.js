
// massage show //

const btn = document.getElementById("btn");
const msg = document.getElementById("msg");

btn.addEventListener("click", function() {
  msg.textContent = "Hello Bro I'm lernning event handling ";
});




// box color change //

const box = document.getElementById("box");

box.addEventListener("dblclick", function() {
  box.style.backgroundColor = "yellow";
});




// mouse hover //

const text = document.getElementById("text");

text.addEventListener("mouseover", function() {
  text.textContent = "laern mouse over event";
});

text.addEventListener("mouseout", function() {
  text.textContent = "Hover on me";
});



// input text show /

const input = document.getElementById("name");
const show = document.getElementById("show");

input.addEventListener("input", function() {
  show.textContent = input.value;
});



/// press keybord key //

const showKey = document.getElementById("showKey");

document.addEventListener("keydown", function(event) {
  showKey.textContent = "You pressed: " + event.key;
});




// form submit alert //

const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // form ke reload hone se rokta hai
  alert("Form Submitted Successfully! ✅");
});


/// massge show //

const checkbox = document.getElementById("agree");
const Msg = document.getElementById("msg");

checkbox.addEventListener("change", function() {
  if (checkbox.checked) {
    Msg.textContent = "✅ You agreed!";
  } else {
    Msg.textContent = "";
  }
});


// paragraph hide show //

const bTn = document.getElementById("toggleBtn");
const tExt = document.getElementById("text");
let visible = true;

bTn.addEventListener("click", function() {
  if (visible) {
    tExt.style.display = "none";
    bTn.textContent = "Show Text";
    visible = false;
  } else {
    tExt.style.display = "block";
    bTn.textContent = "Hide Text";
    visible = true;
  }
});



// counter //

const btN = document.getElementById("countBtn");
const count = document.getElementById("count");
let num = 0;

btN.addEventListener("click", function() {
  num++;
  count.textContent = num;
});


//coordinates show karna //

const coords = document.getElementById("coords");

document.addEventListener("mousemove", function(event) {
  coords.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});



// character count//

const Input = document.getElementById("textInput");
const Count = document.getElementById("count");

Input.addEventListener("input", function() {
  Count.textContent = "Characters: " + input.value.length;
});



// color badlna //

const BTN = document.getElementById("colorBtn");
const teXt = document.getElementById("text");

BTN.addEventListener("click", function() {
  const colors = ["red", "blue", "green", "purple", "orange"];
  const random = Math.floor(Math.random() * colors.length);
  teXt.style.color = colors[random];
});
