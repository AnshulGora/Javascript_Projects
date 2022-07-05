let rkbtn = document.querySelector(".rk");
let prbtn = document.querySelector(".pr");
let srbtn = document.querySelector(".sr");
let playerchoice ;
let computerchoice ; 
let result = document.querySelector(".rc");


rkbtn.addEventListener("click", function () {
    // alert("You chose Rock!!");    
    playerchoice = 0;
    computerchoice = Math.floor(Math.random() * 3);
    assign();
    document.querySelector(".pc").innerHTML = "Rock";
    check();
})

prbtn.addEventListener("click", function () {
    // alert("You chose Paper!!");    
    playerchoice = 1;
    computerchoice = Math.floor(Math.random() * 3);
    assign();
    document.querySelector(".pc").innerHTML = "Paper 📝";
    check();
})

srbtn.addEventListener("click", function () {
    // alert("You chose Scissor!!");    
    playerchoice = 2;
    computerchoice = Math.floor(Math.random() * 3);
    assign();
    document.querySelector(".pc").innerHTML = "Scissor ✂️";
    check();
})

function check() {

    if (playerchoice === computerchoice) {
    result.innerHTML = "🕺 Draw 🕺";
}
else if ( (playerchoice === 0 && computerchoice === 2) || (playerchoice === 1 && computerchoice === 0) || (playerchoice === 2 && computerchoice === 1) ) {
    result.innerHTML = "You Won !";
}
else {
    result.innerHTML = "You Lose !";
}
    
}

function assign() {
    if (computerchoice === 0) {
        document.querySelector(".cc").innerHTML = "Rock";
    }
    else if ( computerchoice === 1) {
        document.querySelector(".cc").innerHTML = "Paper 📝";
    }
    else {
        document.querySelector(".cc").innerHTML = "Scissor ✂️";
    }
}