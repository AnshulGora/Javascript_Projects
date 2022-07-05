setInterval(() => {
    
    let datetime = new Date();

    let hrs = datetime.getHours();
    let min = datetime.getMinutes();
    let sec = datetime.getSeconds();

    // Setting Session as per hrs
    if (hrs > 12) {
        document.querySelector("#ses").innerHTML = "PM" ;
    }
    else { document.querySelector("#ses").innerHTML = "AM" ;}

    // Setting hrs in 12 hours format 
    if (hrs >12) {
        hrs = hrs - 12;
    }
    
    document.querySelector("#hrs").innerHTML = hrs ;
    document.querySelector("#min").innerHTML = min ;
    document.querySelector("#sec").innerHTML = sec ;

    // Making hrs look in double digit
    if (hrs < 10) {
        document.querySelector("#hrs").innerHTML =  "0" + hrs ;
    }
    // Making sec look in double digit
    if (sec < 10) {
        document.querySelector("#sec").innerHTML =  "0" + sec ;
    }


}, 10);