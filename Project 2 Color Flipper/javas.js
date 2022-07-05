let btn = document.querySelector("#btn")

btn.addEventListener("click", function () {

let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);

let newcol = `rgb(${r}, ${g}, ${b})`;

let value = document.querySelector(".color");

value.innerHTML = newcol;
let bgc = document.querySelector("body");

bgc.style.backgroundColor = newcol;
})