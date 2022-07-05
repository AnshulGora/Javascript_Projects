let num = Math.floor(Math.random() * 2);
let btn = document.querySelector(".btn");


btn.addEventListener("click", function (){
let num = Math.floor(Math.random() * 2);
let btn = document.querySelector(".btn");

let result = document.querySelector(".result");

if ( num === 0 ){
    document.querySelector(".result").innerHTML = "Head";
    result.style.color = "#FAC213";
}
else if (num ===1 ){
    document.querySelector(".result").innerHTML = "Tail";
    result.style.color = "#7F8487";
}
} )
