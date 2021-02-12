// <⚠️ DONT DELETE THIS ⚠️>
// <⚠️ /DONT DELETE THIS ⚠️>
const h1 = document.querySelector("h1");
const body = document.body;
const colors = ["#FFC300", "#33FFEC", "#FF5733"];

const resizing = function resizeColor(event) {
  let currentWidth = window.innerWidth;
  if (currentWidth <= 300) {
    body.style.backgroundColor = colors[0];
    h1.innerText = "It is yellow!";
    h1.style.color = colors[1];
  } else if (300 < currentWidth && currentWidth <= 1000) {
    body.style.backgroundColor = colors[1];
    h1.innerText = "It is blue!";
    h1.style.color = colors[2];
    console.log("it's blue");
  } else {
    body.style.backgroundColor = colors[2];
    h1.innerText = "It is red!";
    h1.style.color = colors[0];
    console.log("it's red");
  }
};

window.addEventListener("resize", resizing);
resizing();
