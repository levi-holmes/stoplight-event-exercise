  // YOUR CODE HERE
var stopPush = document.querySelector("#stopButton")
var slowPush = document.querySelector("#slowButton")
var goPush = document.querySelector("#goButton")

var stopLight = document.querySelector("#stopLight");
var slowLight = document.querySelector("#slowLight");
var goLight = document.querySelector("#goLight");

stopPush.addEventListener('click', stoplightOn);
slowPush.addEventListener('click', slowlightOn);
goPush.addEventListener('click', golightOn);

stopPush.addEventListener('mouseenter', enter);
stopPush.addEventListener('mouseleave', leave);

slowPush.addEventListener('mouseenter', enter);
slowPush.addEventListener('mouseleave', leave);

goPush.addEventListener('mouseenter', enter);
goPush.addEventListener('mouseleave', leave);

  function enter() {
    console.log("Entered " + this.textContent + " button");
  }

  function leave() {
    console.log("Left " + this.textContent + " button");
  }

  function stoplightOn() {
    if (stopLight.style.background == "red") {
      stopLight.style.background = "black";
    } else {
      stopLight.style.background = "red";
    }
  };

  function slowlightOn() {
    if (slowLight.style.background == "yellow") {
      slowLight.style.background = "black";
    } else {
      slowLight.style.background = "yellow";
    }
  };

  function golightOn() {
    if (goLight.style.background == "green") {
      goLight.style.background = "black";
    } else {
      goLight.style.background = "green";
    }
  };
