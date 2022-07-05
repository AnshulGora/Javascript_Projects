let count = document.querySelector("#count");
let dbtn = document.querySelector(".dec");
let rbtn = document.querySelector(".res");
let ibtn = document.querySelector(".inc");

let c = 0;
dbtn.addEventListener("click", function () {   
    document.querySelector("#count").innerHTML = --c;

    if (c < 0) {
        count.style.color = "#FF5D5D" ;
    }
    else if (c === 0) {
        count.style.color = "#8CC0DE" ;
    }
});

rbtn.addEventListener("click", function () {   
    document.querySelector("#count").innerHTML = 0;
    // Setting c to 0.
    c=0;
    if (c === 0) {
        count.style.color = "#8CC0DE" ;
    }
});

ibtn.addEventListener("click", function () {   
    document.querySelector("#count").innerHTML = ++c;

    if (c > 0) {
        count.style.color = "#4E9F3D" ;
    }
    else if (c === 0) {
        count.style.color = "#8CC0DE" ;
    }
});


