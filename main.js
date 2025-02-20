/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!"; 

Changes the h1 to Hello World */

/*document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

If you click anywhere on html page this alerts ...*/




let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Rocket league is the best, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Rocket league is the best, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

